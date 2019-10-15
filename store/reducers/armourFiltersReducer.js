import * as types from '../actions/types';
import { createReducer, createMinMaxReducer } from './utils';

const initialState = {
	ar: { min: null, max: null },
	ev: { min: null, max: null },
	es: { min: null, max: null },
	block: { min: null, max: null }
};

const reducerObj = {
	...createMinMaxReducer(types.ARMOUR_FILTERS),
	[types.APP_STATE.CLEAR_FILTERS]: (prevState, action) => ({
		...initialState
	})
};

export default createReducer(initialState, reducerObj);
