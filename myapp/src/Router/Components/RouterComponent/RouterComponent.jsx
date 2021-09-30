import React from 'react';
import PropTypes from 'prop-types';

import BuildRoute from '../BuildRoute';

const RouterComponent = ({ routes }) =>
  routes.map((route) => (
    <BuildRoute
      key={route.name}
      component={route.component}
      path={route.path}
      exact={route.exact}
      routes={routes}
      isPrivate={route.isPrivate}
    />
  ));

RouterComponent.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.node.isRequired,
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      isPrivate: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default RouterComponent;
