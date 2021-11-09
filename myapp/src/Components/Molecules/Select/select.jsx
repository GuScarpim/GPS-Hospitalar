import React from 'react';

import { ContentInput, Label, SelectComponent, Option } from './styles';

import PropTypes from 'prop-types';

const Select = ({ label, name, options, onChange }) => {
  return (
    <ContentInput>
      <Label htmlFor={name}>{label}</Label>
      <SelectComponent name={name} onChange={onChange}>
        {options.map((item, index) => (
          <Option value={item.nome} key={index}>
            {item.nome}
          </Option>
        ))}
      </SelectComponent>
    </ContentInput>
  );
};

Select.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
  options: PropTypes.node.isRequired,
};

export default Select;
