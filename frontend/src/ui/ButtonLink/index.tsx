import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../libs/cn";

const ButtonLinkVariants = cva(
    "w-full py-1.5 px-3 rounded-sm",
    {
        variants: {
            variant: {
                default: "border border-black bg-black hover:bg-gray-800 text-white",
                outline: "border border-black text-black",
            }
        },
    }
);

interface ButtonLinkProps extends LinkProps, VariantProps<typeof ButtonLinkVariants> {
    className?: string;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ className, variant, ...props }, ref) => {
    return (
        <Link ref={ref} className={cn(ButtonLinkVariants({ variant, className }))} {...props} />
    );
});

ButtonLink.displayName = "ButtonLink";

export default ButtonLink
