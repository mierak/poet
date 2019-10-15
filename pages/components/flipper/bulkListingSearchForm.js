import { connect } from 'react-redux';
import { Input, Select, Button } from 'antd';
import { bulkStateSelector } from 'store/reducers/rootReducer';
import { setWant, setHave, removeSearch } from 'store/actions/actions';

const InputGroup = Input.Group;
const { Option } = Select;

const BulkListingSearchFrom = ({ id, want, have, setWant, setHave, removeSearch }) => {
	const handleWantChange = e => {
		setWant(id, e || '');
	};
	const handleHaveChange = e => {
		setHave(id, e || '');
	};
	const handleDelete = () => {
		removeSearch(id);
	};
	const items = require('../../assets/bulk.json');
	const options = items.items.map(item => {
		return (
			<Option value={item.value} key={item.value}>
				{item.name}
			</Option>
		);
	});
	return (
		<InputGroup>
			<Select style={{ width: '48%' }} defaultValue={want} onChange={handleWantChange}>
				<Option value="chaos">Chaos Orb</Option>
				<Option value="exa">Exalted Orb</Option>
			</Select>
			<Select style={{ width: '48%' }} defaultValue={have} onChange={handleHaveChange}>
				{options}
			</Select>
			<Button icon="delete" style={{ width: '4%' }} onClick={handleDelete} />
		</InputGroup>
	);
};

const mapStateToProps = (state, ownProps) => {
	const selector = bulkStateSelector(state);
	return {
		want: selector.searchList[ownProps.id].want,
		have: selector.searchList[ownProps.id].have
	};
};
const mapDispatchToProps = {
	setWant,
	setHave,
	removeSearch
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BulkListingSearchFrom);
