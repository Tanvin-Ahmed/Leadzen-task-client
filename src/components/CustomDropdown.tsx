import React from "react";
import Form from "react-bootstrap/Form";

interface OptionType {
  id: number | string;
  label: string;
  value: string;
}

interface DropdownProps {
  title: string;
  options: OptionType[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  title,
  onChange,
}) => {
  return (
    <Form.Select size="sm" onChange={onChange} defaultValue={options[0].value}>
      <option disabled>{title}</option>
      {options.map((option: OptionType) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default CustomDropdown;
