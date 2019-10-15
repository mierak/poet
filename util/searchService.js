import {
	setSearchState,
	setSearchResults,
	setSearchResultsIds,
	addSearchResults,
	setSearchResultsPage,
	setBulkResults,
	addBulkResults,
	setReverseBulkResults,
	setBulkProgress
} from 'store/actions/actions';

export default class SearchService {
	constructor(store) {
		this.store = store;
		this.hasMore = true;
	}
	getSearchRequestJson = () => {
		const weaponFilters = this.store.getState().weaponFilters;
		const armourFilters = this.store.getState().armourFilters;
		const mapFilters = this.store.getState().mapFilters;
		const requirementsFilters = this.store.getState().requirementsFilters;
		const miscFilters = this.store.getState().miscFilters;
		const socketFilters = this.store.getState().socketFilters;
		const statFilters = this.store.getState().statFilters;
		const appState = this.store.getState().appState;
		let stats = [];
		let empty = true;
		Object.keys(statFilters.statFilterGroups).map(key => {
			const group = statFilters.statFilterGroups[key];
			const filters = group.statFilters.map(filterId => {
				const filter = statFilters.statFilters[filterId];
				if (filter.id !== '') {
					empty = false;
				}
				return {
					id: filter.id,
					value: {
						min: filter.min,
						max: filter.max
					},
					disable: false
				};
			});
			stats.push({
				type: group.type,
				filters: filters
			});
		});

		const searchQuery = {
			query: {
				status: { option: 'online' },
				stats: [{ type: 'and', filters: [] }],
				term: appState.searchTerm,
				filters: {
					weapon_filters: {
						filters: weaponFilters
					},
					armour_filters: {
						filters: armourFilters
					},
					req_filters: {
						filters: requirementsFilters
					},
					map_filters: {
						filters: mapFilters
					},
					misc_filters: {
						filters: miscFilters
					},
					socket_filters: {
						filters: socketFilters
					}
				}
			},
			sort: {
				price: 'asc'
			}
		};
		if (!empty) {
			searchQuery.query.stats = stats;
		}
		return searchQuery;
	};
	search = () => {
		console.log('SearchRequest JSON', this.getSearchRequestJson());
		let items = [];
		this.hasMore = true;
		const url =
			'https://www.pathofexile.com/api/trade/search/Blight?source=' + JSON.stringify(this.getSearchRequestJson());
		this.store.dispatch(setSearchState('loading'));
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(json => {
				if (json.result.length === 0) {
					this.store.dispatch(setSearchState('loaded'));
					this.store.dispatch(setSearchResults([]));
					//TODO Set loading state and display no items found
					return;
				}
				this.store.dispatch(setSearchResultsIds(json.result));
				let fetchString = '';
				for (let i = 0; i < 10; i++) {
					fetchString += json.result[i];
					if (i < 9) {
						fetchString += ',';
					}
				}
				fetch('https://www.pathofexile.com/api/trade/fetch/' + fetchString)
					.then(response => {
						return response.json();
					})
					.then(json => {
						//TODO check for empty response

						for (let i = 0; i < json.result.length; i++) {
							items.push(json.result[i]);
						}
						this.store.dispatch(setSearchResults(items));
						this.store.dispatch(setSearchState('loaded'));
					});
			});
	};
	loadNext = () => {
		const page = this.store.getState().appState.resultsPage + 1;
		let items = [];
		let fetchString = '';
		if (this.store.getState().appState.loadingState === 'loadingNext') {
			console.log('Currently loading, skipping loadNext...');
			return;
		}
		if (typeof this.store.getState().appState.resultsIds[page * 10] == 'undefined') {
			console.log('Nothing to search for, ID is undefined');
			this.hasMore = false;
			return;
		}
		this.hasMore = true;
		this.store.dispatch(setSearchState('loadingNext'));
		this.store.dispatch(setSearchResultsPage(page));
		for (let i = page * 10; i < page * 10 + 10; i++) {
			fetchString += this.store.getState().appState.resultsIds[i];
			if (i < page * 10 + 9) {
				fetchString += ',';
			}
		}
		fetch('https://www.pathofexile.com/api/trade/fetch/' + fetchString)
			.then(response => {
				return response.json();
			})
			.then(json => {
				//TODO check for empty response

				for (let i = 0; i < json.result.length; i++) {
					if (json.result[i] !== null) {
						items.push(json.result[i]);
					}
				}
				this.store.dispatch(addSearchResults(items));
				this.store.dispatch(setSearchState('loaded'));
			});
	};

	searchBulk = (want, have) => {
		const bulkState = this.store.getState().bulkState;
		let items = [];
		let reverseItems = [];
		const searchJson = { exchange: { status: { option: 'online' }, have: [have], want: [want] } };
		const reverseSearchJson = {
			exchange: { status: { option: 'online' }, have: [want], want: [have] }
		};
		const url = 'https://www.pathofexile.com/api/trade/exchange/Blight?source=' + JSON.stringify(searchJson);
		const reverseUrl =
			'https://www.pathofexile.com/api/trade/exchange/Blight?source=' + JSON.stringify(reverseSearchJson);
		const fetch = require('node-fetch');
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(json => {
				// if (json.result.length === 0) {
				// 	this.store.dispatch(setSearchState('loaded'));
				// 	this.store.dispatch(setSearchResults([]));
				// 	//TODO Set loading state and display no items found
				// 	return;
				// }
				// this.store.dispatch(setSearchResultsIds(json.result));
				let fetchString = '';
				for (let i = 0; i < 10; i++) {
					fetchString += json.result[i];
					if (i < 9) {
						fetchString += ',';
					}
				}
				fetch('https://www.pathofexile.com/api/trade/fetch/' + fetchString)
					.then(response => {
						return response.json();
					})
					.then(json => {
						//TODO check for empty response

						for (let i = 0; i < json.result.length; i++) {
							if (json.result[i] !== null) items.push(json.result[i]);
						}
					});
			})
			.then(() =>
				fetch(reverseUrl)
					.then(response => {
						return response.json();
					})
					.then(json => {
						// if (json.result.length === 0) {
						// 	this.store.dispatch(setSearchState('loaded'));
						// 	this.store.dispatch(setSearchResults([]));
						// 	//TODO Set loading state and display no items found
						// 	return;
						// }
						// this.store.dispatch(setSearchResultsIds(json.result));
						let fetchString = '';
						for (let i = 0; i < json.result.length; i++) {
							fetchString += json.result[i];
							if (i < 9) {
								fetchString += ',';
							}
						}
						console.log(`fetch${fetchString}string`);
						if (fetchString !== '') {
							fetch('https://www.pathofexile.com/api/trade/fetch/' + fetchString)
								.then(response => {
									return response.json();
								})
								.then(json => {
									//TODO check for empty response

									for (let i = 0; i < json.result.length; i++) {
										if (json.result[i] !== null) reverseItems.push(json.result[i]);
									}
								})
								.then(() => {
									const results = {
										results: items,
										reverseResults: reverseItems,
										have: have,
										want: want
									};
									this.store.dispatch(addBulkResults(results));
								});
						} else {
							const results = {
								results: [],
								reverseResults: [],
								have: have,
								want: want
							};
							this.store.dispatch(addBulkResults(results));
						}
					})
			);
	};
	searchAllBulk = () => {
		const searchList = this.store.getState().bulkState.searchList;
		const keys = Object.keys(searchList);
		let i = 0;
		this.store.dispatch(setBulkResults([]));
		this.store.dispatch(setBulkProgress(0));
		const loop = () => {
			setTimeout(() => {
				console.log('iteration', i);
				const progress = this.store.getState().bulkState.progress;
				this.searchBulk(searchList[keys[i]].want, searchList[keys[i]].have);
				i++;
				if (i < keys.length) {
					loop();
				}
				this.store.dispatch(setBulkProgress(progress + 100 / keys.length));
			}, 2000);
		};
		loop();
	};
}
