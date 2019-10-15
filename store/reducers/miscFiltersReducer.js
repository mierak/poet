import { MISC_FILTERS, APP_STATE } from '../actions/types';
import { createMinMaxSubReducer, createReducer, createMinMaxReducer } from './utils';

const initialState = {
	quality: { min: null, max: null },
	ilvl: { min: null, max: null },
	gem_level_progress: { max: null, min: null },
	gem_level: { min: null, max: null },
	shaper_item: { option: null },
	elder_item: { option: null },
	fractured_item: { option: null },
	synthesised_item: { option: null },
	// identified: { option: null },
	alternate_art: { option: null },
	corrupted: { option: null },
	mirrored: { option: null },
	crafted: { option: null },
	veiled: { option: null },
	enchanted: { option: null },
	talisman_tier: { min: null, max: null }
};
const reducerObj = {
	...createMinMaxSubReducer(MISC_FILTERS.QUALITY, 'quality'),
	...createMinMaxSubReducer(MISC_FILTERS.ILVL, 'ilvl'),
	...createMinMaxSubReducer(MISC_FILTERS.GEM_LEVEL_PROGRESS, 'gem_level_progress'),
	...createMinMaxSubReducer(MISC_FILTERS.GEM_LEVEL, 'gem_level'),
	...createMinMaxSubReducer(MISC_FILTERS.TALISMAN_TIER, 'talisman_tier'),
	[MISC_FILTERS.SHAPER_ITEM.OPTION]: (prevState, action) => ({ shaper_item: { option: action.option } }),
	[MISC_FILTERS.ELDER_ITEM.OPTION]: (prevState, action) => ({ elder_item: { option: action.option } }),
	[MISC_FILTERS.FRACTURED_ITEM.OPTION]: (prevState, action) => ({ fractured_item: { option: action.option } }),
	[MISC_FILTERS.SYNTHESISED_ITEM.OPTION]: (prevState, action) => ({ synthesised_item: { option: action.option } }),
	[MISC_FILTERS.ALTERNATE_ART.OPTION]: (prevState, action) => ({ alternate_art: { option: action.option } }),
	[MISC_FILTERS.CORRUPTED.OPTION]: (prevState, action) => ({ corrupted: { option: action.option } }),
	[MISC_FILTERS.MIRRORED.OPTION]: (prevState, action) => ({ mirrored: { option: action.option } }),
	[MISC_FILTERS.CRAFTED.OPTION]: (prevState, action) => ({ crafted: { option: action.option } }),
	[MISC_FILTERS.VEILED.OPTION]: (prevState, action) => ({ veiled: { option: action.option } }),
	[MISC_FILTERS.ENCHANTED.OPTION]: (prevState, action) => ({ enchanted: { option: action.option } }),
	[APP_STATE.CLEAR_FILTERS]: (prevState, action) => ({
		...initialState
	})
};

export default createReducer(initialState, reducerObj);
