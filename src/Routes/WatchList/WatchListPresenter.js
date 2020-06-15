import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Message from "../../Components/Message";
import Section from "../../Components/Section";
import PosterContainer from "../../Components/PosterContainer";

const Container = styled.div`
  padding: 20px;
`;

const WatchListPresenter = ({watchList, loading, error}) => loading ? null : (
        <>
        <Helmet><title>Watch List</title></Helmet>
            <Container>
                {watchList && watchList.length > 0 && (
                    <Section title="WatchList">
                        {watchList.map((movie, idx) => (
                            <PosterContainer key={idx} movie={movie}/>
                        ))}
                    </Section>
                )}
            </Container>
        {error && <Message color='#e74c3c' text={error} />}
        </>
);

WatchListPresenter.propTypes = {
    watchList: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default WatchListPresenter;
