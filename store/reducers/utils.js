export const createReducer = (_initialState, _reducer) => {
	return function(state = _initialState, action) {
		const reducer = _reducer;

		if (
			(reducer.hasOwnProperty(action.type) && typeof reducer[action.type] === 'function') ||
			typeof reducer[action.type] === 'object'
		) {
			const updated =
				typeof reducer[action.type] === 'function' ? reducer[action.type](state, action) : reducer[action.type];

			if (state instanceof Array) {
				return [...state, ...updated];
			}

			return { ...state, ...updated };
		}

		return state;
	};
};
export const createMinMaxSubReducer = (type, attr) => {
	return {
		[type.SET_MIN]: (state, action) => ({
			[attr]: { ...state[attr], min: action.min }
		}),
		[type.SET_MAX]: (state, action) => ({
			[attr]: { ...state[attr], max: action.max }
		})
	};
};
export const createMinMaxReducer = types => {
	let arr = [];
	Object.keys(types).forEach(type => {
		const subReducer = createMinMaxSubReducer(types[type], type.toLowerCase());
		arr.push(subReducer);
	});
	let obj = Object.assign({}, ...arr);
	return obj;
};
