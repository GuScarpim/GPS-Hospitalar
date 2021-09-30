import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../../../utils/auth';

const BuildRoute = ({ component, path, routes, exact, isPrivate }) => {
  const Component = component;
  const hasAccess = !isPrivate ? true : isAuthenticated();

  const Redirecionador = () => {
    window.location.assign('/login');

    return <Redirect to='/login' />;
  };

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        hasAccess ? (
          <Component routes={routes} {...props} />
        ) : (
          <Redirecionador />
        )
      }
    />
  );
};

BuildRoute.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.node.isRequired,
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      isPrivate: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default BuildRoute;
