import { combineReducers } from 'redux';
import weaponFilters from './weaponFiltersReducer';
import armourFilters from './armourFiltersReducer';
import requirementsFilters from './requirementsFiltersReducer';
import mapFilters from './mapFiltersReducer';
import miscFilters from './miscFiltersReducer';
import socketFilters from './socketsFiltersReducer';
import statFilters from './statsFilterReducer';
import appState from './generalReducer';
import bulkState from './bulkReducer';
import createSelector from 'reselect';

export const weaponFiltersSelector = state => {
	return state.weaponFilters;
};
// export const getWeaponFiltersTitles = createSelector(s)
export const armourFiltersSelector = state => {
	return state.armourFilters;
};
export const requirementsFiltersSelector = state => {
	return state.requirementsFilters;
};
export const mapFiltersSelector = state => {
	return state.mapFilters;
};
export const miscFiltersSelector = state => {
	return state.miscFilters;
};
export const socketFiltersSelector = state => {
	return state.socketFilters;
};
export const statsFiltersSelector = state => {
	return state.statFilters;
};
export const appStateSelector = state => {
	return state.appState;
};
export const bulkStateSelector = state => {
	return state.bulkState;
};
export const selectors = state => {
	const weaponFilters = weaponFiltersSelector(state);
	const armourFilters = armourFiltersSelector(state);
	const requirementsFilters = requirementsFiltersSelector(state);
	const mapFilters = mapFiltersSelector(state);
	const miscFilters = miscFiltersSelector(state);
	const socketFilters = socketFiltersSelector(state);
	const statsFilters = statsFiltersSelector(state);
	const appState = appStateSelector(state);
	return {
		weaponFilters: weaponFilters,
		armourFilters: armourFilters,
		requirementsFilters: requirementsFilters,
		mapFilters: mapFilters,
		miscFilters: miscFilters,
		socketFilters: socketFilters,
		statsFilters: statsFilters,
		appState: appState
	};
};
export const rootReducer = combineReducers({
	weaponFilters,
	armourFilters,
	socketFilters,
	requirementsFilters,
	mapFilters,
	miscFilters,
	statFilters,
	appState,
	bulkState
});
