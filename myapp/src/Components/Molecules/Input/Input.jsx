import React from 'react';

import { ContentInput, Label, InputLine } from './styles';

import PropTypes from 'prop-types';

const Input = ({ label, name, type, placeholder, ...props }) => {
  return (
    <ContentInput>
      <Label htmlFor={name}>{label}</Label>
      <InputLine type={type} name={name} placeholder={placeholder} {...props} />
    </ContentInput>
  );
};

Input.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Input;
