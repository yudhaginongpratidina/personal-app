import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../libs/cn";

const ButtonVariants = cva(
    "w-full py-2.5 px-3 border rounded-sm",
    {
        variants: {
            variant: {
                default: "border-black bg-black hover:bg-gray-800 text-white",
                outline: "border-black text-black",
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