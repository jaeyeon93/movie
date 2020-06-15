import React from 'react';
import HomePresender from './HomePresenter';
import {movieApi} from "../../api";
import WishContext from '../../Components/WishContext';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: null,
            error: null,
            loading: true,
        };
    }


    async componentDidMount() {
        try {
            console.log(await movieApi.upcoming());
            console.log(await movieApi.movieDetail(514847));
            const {data: {results: upcoming}} = await movieApi.upcoming();
            this.setState({
                upcoming
            });
        } catch {
            this.setState({
                error: `Can't find movie information`
            });
        } finally {
            this.setState({
                loading: false,
            });
        };
    };

    render() {
        const { upcoming, error, loading } = this.state;
        return (
            <>
                <HomePresender upcoming={upcoming} error={error} loading={loading} />
            </>
        );
    };
}

HomeContainer.contextType = WishContext;

export default HomeContainer;
