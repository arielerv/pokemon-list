import * as types from 'store/app/types';

export const getStatsRequest = () => ({ type: types.GET_STATS_REQUEST });
export const getStatsSuccess = (stats) => ({ type: types.GET_STATS_SUCCESS, stats });
export const getStatsError = (error) => ({ type: types.GET_STATS_ERROR, error });
