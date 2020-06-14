import React from 'react';
import styled from 'styled-components';
import Poster from "./Poster";
import Toggle from './Toggle';
const Container = styled.div``;

const Button = styled.button`
  margin-top: 2px;
  font-size: 5px;
  color: white;
  border: none;
  background: transparent;
  background-repeat: no-repeat;
  outline: none;
  padding-left: 0;
`;

const PosterContainer = ({movie}) => (
    <Container>
        <Poster id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} year={movie.release_date}/>
        <Toggle />
    </Container>
);

export default PosterContainer;
