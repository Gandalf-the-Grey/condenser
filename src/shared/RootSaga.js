import { all } from 'redux-saga/effects';
import { fetchDataWatches } from 'app/redux/FetchDataSaga';
import { sharedWatches } from 'app/redux/SagaShared';
import { userWatches } from 'app/redux/UserSaga';
import { appWatches } from 'app/redux/AppSaga';
import { authWatches } from 'app/redux/AuthSaga';
import { transactionWatches } from 'app/redux/TransactionSaga';

export default function* rootSaga() {
    yield all([
        ...userWatches, // keep first to remove keys early when a page change happens
        ...appWatches,
        ...fetchDataWatches,
        ...sharedWatches,
        ...authWatches,
        ...transactionWatches,
    ]);
}
