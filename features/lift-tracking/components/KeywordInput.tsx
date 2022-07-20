import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import { Option } from '../state';

export const toOptions = (input: string): Option => ({ value: input, label: input });

type Props = {
  label: string;
  placeholder: string;
  options: Option[];
  value: Option;
  // eslint-disable-next-line no-unused-vars
  onChange: (input: any) => void;
};

const KeywordInput = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}: Props) => (
  <InputGroup>
    <InputGroup.Text>{label}</InputGroup.Text>
    <Select
      className="form-control p-0 "
      date-testid="keyword-input-label"
      classNamePrefix="form-control"
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(input) => onChange(input)}
    />
  </InputGroup>
);

export default KeywordInput;
