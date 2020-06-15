import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import WishContext from './WishContext';

const Header = styled.header`
    color:white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rbga(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

// eslint-disable-next-line no-undef
const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Home</SLink>
            </Item>
            <Item current={pathname === "/watchlist"}>
                <SLink to="/watchlist">Watch List</SLink>
            </Item>
            <Item current={pathname === "/upcoming"}>
                <SLink to="/upcoming">Upcoming</SLink>
            </Item>
        </List>
    </Header>
));
