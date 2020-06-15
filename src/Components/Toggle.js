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
            let watchList = this.context.watchList;
            this.manageWishList(watchList, movie);
        });
    }

    manageWishList(watchList, movie) {
        if (this.state.isToggleOn && !watchList.includes(movie)) {
            console.log(`${movie.original_title} added`);
            watchList.push(movie);
        } else if (!this.state.isToggleOn && watchList.includes(movie)) {
            console.log(`delete ${movie.original_title}`);
            const deleteIdx = watchList.indexOf(movie);
            if (deleteIdx > -1)  {watchList.splice(deleteIdx, 1);}
            console.log(`After delete length : ${watchList.length}`);
        }
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
