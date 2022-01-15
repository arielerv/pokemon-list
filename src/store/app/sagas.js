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

export function* getTypes() {
    try {
        const result = yield call(AppService.getTypes);
        yield put(actions.getTypesSuccess(result));
    } catch (error) {
        yield put(actions.getTypesError('Falló!'));
    }
}

export function* getData() {
    try {
        const result = yield call(AppService.getData);
        yield put(actions.getDataSuccess(result));
    } catch (error) {
        yield put(actions.getTypesError('Falló!'));
    }
}

export function* appSaga() {
    yield all([
        takeLatest(types.GET_STATS_REQUEST, getStats),
        takeLatest(types.GET_TYPES_REQUEST, getTypes),
        takeLatest(types.GET_DATA_REQUEST, getData),
    ]);
}

export default appSaga;
