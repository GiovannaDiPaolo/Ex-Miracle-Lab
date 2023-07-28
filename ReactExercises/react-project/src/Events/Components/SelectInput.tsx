interface SelectInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Selecciona una opción</option>
      <option value="option1">Opción 1</option>
      <option value="option2">Opción 2</option>
      <option value="option3">Opción 3</option>
    </select>
  );
};

export default SelectInput;
