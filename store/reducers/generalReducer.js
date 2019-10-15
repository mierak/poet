import { UI, APP_STATE } from '../actions/types';
import { createMinMaxSubReducer, createReducer, createMinMaxReducer } from './utils';
import statFilter from '../../pages/components/search/stat-filters/statFilter';

const initialState = {
	loadingState: 'loaded',
	searchFormVisible: true,
	resultsIds: [],
	resultsPage: 0,
	searchResults: [],
	searchTerm: ''
};
const reducerObj = {
	[APP_STATE.SET_SEARCH_RESULTS]: (prevState, action) => ({
		searchResults: action.results
	}),
	[APP_STATE.ADD_SEARCH_RESULTS]: (prevState, action) => ({
		searchResults: [...prevState.searchResults, ...action.results]
	}),
	[APP_STATE.SET_SEARCH_STATE]: (prevState, action) => ({
		loadingState: action.state
	}),
	[APP_STATE.SET_SEARCH_TERM]: (prevState, action) => ({
		searchTerm: action.term
	}),
	[APP_STATE.SET_SEARCH_FORM_VISIBLE]: (prevState, action) => ({
		searchFormVisible: action.visible
	}),
	[APP_STATE.SET_SEARCH_RESULTS_IDS]: (prevState, action) => ({
		resultsIds: action.ids
	}),
	[APP_STATE.SET_SEARCH_RESULTS_PAGE]: (prevState, action) => ({
		resultsPage: action.page
	}),
	[APP_STATE.CLEAR_FILTERS]: (prevState, action) => ({
		searchTerm: ''
	})
};

export default createReducer(initialState, reducerObj);
