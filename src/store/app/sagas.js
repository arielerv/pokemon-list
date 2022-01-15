import {
    all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/app/actions';
import * as types from 'store/app/types';
import AppService from 'services/app';

export function* getStats() {
    try {
        const result = yield call(AppService.getStats);
        yield put(actions.getStatsSuccess(result));
    } catch (error) {
        yield put(actions.getStatsError('Falló!'));
    }
}

export function* appSaga() {
    yield all([
        takeLatest(types.GET_STATS_REQUEST, getStats),
    ]);
}

export default appSaga;
