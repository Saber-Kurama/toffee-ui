import React, { Component } from 'react'
import { Button } from '../src'
import styled from 'styled-components'
const StyledButton = styled.div`
    width: 200px;
    height: 300px;
    background-color: #444;
`
class Logger extends Component {
    static proptypes = {};
    state ={};
    render() {
        console.log('???xxx111')
        return (
            <StyledButton className={this.props.className}>
                <Button>saber</Button>
            </StyledButton>
        )
    }
}

export default Logger