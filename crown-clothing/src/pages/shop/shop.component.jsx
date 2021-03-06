import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const { updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        });
    }

    render () {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPage}
            />
          </div>
        );
    }
} 

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);