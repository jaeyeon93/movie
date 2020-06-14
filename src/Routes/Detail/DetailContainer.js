import React from 'react';
import DetailPresenter from './DetailPresenter';
import {movieApi} from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            error: null,
            loading: true,
        };
    }

    async componentDidMount() {
        const {match: {params: {id}}, history: {push}} = this.props;
        const parseId = parseInt(id);
        if (isNaN(parseId))
            return push('/');

        const temp = await movieApi.movieDetail(id);
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter result={result} error={error} loading={false} />
        );
    };
}
