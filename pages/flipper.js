import SearchService from '../util/searchService';
import { connect, useStore } from 'react-redux';
import { bulkStateSelector } from 'store/reducers/rootReducer';
import { toggleBulkFormVisibility } from 'store/actions/actions';
import BulkListingSearchFormContainer from './components/flipper/bulkListingSearchFormContainer';
import ResultsTable from './components/flipper/resultsTable';
import { Button, Row, Col, Progress, Card } from 'antd';
import './assets/flipper.css';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	height: 457px;
	margin: 5px;
	padding: 0 !important;
`;
const StyledLeftCol = styled(Col)`
	padding-right: 2px;
`;
const StyledRightCol = styled(Col)`
	padding-left: 2px;
`;
const StyledButton = styled(Button)`
	width: 98%;
`;

const Flipper = ({ results, progress, toggleBulkFormVisibility }) => {
	const store = useStore();
	const srv = new SearchService(store);
	if (!Array.isArray(results) || !results.length) {
		// srv.searchBulk();
	}
	const handleSearch = () => {
		srv.searchAllBulk();
	};
	const handleToggleVisibility = () => {
		toggleBulkFormVisibility();
	};
	const resultsArr = results.map(results => {
		return (
			<Col lg={4} key={results.have + results.want}>
				<StyledCard>
					<StyledLeftCol lg={12}>
						<ResultsTable results={results.results} want={results.want} have={results.have}></ResultsTable>
					</StyledLeftCol>
					<StyledRightCol lg={12}>
						<ResultsTable results={results.reverseResults} want={results.have} have={results.want}></ResultsTable>
					</StyledRightCol>
				</StyledCard>
			</Col>
		);
	});
	return (
		<div>
			<Row>
				<Col lg={24}>
					<Progress percent={progress}></Progress>
				</Col>
			</Row>
			<Row>
				<Col>
					<BulkListingSearchFormContainer></BulkListingSearchFormContainer>
				</Col>
			</Row>
			<Row>
				<Col lg={2}>
					<StyledButton type="primary" onClick={handleSearch}>
						Search
					</StyledButton>
				</Col>
				<Col lg={2}>
					<StyledButton type="primary" onClick={handleToggleVisibility}>
						Hide/Show
					</StyledButton>
				</Col>
			</Row>
			<Row>{resultsArr}</Row>
		</div>
	);
};

const mapStateToProps = state => {
	const selector = bulkStateSelector(state);
	return {
		results: selector.results,
		reverseResults: selector.reverseResults,
		progress: selector.progress
	};
};
const mapDispatchToProps = {
	toggleBulkFormVisibility
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Flipper);
