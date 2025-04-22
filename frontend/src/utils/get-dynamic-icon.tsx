import { createElement, useEffect, useState } from 'react';

type IconLibrary = 'md' | 'fa' | 'fa6' | 'ai' | 'bi' | 'bs' | 'fi' | 'go' | 'gr' | 'hi' | 'hi2' | 'im' | 'io' | 'io5' | 'ri' | 'si' | 'ti' | 'vsc' | 'wi' | 'cg' | 'lu' | 'tb';

const getDynamicIcon = async (iconString: string) => {
    try {
        // Format yang diharapkan: "md/MdOutlineCallToAction", "fa/FaUser", dll.
        const parts = iconString.split('/');

        if (parts.length !== 2) {
            throw new Error("Invalid icon format. Use 'library/IconName' format.");
        }

        const library = parts[0] as IconLibrary;
        const iconName = parts[1];

        // Dynamic import library icon dengan cara yang aman untuk TypeScript
        let iconModule;

        switch (library) {
            case 'md':
                iconModule = await import('react-icons/md');
                break;
            case 'fa':
                iconModule = await import('react-icons/fa');
                break;
            case 'fa6':
                iconModule = await import('react-icons/fa6');
                break;
            case 'ai':
                iconModule = await import('react-icons/ai');
                break;
            case 'bi':
                iconModule = await import('react-icons/bi');
                break;
            case 'bs':
                iconModule = await import('react-icons/bs');
                break;
            case 'fi':
                iconModule = await import('react-icons/fi');
                break;
            case 'go':
                iconModule = await import('react-icons/go');
                break;
            case 'gr':
                iconModule = await import('react-icons/gr');
                break;
            case 'hi':
                iconModule = await import('react-icons/hi');
                break;
            case 'hi2':
                iconModule = await import('react-icons/hi2');
                break;
            case 'im':
                iconModule = await import('react-icons/im');
                break;
            case 'io':
                iconModule = await import('react-icons/io');
                break;
            case 'io5':
                iconModule = await import('react-icons/io5');
                break;
            case 'ri':
                iconModule = await import('react-icons/ri');
                break;
            case 'si':
                iconModule = await import('react-icons/si');
                break;
            case 'ti':
                iconModule = await import('react-icons/ti');
                break;
            case 'vsc':
                iconModule = await import('react-icons/vsc');
                break;
            case 'wi':
                iconModule = await import('react-icons/wi');
                break;
            case 'cg':
                iconModule = await import('react-icons/cg');
                break;
            case 'lu':
                iconModule = await import('react-icons/lu');
                break;
            case 'tb':
                iconModule = await import('react-icons/tb');
                break;
            default:
                throw new Error(`Unsupported icon library: ${library}`);
        }

        // Akses icon dengan type safety
        if (iconModule && iconName in iconModule) {
            return (iconModule as any)[iconName];
        } else {
            throw new Error(`Icon ${iconName} not found in library ${library}`);
        }
    } catch (error) {
        console.error("Error loading icon:", error);
        // Fallback ke icon error
        const fallbackModule = await import('react-icons/md');
        return fallbackModule.MdError;
    }
};

const LazyIcon: React.FC<{ iconPath: string, className?: string }> = ({ iconPath, className = "w-6 h-6" }) => {
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
                console.error("Failed to load icon:", error);
                setIsLoading(false);
            }
        };

        loadIcon();

        return () => {
            isMounted = false;
        };
    }, [iconPath]);

    if (isLoading) {
        return <span className="w-6 h-6 animate-pulse bg-gray-700 rounded-full" />;
    }

    return IconComponent ? createElement(IconComponent, { className }) : null;
};

export default LazyIcon;