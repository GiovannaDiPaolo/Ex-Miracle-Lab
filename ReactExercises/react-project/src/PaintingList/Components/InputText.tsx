interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
}
function InputText(props: InputTextProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return <input type="text" value={props.value} onChange={handleInputChange} />;
}
export default InputText;