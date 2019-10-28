import * as types from './types';

function makeMinMaxAction(type) {
	let actions = [];

	actions.push(function(min) {
		return { type: type.SET_MIN, min };
	});
	actions.push(function(max) {
		return { type: type.SET_MAX, max };
	});

	return actions;
}
//Weapon Actions
export const [setWeaponMinDamage, setWeaponMaxDamage] = makeMinMaxAction(types.WEAPON_FILTERS.DAMAGE);
export const [setWeaponMinCrit, setWeaponMaxCrit] = makeMinMaxAction(types.WEAPON_FILTERS.CRIT);
export const [setWeaponMinAps, setWeaponMaxAps] = makeMinMaxAction(types.WEAPON_FILTERS.APS);
export const [setWeaponMinDps, setWeaponMaxDps] = makeMinMaxAction(types.WEAPON_FILTERS.DPS);
export const [setWeaponMinEDps, setWeaponMaxEDps] = makeMinMaxAction(types.WEAPON_FILTERS.EDPS);
export const [setWeaponMinPDps, setWeaponMaxPDps] = makeMinMaxAction(types.WEAPON_FILTERS.PDPS);
//ARMOUR ACTIONS
export const [setArmourMinAr, setArmourMaxAr] = makeMinMaxAction(types.ARMOUR_FILTERS.AR);
export const [setArmourMinEv, setArmourMaxEv] = makeMinMaxAction(types.ARMOUR_FILTERS.EV);
export const [setArmourMinEs, setArmourMaxEs] = makeMinMaxAction(types.ARMOUR_FILTERS.ES);
export const [setArmourMinBlock, setArmourMaxBlock] = makeMinMaxAction(types.ARMOUR_FILTERS.BLOCK);
//Requirements Actions
export const [setRequirementsMinStr, setRequirementsMaxStr] = makeMinMaxAction(types.REQUIREMENTS_FILTERS.STR);
export const [setRequirementsMinDex, setRequirementsMaxDex] = makeMinMaxAction(types.REQUIREMENTS_FILTERS.DEX);
export const [setRequirementsMinInt, setRequirementsMaxInt] = makeMinMaxAction(types.REQUIREMENTS_FILTERS.INT);
export const [setRequirementsMinLvl, setRequirementsMaxLvl] = makeMinMaxAction(types.REQUIREMENTS_FILTERS.LVL);
//Map Actions
export const [setMapMinTier, setMapMaxTier] = makeMinMaxAction(types.MAP_FILTERS.MAP_TIER);
export const [setMapMinPacksize, setMapMaxPacksize] = makeMinMaxAction(types.MAP_FILTERS.MAP_PACKSIZE);
export const [setMapMinIiq, setMapMaxIiq] = makeMinMaxAction(types.MAP_FILTERS.MAP_IIQ);
export const [setMapMinIir, setMapMaxIir] = makeMinMaxAction(types.MAP_FILTERS.MAP_IIR);
export const setMapShaped = option => {
	return { type: types.MAP_FILTERS.MAP_SHAPED.OPTION, option };
};
export const setMapElder = option => {
	return { type: types.MAP_FILTERS.MAP_ELDER.OPTION, option };
};
export const setMapSeries = option => {
	return { type: types.MAP_FILTERS.MAP_SERIES.OPTION, option };
};
//Misc Actions
export const [setMiscMinQuality, setMiscMaxQuality] = makeMinMaxAction(types.MISC_FILTERS.QUALITY);
export const [setMiscMinIlvl, setMiscMaxIlvl] = makeMinMaxAction(types.MISC_FILTERS.ILVL);
export const [setMiscMinGemLevel, setMiscMaxGemLevel] = makeMinMaxAction(types.MISC_FILTERS.GEM_LEVEL);
export const [setMiscMinGemLevelProgress, setMiscMaxGemLevelProgress] = makeMinMaxAction(
	types.MISC_FILTERS.GEM_LEVEL_PROGRESS
);
export const [setMiscMinTalismanTier, setMiscMaxTalismanTier] = makeMinMaxAction(types.MISC_FILTERS.TALISMAN_TIER);
export const setMiscShaperItem = option => {
	return { type: types.MISC_FILTERS.SHAPER_ITEM.OPTION, option };
};
export const setMiscElderItem = option => {
	return { type: types.MISC_FILTERS.ELDER_ITEM.OPTION, option };
};
export const setMiscFracturedItem = option => {
	return { type: types.MISC_FILTERS.FRACTURED_ITEM.OPTION, option };
};
export const setMiscSynthesisedItem = option => {
	return { type: types.MISC_FILTERS.SYNTHESISED_ITEM.OPTION, option };
};
export const setMiscAlternateArt = option => {
	return { type: types.MISC_FILTERS.ALTERNATE_ART.OPTION, option };
};
export const setMiscCorrupted = option => {
	return { type: types.MISC_FILTERS.CORRUPTED.OPTION, option };
};
export const setMiscMirrored = option => {
	return { type: types.MISC_FILTERS.MIRRORED.OPTION, option };
};
export const setMiscCrafted = option => {
	return { type: types.MISC_FILTERS.CRAFTED.OPTION, option };
};
export const setMiscVeiled = option => {
	return { type: types.MISC_FILTERS.VEILED.OPTION, option };
};
export const setMiscEnchanted = option => {
	return { type: types.MISC_FILTERS.ENCHANTED.OPTION, option };
};
//Socket Filters
export const [setSocketsMin, setSocketsMax] = makeMinMaxAction(types.SOCKET_FILTERS.SOCKETS);
export const [setLinksMin, setLinksMax] = makeMinMaxAction(types.SOCKET_FILTERS.LINKS);
export const setSocketsR = min => {
	return { type: types.SOCKET_FILTERS.SOCKETS.R, min };
};
export const setSocketsG = min => {
	return { type: types.SOCKET_FILTERS.SOCKETS.G, min };
};
export const setSocketsB = min => {
	return { type: types.SOCKET_FILTERS.SOCKETS.B, min };
};
export const setSocketsW = min => {
	return { type: types.SOCKET_FILTERS.SOCKETS.W, min };
};
export const setLinksR = min => {
	return { type: types.SOCKET_FILTERS.LINKS.R, min };
};
export const setLinksG = min => {
	return { type: types.SOCKET_FILTERS.LINKS.G, min };
};
export const setLinksB = min => {
	return { type: types.SOCKET_FILTERS.LINKS.B, min };
};
export const setLinksW = min => {
	return { type: types.SOCKET_FILTERS.LINKS.W, min };
};
//Stats Filters
export const setStat = (id, value) => {
	return { type: types.SET_STAT_FILTER, id, value };
};
export const setStatFilterMin = (id, min) => {
	return { type: types.SET_STAT_FILTER_MIN, id, min };
};
export const setStatFilterMax = (id, max) => {
	return { type: types.SET_STAT_FILTER_MAX, id, max };
};
export const setStatFilterType = (id, filterType) => {
	return { type: types.SET_STAT_FILTER_TYPE, id, filterType };
};
//UI Actions
export const addStatFilterToGroup = id => {
	return { type: types.ADD_STAT_FILTER_TO_GROUP, id };
};
export const removeStatFilterFromGroup = id => {
	return { type: types.REMOVE_STAT_FILTER_FROM_GROUP, id };
};
export const addStatFilterGroup = id => {
	return { type: types.ADD_STAT_FILTER_GROUP, id };
};
export const removeStatFilterGroup = id => {
	return { type: types.REMOVE_STAT_FILTER_GROUP, id };
};
export const setSearchResults = results => {
	return { type: types.APP_STATE.SET_SEARCH_RESULTS, results };
};
export const addSearchResults = results => {
	return { type: types.APP_STATE.ADD_SEARCH_RESULTS, results };
};
export const setSearchState = state => {
	return { type: types.APP_STATE.SET_SEARCH_STATE, state };
};
export const setSearchTerm = term => {
	return { type: types.APP_STATE.SET_SEARCH_TERM, term };
};
export const setSearchFormVisible = visible => {
	return { type: types.APP_STATE.SET_SEARCH_FORM_VISIBLE, visible };
};
export const setSearchResultsIds = ids => {
	return { type: types.APP_STATE.SET_SEARCH_RESULTS_IDS, ids };
};
export const setSearchResultsPage = page => {
	return { type: types.APP_STATE.SET_SEARCH_RESULTS_PAGE, page };
};
export const clearFilters = () => {
	return { type: types.APP_STATE.CLEAR_FILTERS };
};

//SUBJECT TO CHANGE | BULK
export const setHave = (id, have) => {
	return { type: types.BULK.SET_HAVE, id, have };
};
export const setWant = (id, want) => {
	return { type: types.BULK.SET_WANT, id, want };
};
export const setBulkResults = results => {
	return { type: types.BULK.SET_RESULTS, results };
};
export const addBulkResults = results => {
	return { type: types.BULK.ADD_RESULTS, results };
};
export const setReverseBulkResults = results => {
	return { type: types.BULK.SET_REVERSE_RESULTS, results };
};
export const addNewSearch = () => {
	return { type: types.BULK.ADD_NEW_SEARCH };
};
export const removeSearch = id => {
	return { type: types.BULK.REMOVE_SEARCH, id };
};
export const toggleBulkFormVisibility = () => {
	return { type: types.BULK.TOGGLE_SEARCH_FORM_VISIBILITY };
};
export const setBulkProgress = percent => {
	return { type: types.BULK.SET_PROGRESS, percent };
};
export const setNicknameHighlight = nick => {
	return { type: types.BULK.SET_HIGHLIGHT, nick };
};
export const setBulkPreset = preset => {
	return { type: types.BULK.SET_PRESET, preset };
};
