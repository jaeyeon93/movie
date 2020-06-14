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
        let result = null;
        try {
            const request = await movieApi.movieDetail(id);
            result = request.data;
        } catch (e) {
            this.setState({error: `Can't not find movie detail`});
        } finally {
            this.setState({loading: false, result});
        }

    }

    render() {
        const { result, error, loading } = this.state;
        console.log(this.state.result);
        return (
            <DetailPresenter result={result} error={error} loading={loading} />
        );
    };
}
