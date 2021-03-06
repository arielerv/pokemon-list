import initialState from 'store/app/initialState';
import * as types from 'store/app/types';

export default function app(state = initialState, action) {
    switch (action.type) {
        case types.GET_STATS_REQUEST:
            return { ...state, isLoading: true, stats: initialState.stats };
        case types.GET_STATS_SUCCESS:
            return { ...state, stats: action.stats, isLoading: initialState.isLoading };
        case types.GET_STATS_ERROR:
            return { ...state, isLoading: initialState.isLoading, error: action.error };
        case types.GET_TYPES_REQUEST:
            return { ...state, isLoading: true, types: initialState.types };
        case types.GET_TYPES_SUCCESS:
            return { ...state, types: action.result, isLoading: initialState.isLoading };
        case types.GET_TYPES_ERROR:
            return { ...state, isLoading: initialState.isLoading, error: action.error };
        case types.GET_DATA_REQUEST:
            return { ...state, isLoading: true };
        case types.GET_DATA_SUCCESS:
            return { ...state, isLoading: initialState.isLoading };
        case types.GET_DATA_ERROR:
            return { ...state, isLoading: initialState.isLoading, error: action.error };
        default:
            return state;
    }
}
