import Main from "@/components/UI/Main"

export default function MasterMain({ children }: { children: React.ReactNode }) {
    return (
        <Main>
            { children }
        </Main>
    )
}