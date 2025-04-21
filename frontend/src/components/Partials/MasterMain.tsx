import { Main } from "@/components/UI/Main";

export default function MasterMain({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Main full_screen>
                { children }
            </Main>
        </>
    )
}