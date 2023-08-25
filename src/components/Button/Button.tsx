export interface ButtonProps {
  label: String;
}

function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}

export default Button;
