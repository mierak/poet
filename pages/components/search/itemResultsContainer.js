import { connect } from 'react-redux';
import { appStateSelector } from 'store/reducers/rootReducer';
import { Spin, Alert, Card, Col, Row } from 'antd';
import Item from '../itemBlock/item';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

const Container = styled.div`
	border-width: 1px;
	border-style: solid;
	border-radius: 2px;
	border-color: #2e3338;
	margin: 5px 3px 0 3px;
`;

const ItemResultsContainer = React.memo(({ loadingState, searchResults, searchService, page }) => {
	let index = 0;
	const colors = [true, true, false, false];
	//TODO add check if there is more items load
	return (
		<Container>
			{loadingState === 'loaded' || loadingState === 'loadingNext' ? (
				<InfiniteScroll loadMore={searchService.loadNext} hasMore={searchService.hasMore} initialLoad={false}>
					{searchResults.data !== null ? (
						<Row type="flex">
							{searchResults.map(item => {
								return (
									<Col span={12} key={item.id}>
										<Item data={item} darker={colors[++index % 4]} />
									</Col>
								);
							})}
						</Row>
					) : (
						'NO RESULTS FOUND'
					)}
				</InfiniteScroll>
			) : loadingState === 'loading' ? (
				<Spin tip="Loading...">
					<Alert message="Loading..." description="Fetching your search request." type="info" />
				</Spin>
			) : (
				''
			)}
		</Container>
	);
});

const mapStateToProps = state => {
	const selector = appStateSelector(state);
	return {
		loadingState: selector.loadingState,
		searchResults: selector.searchResults,
		page: selector.resultsPage
	};
};
export default connect(mapStateToProps)(ItemResultsContainer);
