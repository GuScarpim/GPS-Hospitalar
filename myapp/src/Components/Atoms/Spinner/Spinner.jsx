import React from 'react';

import { SpinnerContainer } from './styles';

import PropTypes from 'prop-types';

const Spinner = ({ size, stroke, color, backgroundColor, fontSize }) => {
  return (
    <SpinnerContainer
      size={size}
      stroke={stroke}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.node.any,
  stroke: PropTypes.node.any,
  color: PropTypes.node.any,
  backgroundColor: PropTypes.node.any,
  fontSize: PropTypes.node.any,
};

export default Spinner;
