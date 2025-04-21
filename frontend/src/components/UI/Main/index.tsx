type MainProps = {
    full_screen: boolean
    children: React.ReactNode
}

export const Main = ({ full_screen, children }: Readonly<MainProps>) => {
    return (
        <>
            <main className={`${full_screen ? "w-screen min-h-screen" : ""} bg-gray-50 dark:bg-gray-900`}>
                { children }
            </main>
        </>
    )
}