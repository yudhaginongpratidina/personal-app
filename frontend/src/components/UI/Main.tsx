type MainProps = {
    full_screen: boolean
    children: React.ReactNode
    className?: string
}

export const Main = ({ full_screen, children, className }: Readonly<MainProps>) => {
    return (
        <>
            <main className={`${full_screen ? "w-screen min-h-screen" : ""} flex flex-col items-center bg-white dark:bg-black transition duration-200 ${className}`}>
                { children }
            </main>
        </>
    )
} 