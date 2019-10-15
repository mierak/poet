import * as types from '../actions/types';
import { createReducer, createMinMaxReducer } from './utils';

const initialState = {
	damage: { min: null, max: null },
	crit: { min: null, max: null },
	aps: { min: null, max: null },
	dps: { min: null, max: null },
	edps: { max: null, min: null },
	pdps: { min: null, max: null }
};

const reducerObj = {
	...createMinMaxReducer(types.WEAPON_FILTERS),
	[types.APP_STATE.CLEAR_FILTERS]: (prevState, action) => ({
		...initialState
	})
};

export default createReducer(initialState, reducerObj);
