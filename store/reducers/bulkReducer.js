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
			have: 'exa'
		},
		1: {
			want: 'exa',
			have: 'mirror-shard'
		},
		2: {
			want: 'chaos',
			have: 'stacked-deck'
		},
		3: {
			want: 'chaos',
			have: 'pristine-fossil'
		},
		4: {
			want: 'chaos',
			have: 'serrated-fossil'
		},
		5: {
			want: 'chaos',
			have: 'enchanted-fossil'
		},
		6: {
			want: 'chaos',
			have: 'glyphic-fossil'
		},
		7: {
			want: 'chaos',
			have: 'sanctified-fossil'
		},
		8: {
			want: 'chaos',
			have: 'bound-fossil'
		}
	},
	lastSearchIndex: 2,
	progress: 0
};

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
		console.log(action);
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
	[BULK.SET_PROGRESS]: (prevState, action) => {
		return {
			...prevState,
			progress: action.percent
		};
	}
};

export default createReducer(initialState, reducerObj);
