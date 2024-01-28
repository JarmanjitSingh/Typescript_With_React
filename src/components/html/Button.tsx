type ButtonProps = {
  varient: "primary" | "secondary";
} & React.ComponentProps<"button">; //react provide a type for button with this we can also able to receive children and onclick events


//now in below if we hover on a children then its type is React.ReactNode that means we can also able to send the children is html like <div>primary button</div> so for that if we want to 
//restrict it as only a string then we have a concept of omit as follow below

// type ButtonProps = {
//     varient: "primary" | "secondary";
//     children: string
//   } & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ varient, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-name-${varient}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
