import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../libs/cn";

const CardVariants = cva(
    "border rounded-sm bg-white flex flex-col gap-4",
    {
        variants: {
            size: {
                default: "w-full",
                sm: "w-full max-w-sm",
                md: "w-full max-w-md",
                lg: "w-full max-w-lg",
                xl: "w-full max-w-xl",
                "2xl": "w-full max-w-2xl",
            }
        }
    }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardVariants> {
    children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, size, ...props }, ref) => {
    return (
        <div ref={ref} className={cn(CardVariants({ size, className }))} {...props}>
            {children}
        </div>
    )
})

Card.displayName = "Card";

const CardHeader = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={`w-full p-4 border-b ${className}`}>
            {children}
        </div>
    )
}

const CardBody = ({ claassName, children }: { claassName?: string, children: React.ReactNode }) => {
    return (
        <div className={`w-full p-4 ${claassName}`}>
            {children}
        </div>
    )
}

const CardFooter = ({ claassName, children }: { claassName?: string, children: React.ReactNode }) => {
    return (
        <div className={`w-full p-4 border-t ${claassName}`}>
            {children}
        </div>
    )
}

export { Card, CardHeader, CardBody, CardFooter };
