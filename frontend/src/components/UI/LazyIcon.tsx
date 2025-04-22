"use client"
import { createElement, useEffect, useState, memo } from 'react';

// ----------------------------------------------------------------------------------------
// Tipe untuk pustakan icon yang di support
// ----------------------------------------------------------------------------------------
type IconLibrary =
    'md' | 'fa' | 'fa6' | 'ai' | 'bi' | 'bs' | 'fi' | 'go' | 'gr' |
    'hi' | 'hi2' | 'im' | 'io' | 'io5' | 'ri' | 'si' | 'ti' | 'vsc' |
    'wi' | 'cg' | 'lu' | 'tb';

// ----------------------------------------------------------------------------------------
// Membuat cache
// ----------------------------------------------------------------------------------------
// iconModuleCache: Cache untuk menyimpan modul ikon yang sudah dimuat
// iconComponentCache: Cache untuk menyimpan komponen ikon yang sudah dimuat
// ----------------------------------------------------------------------------------------
const iconModuleCache: Record<IconLibrary, any> = {} as Record<IconLibrary, any>;
const iconComponentCache: Record<string, any> = {};

// ----------------------------------------------------------------------------------------
// Fungsi untuk load modul ikon
// ----------------------------------------------------------------------------------------
const loadIconModule = async (library: IconLibrary): Promise<any> => {
    if (iconModuleCache[library]) { return iconModuleCache[library]; }
    try {
        let iconModule;
        switch (library) {
            case 'md': iconModule = await import('react-icons/md'); break;
            case 'fa': iconModule = await import('react-icons/fa'); break;
            case 'fa6': iconModule = await import('react-icons/fa6'); break;
            case 'ai': iconModule = await import('react-icons/ai'); break;
            case 'bi': iconModule = await import('react-icons/bi'); break;
            case 'bs': iconModule = await import('react-icons/bs'); break;
            case 'fi': iconModule = await import('react-icons/fi'); break;
            case 'go': iconModule = await import('react-icons/go'); break;
            case 'gr': iconModule = await import('react-icons/gr'); break;
            case 'hi': iconModule = await import('react-icons/hi'); break;
            case 'hi2': iconModule = await import('react-icons/hi2'); break;
            case 'im': iconModule = await import('react-icons/im'); break;
            case 'io': iconModule = await import('react-icons/io'); break;
            case 'io5': iconModule = await import('react-icons/io5'); break;
            case 'ri': iconModule = await import('react-icons/ri'); break;
            case 'si': iconModule = await import('react-icons/si'); break;
            case 'ti': iconModule = await import('react-icons/ti'); break;
            case 'vsc': iconModule = await import('react-icons/vsc'); break;
            case 'wi': iconModule = await import('react-icons/wi'); break;
            case 'cg': iconModule = await import('react-icons/cg'); break;
            case 'lu': iconModule = await import('react-icons/lu'); break;
            case 'tb': iconModule = await import('react-icons/tb'); break;
            default: throw new Error(`Pustaka ikon tidak didukung: ${library}`);
        }
        iconModuleCache[library] = iconModule;
        return iconModule;
    } catch (error) {
        console.error(`Gagal memuat pustaka ikon ${library}:`, error);
        throw error;
    }
};

// ----------------------------------------------------------------------------------------
// Mengambil icon berdasarkan string path (pustaka/NamaIkon)
// ----------------------------------------------------------------------------------------
const getDynamicIcon = async (iconPath: string): Promise<any> => {
    if (iconComponentCache[iconPath]) return iconComponentCache[iconPath];
    try {
        const [library, iconName] = iconPath.split('/');

        if (!library || !iconName) {
            throw new Error("Format ikon tidak valid. Gunakan format 'pustaka/NamaIkon'.");
        }

        const iconModule = await loadIconModule(library as IconLibrary);

        if (iconName in iconModule) {
            iconComponentCache[iconPath] = iconModule[iconName];
            return iconModule[iconName];
        }
        else {
            throw new Error(`Ikon ${iconName} tidak ditemukan dalam pustaka ${library}`);
        }
    } catch (error) {
        console.error("Error memuat ikon:", error);
        if (!iconModuleCache.md) iconModuleCache.md = await import('react-icons/md');
        return iconModuleCache.md.MdError;
    }
};

interface LazyIconProps {
    iconPath: string;
    className?: string;
    size?: number | string;
    color?: string;
}

// ----------------------------------------------------------------------------------------
// Membuat LayIcon untuk me load icon secara dinamis
// ----------------------------------------------------------------------------------------
const LazyIcon: React.FC<LazyIconProps> = memo(({ iconPath, className = "", size, color }) => {
    const [IconComponent, setIconComponent] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadIcon = async () => {
            try {
                const Icon = await getDynamicIcon(iconPath);
                if (isMounted) {
                    setIconComponent(() => Icon);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Gagal memuat ikon:", error);
                setIsLoading(false);
            }
        };

        loadIcon();
        return () => { isMounted = false; };
    }, [iconPath]);

    if (isLoading) {
        const sizeStyle = size ? { width: size, height: size } : { width: '1.5rem', height: '1.5rem' };
        return <span className={`animate-pulse bg-gray-700 rounded-full ${className}`} style={sizeStyle} />;
    }

    if (!IconComponent) return null;
    const iconProps: any = { className };
    if (size) iconProps.size = size;
    if (color) iconProps.color = color;

    return createElement(IconComponent, iconProps);
});

LazyIcon.displayName = 'LazyIcon';
export default LazyIcon;