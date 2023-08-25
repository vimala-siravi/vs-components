export interface ButtonProps {
  label: String;
}

function Button(props: ButtonProps) {
  return <div>{props.label}</div>;
}

export default Button;
