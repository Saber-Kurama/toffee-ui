import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import flatButton from '../styled/flatButtonStyle';

const FlatButton = styled(Button)`
    ${flatButton}
`;
export default FlatButton;
