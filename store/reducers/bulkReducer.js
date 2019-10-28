import { BULK } from '../actions/types';
import { createReducer, createMinMaxReducer } from './utils';

const initialState = {
	bulkSearchFormVisible: true,
	results: [],
	want: 'exa',
	have: 'chaos',
	searchList: {
		0: {
			want: 'chaos',
			have: 'timeless-eternal-emblem'
		},
		1: {
			want: 'chaos',
			have: 'timeless-vaal-emblem'
		},
		2: {
			want: 'chaos',
			have: 'timeless-karui-emblem'
		},
		3: {
			want: 'exa',
			have: 'timeless-templar-emblem'
		},
		4: {
			want: 'exa',
			have: 'timeless-maraketh-emblem'
		}
	},
	lastSearchIndex: 4,
	progress: 0,
	nicknameHighlight: ''
};
const presets = require('../../pages/assets/presets.json');

const reducerObj = {
	[BULK.SET_RESULTS]: (prevState, action) => ({ results: action.results }),
	[BULK.SET_REVERSE_RESULTS]: (prevState, action) => ({ reverseResults: action.results }),
	[BULK.ADD_NEW_SEARCH]: (prevState, action) => {
		const newLastSearchIndex = prevState.lastSearchIndex + 1;
		const searchList = Object.assign({}, prevState.searchList);
		searchList[newLastSearchIndex] = {
			want: 'null',
			have: 'null'
		};
		return {
			...prevState,
			searchList: searchList,
			lastSearchIndex: newLastSearchIndex
		};
	},
	[BULK.REMOVE_SEARCH]: (prevState, action) => {
		const searchList = Object.assign({}, prevState.searchList);
		delete searchList[action.id];
		return {
			...prevState,
			searchList: searchList
		};
	},
	[BULK.ADD_RESULTS]: (prevState, action) => {
		return {
			...prevState,
			results: [...prevState.results, action.results]
		};
	},
	[BULK.TOGGLE_SEARCH_FORM_VISIBILITY]: (prevState, action) => {
		return {
			...prevState,
			bulkSearchFormVisible: !prevState.bulkSearchFormVisible
		};
	},
	[BULK.SET_HAVE]: (prevState, action) => {
		const newSearchList = Object.assign({}, prevState.searchList);
		newSearchList[action.id].have = action.have;
		return {
			...prevState,
			searchList: newSearchList
		};
	},
	[BULK.SET_WANT]: (prevState, action) => {
		const newSearchList = Object.assign({}, prevState.searchList);
		newSearchList[action.id].want = action.want;
		return {
			...prevState,
			searchList: newSearchList
		};
	},
	[BULK.SET_HIGHLIGHT]: (prevState, action) => {
		return {
			...prevState,
			nicknameHighlight: action.nick
		};
	},
	[BULK.SET_PROGRESS]: (prevState, action) => {
		return {
			...prevState,
			progress: action.percent
		};
	},
	[BULK.SET_PRESET]: (prevState, action) => {
		return {
			...prevState,
			searchList: presets[action.preset]
		};
	}
};

export default createReducer(initialState, reducerObj);
