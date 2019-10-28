import { connect } from 'react-redux';
import { bulkStateSelector } from 'store/reducers/rootReducer';
import { addNewSearch, setNicknameHighlight, setBulkPreset } from 'store/actions/actions';
import BulkListingSearchForm from './bulkListingSearchForm';
import { Button, Row, Col, Input, Select } from 'antd';

const { Option } = Select;

const BulkListingSearchFormContainer = ({
	searchList,
	addNewSearch,
	visible,
	setNicknameHighlight,
	highlight,
	setBulkPreset
}) => {
	const presets = require('../../assets/presets.json');
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
	const handleHighlightChange = e => {
		setNicknameHighlight(e.target.value || '');
	};
	const handlePresetChange = value => {
		console.log(value);
		setBulkPreset(value);
	};

	return (
		<div>
			{visible ? (
				<div>
					<Row>{searches}</Row>
					<Row>
						<Col lg={2}>
							<Button type="primary" onClick={handleAddSearch}>
								Add
							</Button>
						</Col>
						<Col lg={2}>
							<Input onChange={handleHighlightChange} value={highlight}></Input>
						</Col>
						<Col lg={2}>
							<Select style={{ width: '100%' }} onChange={handlePresetChange} defaultValue="mrk">
								{Object.keys(presets).map(preset => {
									return (
										<Option value={preset} key={preset}>
											{preset}
										</Option>
									);
								})}
							</Select>
						</Col>
					</Row>
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
		visible: selector.bulkSearchFormVisible,
		highlight: selector.nicknameHighlight
	};
};
const mapDispatchToProps = {
	addNewSearch,
	setNicknameHighlight,
	setBulkPreset
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BulkListingSearchFormContainer);
