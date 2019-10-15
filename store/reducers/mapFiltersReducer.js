import { MAP_FILTERS } from '../actions/types';
import { createMinMaxSubReducer, createReducer, createMinMaxReducer } from './utils';

const initialState = {
	map_tier: { min: null, max: null },
	map_iiq: { min: null, max: null },
	map_packsize: { min: null },
	map_iir: { max: null, min: null },
	map_shaped: { option: null },
	map_elder: { option: null },
	map_series: { option: null }
};
const reducerObj = {
	...createMinMaxSubReducer(MAP_FILTERS.MAP_TIER, 'map_tier'),
	...createMinMaxSubReducer(MAP_FILTERS.MAP_IIQ, 'map_iiq'),
	...createMinMaxSubReducer(MAP_FILTERS.MAP_PACKSIZE, 'map_packsize'),
	...createMinMaxSubReducer(MAP_FILTERS.MAP_IIR, 'map_iir'),
	[MAP_FILTERS.MAP_SHAPED.OPTION]: (prevState, action) => ({ map_shaped: { option: action.option } }),
	[MAP_FILTERS.MAP_ELDER.OPTION]: (prevState, action) => ({ map_elder: { option: action.option } }),
	[MAP_FILTERS.MAP_SERIES.OPTION]: (prevState, action) => ({ map_series: { option: action.option } })
};

export default createReducer(initialState, reducerObj);
