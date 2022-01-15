import * as types from 'store/app/types';

export const getStatsRequest = () => ({ type: types.GET_STATS_REQUEST });
export const getStatsSuccess = (stats) => ({ type: types.GET_STATS_SUCCESS, stats });
export const getStatsError = (error) => ({ type: types.GET_STATS_ERROR, error });

export const getTypesRequest = () => ({ type: types.GET_TYPES_REQUEST });
export const getTypesSuccess = (result) => ({ type: types.GET_TYPES_SUCCESS, result });
export const getTypesError = (error) => ({ type: types.GET_TYPES_ERROR, error });

export const getDataRequest = () => ({ type: types.GET_DATA_REQUEST });
export const getDataSuccess = (result) => ({ type: types.GET_DATA_SUCCESS, result });
export const getDataError = (error) => ({ type: types.GET_DATA_ERROR, error });
