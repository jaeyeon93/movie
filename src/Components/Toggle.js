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
            const movie = this.props.movie;
            if (this.state.isToggleOn && !this.context.wish.includes(movie.original_title)) {
                this.context.wish.push(movie.original_title);
                this.context.test.set(movie.id, movie.original_title);
                console.log(`true일때 context : ${this.context.wish} map : ${this.context.test}`);
            } else if (!this.state.isToggleOn && this.context.wish.includes(movie.original_title)) {
                this.context.test.delete(movie.id);
                console.log(`After delete : ${this.context.test}`);
            }
        });
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Like' : 'UnLike'}
            </Button>
        )
    }
}

Toggle.contextType = WishContext;

export default Toggle;
