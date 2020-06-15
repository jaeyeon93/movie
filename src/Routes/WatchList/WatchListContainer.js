import React from 'react';
import WishContext from '../../Components/WishContext';
import WatchListPresenter from './WatchListPresenter';

class WatchListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watchList: null,
            error: null,
            loading: true,
        }
    }

    componentDidMount() {
        try {
            this.setState({watchList: this.context.watchList});

        } catch {
            this.setState({error: `There's error on WatchList Page`});
        } finally {
            this.setState({loading: false});
        };
    };

    render() {
        const {watchList, error, loading} = this.state;
        return (
            <>
                <WatchListPresenter watchList={watchList} error={error} loading={loading} />
            </>
        )
    }
};

WatchListContainer.contextType = WishContext;

export default WatchListContainer;
