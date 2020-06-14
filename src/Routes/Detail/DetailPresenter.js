import React from 'react';
import styled from 'styled-components';
import Message from '../../Components/Message';
import PropTypes from 'prop-types';

const Container = styled.div``;

const DetailPresenter = ({result, loading, error}) => loading ? null : (
    <Container>
        <h3>Detail Presenter</h3>
        {error && <Message color='#e74c3c' text={error} />}
    </Container>
);

DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
