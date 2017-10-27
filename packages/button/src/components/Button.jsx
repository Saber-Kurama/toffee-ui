import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import getButtonStyles from '../styled/getButtonStyles';

const StyledButton = styled.button`${getButtonStyles}`;
StyledButton.displayName = 'StyledButton';

const StyledLink = styled.a`a&{ ${getButtonStyles} }`;
StyledLink.displayName = 'StyledLink';

const StyledSpan = styled.span`{ color: red}`;
StyledLink.displayName = 'StyledLink';

class Button extends Component {
  getStyledComponent() {
    return this.props.href ? StyledLink : StyledButton;
  }
  render() {
    const StyledComponent = this.getStyledComponent();
    return (
      <StyledComponent className={this.props.className} >
        <StyledSpan >{this.props.children}</StyledSpan>
      </StyledComponent>
    );
  }
}

export default styled(Button)``;

// export default withTheme(Button)
