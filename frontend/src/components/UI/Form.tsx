interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
}

export const Form = ({ children, ...props }: FormProps) => {
    return (
        <form {...props} className="w-full flex flex-col gap-6">
            {children}
        </form>
    )
}