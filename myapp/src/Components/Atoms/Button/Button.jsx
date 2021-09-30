import React from 'react';

import Spinner from '../Spinner';
import themes from '../../../Styles/Global/Themes';

import PropTypes from 'prop-types';

import { ButtonContainer } from './styles';

const Button = ({ isLoading, children, disabled, type, ...rest }) => {
  const isDisabled = disabled || isLoading;

  return (
    <ButtonContainer
      isLoading={isLoading}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {isLoading ? (
        <Spinner
          color={themes.colors.white}
          backgroundColor={themes.colors.inkLighter}
          size='24px'
        />
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

Button.propTypes = {
  isLoading: PropTypes.node.any,
  children: PropTypes.node.any,
  disabled: PropTypes.node.any,
  type: PropTypes.node.any,
};

export default Button;
