import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "rounded-lg font-bold whitespace-nowrap transition-colors duration-300",
  {
    variants: {
      intent: {
        primary: "text-xl px-8 py-2 bg-blue text-white",
        secondary: "px-8 py-2 text-red border border-red",
        icon: "flex justify-center text-grey hover:text-beige items-center bg-beige rounded-full w-12 h-12",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonVariants
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  className,
  children,
  ...variants
}: ButtonVariants & React.HTMLProps<HTMLButtonElement>) => {
  const classes = twMerge(buttonVariants(variants), className);

  return (
    <button className={classes} {...variants}>
      {children}
    </button>
  );
};
