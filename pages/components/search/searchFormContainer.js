import React from 'react';
import NumberSelectInput from './numberSelectInput';
import styled, { keyframes } from 'styled-components';
import SocketFilter from './socketFilter';
import titles from 'util/titles';
import StatFiltersContainer from './stat-filters/statFiltersContainer';
import * as types from 'store/actions/types';
import * as actions from 'store/actions/actions';
import { connect, useStore } from 'react-redux';
import { Affix, Collapse, Row, Col, Button, Card, Menu, Select, Typography } from 'antd';
import ItemResultsContainer from './itemResultsContainer';
import { appStateSelector, selectors } from 'store/reducers/rootReducer';
import SearchInput from './searchInput';
import SearchService from '../../../util/searchService';

const { Panel } = Collapse;
const { Text } = Typography;
const searchFormContainer = React.memo(({ filtersActions, searchFormVisible, setSearchFormVisible, clearFilters }) => {
	const store = useStore();
	const frames = keyframes`
		from {
			transform: translateY(0);
			opacity: 0.5
			max-height: 700px;
  		}

  		to {
			transform: translateY(-650px);
			opacity: 0;
			visibility: hidden;
			max-height: 0;
		  }
	`;
	const frames2 = keyframes`
		from {
			transform: translateY(-650px);
			opacity: 0;
			visibility: hidden;
			max-height: 0;
  		}

  		to {
			transform: translateY(0);
			opacity: 0.5
			max-height: 700px;
		  }
	`;
	const StyledCard = styled(Card)`
		margin: 6px 3px 6px 3px;
		background-color: rgba(34,38,41,0.8);
		/* opacity: 0.95; */
		/* min-height: 815px; */
		/* display: ${searchFormVisible ? '' : 'none'}; *
		  /* transition-delay: 1s;
		  transition-property: display; */
		/* animation: ${!searchFormVisible ? frames : ''} 0.3s 1;
		animation-fill-mode: both; */
	`;
	const DisappearingCol = styled(Col)`
		/* animation: ${!searchFormVisible ? frames : frames2} 0.3s 1;
		animation-fill-mode: both; */
		display: ${searchFormVisible ? 'block' : 'none'};
	`;
	const StyledFiltersContainer = styled.div`
		margin-bottom: 15px;
	`;

	const srv = new SearchService(store);
	function handleSubmit(event) {
		if (event.preventDefault === 'function') {
			event.preventDefault();
		}
		toggleSearchFormVisibility();
		// search(queryManager.searchQuery);
		srv.search();
	}
	function toggleSearchFormVisibility() {
		setSearchFormVisible(!searchFormVisible);
	}
	function createSearchForms(context, t) {
		return {
			title: t,
			components: Object.keys(context).map(ctx => {
				let ctxSelector = ctx.toString().toLowerCase();
				let title = 'test';
				titles[ctxSelector].hasOwnProperty('options')
					? (title = titles[ctxSelector].title)
					: (title = titles[ctxSelector]);
				if (context[ctx].hasOwnProperty('R')) {
					return (
						<Col span={24} key={title}>
							<Col lg={12} sm={8} xs={8}>
								<Text>{title}</Text>
							</Col>
							<Col lg={12} sm={16} xs={16}>
								<SocketFilter
									contextTitle={t}
									context={ctxSelector}
									setR={filtersActions[ctxSelector].setR}
									setG={filtersActions[ctxSelector].setG}
									setB={filtersActions[ctxSelector].setB}
									setW={filtersActions[ctxSelector].setW}
									setMin={filtersActions[ctxSelector].setMin}
									setMax={filtersActions[ctxSelector].setMax}
								/>
							</Col>
						</Col>
					);
				} else if (context[ctx].hasOwnProperty('OPTION')) {
					let defaultVal;
					let options;
					if (titles[ctxSelector].hasOwnProperty('options')) {
						options = titles.map_series.options.map(ser => {
							return (
								<Select.Option key={ser} value={ser}>
									{ser}
								</Select.Option>
							);
						});
						defaultVal = titles.map_series.options[0];
					} else {
						options = ['Any', 'Yes', 'No'];
						options = options.map(ser => {
							return (
								<Select.Option key={ser} value={ser}>
									{ser}
								</Select.Option>
							);
						});
						defaultVal = 'Any';
					}
					return (
						<Col span={12} key={title}>
							<Col span={12}>
								<Text>{title}</Text>
							</Col>
							<Col span={12}>
								<Select
									defaultValue={defaultVal}
									onChange={filtersActions[ctxSelector].setOption}
									style={{ width: '100%' }}>
									{options}
								</Select>
							</Col>
						</Col>
					);
				} else if (context[ctx].hasOwnProperty('SET_MIN')) {
					return (
						<Col span={12} key={title}>
							<Col span={12}>
								<Text>{title}</Text>
							</Col>
							<Col span={12}>
								<NumberSelectInput
									context={ctxSelector}
									contextTitle={t}
									setMin={filtersActions[ctxSelector].setMin}
									setMax={filtersActions[ctxSelector].setMax}
									submit={handleSubmit}
								/>
							</Col>
						</Col>
					);
				}
			})
		};
	}
	let weaponFilters;
	let armourFilters;
	let socketFilters;
	let reqFilters;
	let mapFilters;
	let miscFilters;
	function createSearchFormsGroups() {
		weaponFilters = createSearchForms(types.WEAPON_FILTERS, 'Weapon Filters');
		armourFilters = createSearchForms(types.ARMOUR_FILTERS, 'Armour Filters');
		socketFilters = createSearchForms(types.SOCKET_FILTERS, 'Socket Filters');
		reqFilters = createSearchForms(types.REQUIREMENTS_FILTERS, 'Requirements Filters');
		mapFilters = createSearchForms(types.MAP_FILTERS, 'Map Filters');
		miscFilters = createSearchForms(types.MISC_FILTERS, 'Misc Filters');
	}
	createSearchFormsGroups();
	let filtersArr = [weaponFilters, armourFilters, socketFilters, reqFilters, mapFilters, miscFilters];
	return (
		<div>
			<Row>
				<Row justify="center">
					<DisappearingCol lg={12} sm={24}>
						<StyledCard>
							<Col>
								<SearchInput search={handleSubmit} />
							</Col>
							{filtersArr.map(item => {
								return (
									<Collapse defaultActiveKey={['1']} key={item.title}>
										<Panel header={item.title} key="1">
											<StyledFiltersContainer>{item.components}</StyledFiltersContainer>
										</Panel>
									</Collapse>
								);
							})}
						</StyledCard>
					</DisappearingCol>
					<DisappearingCol lg={12} sm={24}>
						<StyledCard>
							<StatFiltersContainer />
						</StyledCard>
					</DisappearingCol>
				</Row>
			</Row>
			<Row>
				<Col>
					<Affix offsetBottom={0} offsetTop={0} affix="true">
						<Menu mode="horizontal">
							<Menu.Item key="submit">
								<Button onClick={handleSubmit} type="primary">
									Submit
								</Button>
							</Menu.Item>
							<Menu.Item key="toggle">
								<Button onClick={toggleSearchFormVisibility} type="default">
									{searchFormVisible ? 'Hide Filters' : 'Show Filters'}
								</Button>
							</Menu.Item>
							<Menu.Item key="clear">
								<Button onClick={clearFilters} type="dashed">
									Clear Filters
								</Button>
							</Menu.Item>
						</Menu>
					</Affix>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<ItemResultsContainer searchService={srv} />
				</Col>
			</Row>
		</div>
	);
});
const mapDispatchToProps = dispatch => {
	return {
		filtersActions: {
			damage: {
				setMin: val => dispatch(actions.setWeaponMinDamage(val)),
				setMax: val => dispatch(actions.setWeaponMaxDamage(val))
			},
			crit: {
				setMin: val => dispatch(actions.setWeaponMinCrit(val)),
				setMax: val => dispatch(actions.setWeaponMaxCrit(val))
			},
			aps: {
				setMin: val => dispatch(actions.setWeaponMinAps(val)),
				setMax: val => dispatch(actions.setWeaponMaxAps(val))
			},
			dps: {
				setMin: val => dispatch(actions.setWeaponMinDps(val)),
				setMax: val => dispatch(actions.setWeaponMaxDps(val))
			},
			edps: {
				setMin: val => dispatch(actions.setWeaponMinEDps(val)),
				setMax: val => dispatch(actions.setWeaponMaxEDps(val))
			},
			pdps: {
				setMin: val => dispatch(actions.setWeaponMinPDps(val)),
				setMax: val => dispatch(actions.setWeaponMaxPDps(val))
			},
			ar: {
				setMin: val => dispatch(actions.setArmourMinAr(val)),
				setMax: val => dispatch(actions.setArmourMaxAr(val))
			},
			ev: {
				setMin: val => dispatch(actions.setArmourMinEv(val)),
				setMax: val => dispatch(actions.setArmourMaxEv(val))
			},
			es: {
				setMin: val => dispatch(actions.setArmourMinEs(val)),
				setMax: val => dispatch(actions.setArmourMaxEs(val))
			},
			block: {
				setMin: val => dispatch(actions.setArmourMinBlock(val)),
				setMax: val => dispatch(actions.setArmourMaxBlock(val))
			},
			str: {
				setMin: val => dispatch(actions.setRequirementsMinStr(val)),
				setMax: val => dispatch(actions.setRequirementsMaxStr(val))
			},
			dex: {
				setMin: val => dispatch(actions.setRequirementsMinDex(val)),
				setMax: val => dispatch(actions.setRequirementsMaxDex(val))
			},
			int: {
				setMin: val => dispatch(actions.setRequirementsMinInt(val)),
				setMax: val => dispatch(actions.setRequirementsMaxInt(val))
			},
			lvl: {
				setMin: val => dispatch(actions.setRequirementsMinLvl(val)),
				setMax: val => dispatch(actions.setRequirementsMaxLvl(val))
			},
			map_tier: {
				setMin: val => dispatch(actions.setMapMinTier(val)),
				setMax: val => dispatch(actions.setMapMaxTier(val))
			},
			map_packsize: {
				setMin: val => dispatch(actions.setMapMinPacksize(val)),
				setMax: val => dispatch(actions.setMapMaxPacksize(val))
			},
			map_iiq: {
				setMin: val => dispatch(actions.setMapMinIiq(val)),
				setMax: val => dispatch(actions.setMapMaxIiq(val))
			},
			map_iir: {
				setMin: val => dispatch(actions.setMapMinIir(val)),
				setMax: val => dispatch(actions.setMapMaxIir(val))
			},
			map_shaped: {
				setOption: val => dispatch(actions.setMapShaped(val))
			},
			map_elder: {
				setOption: val => dispatch(actions.setMapElder(val))
			},
			map_series: {
				setOption: val => dispatch(actions.setMapSeries(val))
			},
			quality: {
				setMin: val => dispatch(actions.setMiscMinQuality(val)),
				setMax: val => dispatch(actions.setMiscMaxQuality(val))
			},
			ilvl: {
				setMin: val => dispatch(actions.setMiscMinIlvl(val)),
				setMax: val => dispatch(actions.setMiscMaxIlvl(val))
			},
			gem_level_progress: {
				setMin: val => dispatch(actions.setMiscMinGemLevelProgress(val)),
				setMax: val => dispatch(actions.setMiscMaxGemLevelProgress(val))
			},
			gem_level: {
				setMin: val => dispatch(actions.setMiscMinGemLevel(val)),
				setMax: val => dispatch(actions.setMiscMaxGemLevel(val))
			},
			talisman_tier: {
				setMin: val => dispatch(actions.setMiscMinTalismanTier(val)),
				setMax: val => dispatch(actions.setMiscMaxTalismanTier(val))
			},
			shaper_item: {
				setOption: val => dispatch(actions.setMiscShaperItem(val))
			},
			elder_item: {
				setOption: val => dispatch(actions.setMiscElderItem(val))
			},
			fractured_item: {
				setOption: val => dispatch(actions.setMiscFracturedItem(val))
			},
			synthesised_item: {
				setOption: val => dispatch(actions.setMiscSynthesisedItem(val))
			},
			alternate_art: {
				setOption: val => dispatch(actions.setMiscAlternateArt(val))
			},
			corrupted: {
				setOption: val => dispatch(actions.setMiscCorrupted(val))
			},
			mirrored: {
				setOption: val => dispatch(actions.setMiscMirrored(val))
			},
			veiled: {
				setOption: val => dispatch(actions.setMiscVeiled(val))
			},
			crafted: {
				setOption: val => dispatch(actions.setMiscCrafted(val))
			},
			enchanted: {
				setOption: val => dispatch(actions.setMiscEnchanted(val))
			},
			sockets: {
				setR: val => dispatch(actions.setSocketsR(val)),
				setG: val => dispatch(actions.setSocketsG(val)),
				setB: val => dispatch(actions.setSocketsB(val)),
				setW: val => dispatch(actions.setSocketsW(val)),
				setMin: val => dispatch(actions.setSocketsMin(val)),
				setMax: val => dispatch(actions.setSocketsMax(val))
			},
			links: {
				setR: val => dispatch(actions.setLinksR(val)),
				setG: val => dispatch(actions.setLinksG(val)),
				setB: val => dispatch(actions.setLinksB(val)),
				setW: val => dispatch(actions.setLinksW(val)),
				setMin: val => dispatch(actions.setLinksMin(val)),
				setMax: val => dispatch(actions.setLinksMax(val))
			}
		},
		setSearchFormVisible: val => dispatch(actions.setSearchFormVisible(val)),
		clearFilters: () => dispatch(actions.clearFilters())
	};
};
const mapStateToProps = state => {
	const appState = appStateSelector(state);
	return {
		searchFormVisible: appState.searchFormVisible
	};
};
searchFormContainer.whyDidYouRender = {
	logOnDifferentValues: true,
	customName: 'SearchBar'
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(searchFormContainer);
