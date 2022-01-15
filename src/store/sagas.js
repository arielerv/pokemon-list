import { all } from 'redux-saga/effects';
import { appSaga } from 'store/app/sagas';
import { pokedexSaga } from 'store/pokedex/sagas';

export default function* rootSaga() {
    yield all([
        appSaga(),
        pokedexSaga(),
    ]);
}
