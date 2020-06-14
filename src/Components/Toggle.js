import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  margin-top: 2px;
  font-size: 6px;
  color: white;
  border: none;
  background: transparent;
  background-repeat: no-repeat;
  outline: none;
  padding-left: 0;
`;

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Like' : 'UnLike'}
            </Button>
        )
    }
}

export default Toggle;
