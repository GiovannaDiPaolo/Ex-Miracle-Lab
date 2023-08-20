interface ButtonProps {
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>Change Language</button>;
}

export default Button;
