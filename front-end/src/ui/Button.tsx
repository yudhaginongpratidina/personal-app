type ButtonProps = {
    type: "submit" | "reset" | "button"
    children: React.ReactNode
    className?: string
}

export default function Button(props : ButtonProps) {

    const { type, children, className } = props

    return (
        <button type={type} className={`w-fit py-2.5 px-6 rounded-md flex justify-center items-center gap-2 duration-100 capitalize ${className}`}>
            { children }
        </button>
    )
}