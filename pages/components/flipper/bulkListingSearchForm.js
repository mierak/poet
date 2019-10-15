import { connect } from 'react-redux';
import { Input, Select } from 'antd';
import { bulkStateSelector } from 'store/reducers/rootReducer';
import { setWant, setHave } from 'store/actions/actions';

const InputGroup = Input.Group;
const { Option } = Select;

const BulkListingSearchFrom = ({ id, want, have, setWant, setHave }) => {
	const handleWantChange = e => {
		setWant(id, e || '');
	};
	const handleHaveChange = e => {
		setHave(id, e || '');
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
			<Select style={{ width: '50%' }} defaultValue={want} onChange={handleWantChange}>
				<Option value="chaos">Chaos Orb</Option>
				<Option value="exa">Exalted Orb</Option>
			</Select>
			<Select style={{ width: '50%' }} defaultValue={have} onChange={handleHaveChange}>
				{options}
			</Select>
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
	setHave
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BulkListingSearchFrom);
