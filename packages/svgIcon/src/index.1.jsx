import React from 'react';
import PropTypes from 'prop-types';
const SvgContainer
const SvgIcon = props => (
  <svg
    focusable="false"
    viewBox={props.viewBox}
  >
    {props.children}
  </svg>
);
SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  viewBox: PropTypes.string,
};
SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24',
};
SvgIcon.displayName = 'svgIcon';
export default SvgIcon;
