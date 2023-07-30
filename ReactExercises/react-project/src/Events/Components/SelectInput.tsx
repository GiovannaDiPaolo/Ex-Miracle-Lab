interface SelectInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectInput (props: SelectInputProps): JSX.Element{
  return (
    <select value={props.value} onChange={props.onChange}>
      <option value="">Selecciona una opción</option>
      <option value="option1">Opción 1</option>
      <option value="option2">Opción 2</option>
      <option value="option3">Opción 3</option>
    </select>
  );
};