import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import getButtonStyles from '../styled/getButtonStyles';
import withRipple from '../../../hoc/withRipple';

const StyledButton = styled.button`${getButtonStyles}`;
StyledButton.displayName = 'StyledButton';

const StyledLink = styled.a`${getButtonStyles}`;
StyledLink.displayName = 'StyledLink';

// const StyledSpan = styled.span`{ color: red}`;
// StyledLink.displayName = 'StyledLink';

const ButtonFun = () => (
  <div />
);

class Button extends Component {
  // getStyledComponent() {
  //   // return this.props.href ? StyledLink : StyledButton;
  // }
  state = {}
  render() {
    // const StyledComponent = this.getStyledComponent();
    return (
      <StyledLink {...this.props}>
        {this.props.children}
      </StyledLink>
    );
  }
}

// export default styled(Button)``;

// export default withTheme(Button)
// export default styled(Button)``;
export default withRipple(styled(Button)``);
