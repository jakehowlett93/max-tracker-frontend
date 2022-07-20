import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const textInput = ({ label, placeholder, onChange }: Props) => (
  <InputGroup>
    <InputGroup.Text id="text-input">{label}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      aria-label={label}
      aria-describedby="text-input"
      onChange={(event) => onChange(event.target.value)}
    />
  </InputGroup>
);

export default textInput;
