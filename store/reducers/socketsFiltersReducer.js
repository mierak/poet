import { SOCKET_FILTERS } from '../actions/types';
import { createMinMaxSubReducer, createReducer, createMinMaxReducer } from './utils';

const initialState = {
	sockets: {
		r: null,
		g: null,
		b: null,
		w: null,
		min: null,
		max: null
	},
	links: {
		w: null,
		b: null,
		g: null,
		r: null,
		max: null,
		min: null
	}
};
const reducerObj = {
	...createMinMaxSubReducer(SOCKET_FILTERS.SOCKETS, 'sockets'),
	...createMinMaxSubReducer(SOCKET_FILTERS.LINKS, 'links'),
	[SOCKET_FILTERS.SOCKETS.R]: (prevState, action) => ({ sockets: { ...prevState.sockets, r: action.min } }),
	[SOCKET_FILTERS.SOCKETS.G]: (prevState, action) => ({ sockets: { ...prevState.sockets, g: action.min } }),
	[SOCKET_FILTERS.SOCKETS.B]: (prevState, action) => ({ sockets: { ...prevState.sockets, b: action.min } }),
	[SOCKET_FILTERS.SOCKETS.W]: (prevState, action) => ({ sockets: { ...prevState.sockets, w: action.min } }),

	[SOCKET_FILTERS.LINKS.R]: (prevState, action) => ({ links: { ...prevState.links, r: action.min } }),
	[SOCKET_FILTERS.LINKS.G]: (prevState, action) => ({ links: { ...prevState.links, g: action.min } }),
	[SOCKET_FILTERS.LINKS.B]: (prevState, action) => ({ links: { ...prevState.links, b: action.min } }),
	[SOCKET_FILTERS.LINKS.W]: (prevState, action) => ({ links: { ...prevState.links, w: action.min } })
};

export default createReducer(initialState, reducerObj);
