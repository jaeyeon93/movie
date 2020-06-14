import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({upcoming, loading, error}) => loading ? null : (
    <>
        <Helmet><title>Movies</title></Helmet>
        <Container>
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date}
                        />
                    ))}
                </Section>
            )}
            {error && <Message color='#e74c3c' text={error} />}
        </Container>
    </>
    );

HomePresenter.propTypes = {
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;
