import React from "react";

const buttonVariants = {
  first: "bg-[#9E1C46] text-white hover:bg-[#2F0815]",
  second: "bg-[#1C9D74] text-white hover:bg-[#28745C]",
};

type Props = {
  className?: string;
  text: string;
  variant?: "first" | "second";
  asChild?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: any;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      text,
      variant = "first",
      id,
      asChild = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";
    const variantClasses = buttonVariants[variant];

    return (
      <Comp
        id={id}
        className={`
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
        `}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {text}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
