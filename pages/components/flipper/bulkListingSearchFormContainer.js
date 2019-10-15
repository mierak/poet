import { connect } from 'react-redux';
import { bulkStateSelector } from 'store/reducers/rootReducer';
import { addNewSearch } from 'store/actions/actions';
import BulkListingSearchForm from './bulkListingSearchForm';
import { Button, Row, Col } from 'antd';

const BulkListingSearchFormContainer = ({ searchList, addNewSearch, visible, toggleBulkFormVisibility }) => {
	const searches = Object.keys(searchList).map(id => {
		return (
			<Col lg={13} key={id}>
				<BulkListingSearchForm key={id} id={id}></BulkListingSearchForm>
			</Col>
		);
	});

	const handleAddSearch = () => {
		addNewSearch();
	};

	return (
		<div>
			{visible ? (
				<div>
					<Row>{searches}</Row>
					<Button type="primary" onClick={handleAddSearch}>
						Add
					</Button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

const mapStateToProps = state => {
	const selector = bulkStateSelector(state);
	return {
		searchList: selector.searchList,
		visible: selector.bulkSearchFormVisible
	};
};
const mapDispatchToProps = {
	addNewSearch
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BulkListingSearchFormContainer);
