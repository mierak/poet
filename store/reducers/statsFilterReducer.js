import {
	SET_STAT_FILTER,
	SET_STAT_FILTER_MIN,
	SET_STAT_FILTER_MAX,
	SET_STAT_FILTER_TYPE,
	ADD_STAT_FILTER_GROUP,
	ADD_STAT_FILTER_TO_GROUP,
	REMOVE_STAT_FILTER_GROUP,
	REMOVE_STAT_FILTER_FROM_GROUP
} from '../actions/types';
import { createReducer } from './utils';

const initialState = {
	statFilters: {
		0: {
			min: null,
			max: null,
			id: ''
		}
	},
	statFilterGroups: {
		0: {
			statFilters: [0],
			type: 'and'
		}
	},
	lastFilterIndex: 1,
	lastGroupIndex: 0
};

const reducerObj = {
	[ADD_STAT_FILTER_GROUP]: (prevState, action) => {
		const newLastGroupindex = prevState.lastGroupIndex + 1;
		const newLastFilterIndex = prevState.lastFilterIndex + 1;
		const statFilterGroups = Object.assign({}, prevState.statFilterGroups);
		const statFilters = Object.assign({}, prevState.statFilters);
		statFilterGroups[newLastGroupindex] = {
			statFilters: [newLastFilterIndex],
			type: 'and'
		};
		statFilters[newLastFilterIndex] = {
			min: null,
			max: null,
			id: ''
		};

		return {
			statFilterGroups: statFilterGroups,
			statFilters: statFilters,
			lastFilterIndex: newLastFilterIndex,
			lastGroupIndex: newLastGroupindex
		};
	},
	[REMOVE_STAT_FILTER_GROUP]: (prevState, action) => {
		const statFilterGroups = Object.assign({}, prevState.statFilterGroups);
		const statFilters = Object.assign({}, prevState.statFilters);
		const filterIds = statFilterGroups[action.id].statFilters;
		delete statFilterGroups[action.id];
		filterIds.forEach(id => delete statFilters[id]);
		return {
			...prevState,
			statFilters: statFilters,
			statFilterGroups: statFilterGroups
		};
	},
	[REMOVE_STAT_FILTER_FROM_GROUP]: (prevState, action) => {
		const statFilterGroups = Object.assign({}, prevState.statFilterGroups);
		const statFilters = Object.assign({}, prevState.statFilters);
		Object.keys(statFilterGroups).forEach(groupId => {
			const group = statFilterGroups[groupId];
			statFilterGroups[groupId].statFilters = group.statFilters.filter(item => item !== action.id);
		});
		delete statFilters[action.id];
		return {
			...prevState,
			statFilters: statFilters,
			statFilterGroups: statFilterGroups
		};
	},
	[ADD_STAT_FILTER_TO_GROUP]: (prevState, action) => {
		const newLastIndex = prevState.lastFilterIndex + 1;
		const statFilters = Object.assign({}, prevState.statFilters);
		statFilters[newLastIndex] = {
			min: null,
			max: null,
			id: ''
		};
		const statFilterGroups = Object.assign({}, prevState.statFilterGroups);
		statFilterGroups[action.id] = {
			type: prevState.statFilterGroups[action.id].type,
			statFilters: [...prevState.statFilterGroups[action.id].statFilters, newLastIndex]
		};

		return {
			statFilters: statFilters,
			statFilterGroups: statFilterGroups,
			lastFilterIndex: newLastIndex,
			lastGroupIndex: prevState.lastGroupIndex
		};
	},
	[SET_STAT_FILTER_MIN]: (prevState, action) => {
		const statFilters = Object.assign({}, prevState.statFilters);
		statFilters[action.id].min = action.min;
		return {
			...prevState,
			statFilters: statFilters
		};
	},
	[SET_STAT_FILTER_MAX]: (prevState, action) => {
		const statFilters = Object.assign({}, prevState.statFilters);
		statFilters[action.id].max = action.max;
		return {
			...prevState,
			statFilters: statFilters
		};
	},
	[SET_STAT_FILTER]: (prevState, action) => {
		const statFilters = Object.assign({}, prevState.statFilters);
		statFilters[action.id].id = action.value;
		return {
			...prevState,
			statFilters: statFilters
		};
	},
	[SET_STAT_FILTER_TYPE]: (prevState, action) => {
		const statFilterGroups = Object.assign({}, prevState.statFilterGroups);
		statFilterGroups[action.id].type = action.filterType;
		return {
			...prevState,
			statFilterGroups: statFilterGroups
		};
	}
};

export default createReducer(initialState, reducerObj);
