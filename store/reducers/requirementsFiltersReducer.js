import * as types from '../actions/types';
import { createReducer, createMinMaxReducer } from './utils';

const initialState = {
	str: { min: null, max: null },
	dex: { min: null, max: null },
	int: { min: null, max: null },
	lvl: { min: null, max: null }
};
export default createReducer(initialState, createMinMaxReducer(types.REQUIREMENTS_FILTERS));
