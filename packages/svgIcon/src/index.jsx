import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadSvg from './loadSvg';
/**
 *  svg 的两种方式
 *  <svg> <path>
 *  <svg> <symbol>
 *  先采用
 *  <svg> <symbol> (antd-desigin)
 *  <svg> <path> (meterial-ui)
 */
// const SvgContainer
const IconWrapper = styled.svg`
    fill: currentColor;
    background-size: cover;
    width: 22px;
    height: 22px;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
`;

class SvgIcon extends PureComponent {
  componentWillMount() {
    loadSvg(this.props.type);
  }
  render() {
    const symbolId = `${this.props.type}_symbol_`;
    return (
      <IconWrapper >
        <use xlinkHref={`#${symbolId}`} />
      </IconWrapper>
    );
  }
}
SvgIcon.propTypes = {
  color: PropTypes.string,
  viewBox: PropTypes.string,
  type: PropTypes.string.isRequired,
};
SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24',
};
SvgIcon.displayName = 'svgIcon';
export default SvgIcon;
