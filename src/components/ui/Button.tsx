import React from "react";

// Определим классы для двух вариантов кнопки
const buttonVariants = {
  first: "bg-[#9E1C46] text-white hover:bg-[#2F0815]",
  second: "bg-[#1C9D74] text-white hover:bg-[#28745C]",
};

type Props = {
  className?: string;
  text: string;
  variant?: "first" | "second";
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, text, variant = "first", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; 
    const variantClasses = buttonVariants[variant];

    return (
      <Comp
        className={(`
          ${variantClasses} 
          ${className} 
          rounded-[12px] 
          text-sm 
          leading-[14px]
          font-semibold
          transition-transform 
          duration-300 
          ease-in-out 
          cursor-pointer
        `)}
        ref={ref}
        {...props}
      >
        {text}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
