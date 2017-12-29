import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaiseButton from './RaisedButton';
import fabButton from '../styled/fabButtonStyle';

const FabButton = styled(RaiseButton)`
    ${fabButton}
`;
export default FabButton;
