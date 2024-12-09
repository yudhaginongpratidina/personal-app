import React from "react";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

// export default function AuthButton({ children }: { children: React.ReactNode }) {
//     return (
//         <button className="w-full p-2.5 rounded-sm font-medium text-white bg-blue-500 hover:bg-blue-600 duration-200">
//             { children }
//         </button>
//     )
// }

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-full p-2.5 rounded-sm font-medium text-white bg-blue-500 hover:bg-blue-600 duration-200 ${className}`} {...props}>
            { children }
        </button>
    )
})

export default AuthButton