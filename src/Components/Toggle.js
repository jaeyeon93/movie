import React from 'react';
import {connect} from "react-redux";
import styled from "styled-components";
import WishContext from './WishContext';

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
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state =>
            ({isToggleOn: !state.isToggleOn
            }), () => {
            if (this.state.isToggleOn && !this.context.wish.includes(this.props.movie.original_title)) {
                this.context.wish.push(this.props.movie.original_title);
                console.log(`true일때 context : ${this.context.wish}`)
            } else if (!this.state.isToggleOn && this.context.wish.includes(this.props.movie.original_title)) {
                console.log(`list에서 ${this.props.movie.original_title} 제거`);
            }
        });
    }


    test() {
        if (this.state.isToggleOn)
            console.log(`${JSON.stringify(this.props)}`);
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Like' : 'UnLike'}
                {/*{this.state.isToggleOn ? this.test() : 'UnLike'}*/}
            </Button>
        )
    }
}

Toggle.contextType = WishContext;

export default Toggle;
