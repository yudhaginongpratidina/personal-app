import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../libs/cn";

const ButtonVariants = cva(
    "w-full p-2.5 border rounded-sm",
    {
        variants: {
            variant: {
                default: "border-black bg-black hover:bg-gray-800 text-white",
            }
        },
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, children, ...props }, ref) => {
        return (
            <button ref={ref} className={cn(ButtonVariants({ variant, className }))} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;