import React from 'react';
import styled from 'styled-components';
import Poster from "./Poster";
import Toggle from './Toggle';

const Container = styled.div``;

const PosterContainer = ({movie}) => (
    <Container>
        <Poster id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} rating={movie.vote_average} year={movie.release_date}/>
        <Toggle movie={movie} />
    </Container>
);

export default PosterContainer;
