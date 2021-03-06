import React from 'react';
import styled from 'styled-components';
import Message from '../../Components/Message';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;;
  background-size: cover;
    border-radius: 5px;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;



const DetailPresenter = ({result, loading, error}) => loading ? null : (
    <>
        <Helmet><title>{result.original_title ? result.original_title : result.original_name}</title></Helmet>
        <Container>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}/>
            <Content>
                <Cover bgImage={`https://image.tmdb.org/t/p/original/${result.poster_path}`} />
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date : result.first_air_date}</Item>
                        <Divider>·</Divider>
                        <Item>{result.runtime ? result.runtime : 0} min</Item>
                        <Divider>·</Divider>
                        <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length-1 ? genre.name : `${genre.name} / `)}</Item>
                        <Divider>·</Divider>
                        <Item>⭐️ {result.vote_average}/10</Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
            {error && <Message color='#e74c3c' text={error} />}
        </Container>
    </>

);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
