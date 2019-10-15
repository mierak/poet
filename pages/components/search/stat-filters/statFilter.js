import NumberSelectInput from '../numberSelectInput';
import StatAutoComplete from './StatsAutoComplete';
import { Col, Button } from 'antd';
import { connect } from 'react-redux';
import { statsFiltersSelector } from 'store/reducers/rootReducer';
import { setStatFilterMin, setStatFilterMax, removeStatFilterFromGroup } from 'store/actions/actions';
const StatFilter = React.memo(({ id, min, max, setMin, setMax, remove }) => {
	const handleMinChange = e => {
		setMin(id, e || '');
	};
	const handleMaxChange = e => {
		setMax(id, e || '');
	};
	const handleDelete = () => {
		remove(id);
	};
	return (
		<Col span={24}>
			<Col span={18}>
				<StatAutoComplete id={id} />
			</Col>
			<Col span={4}>
				<NumberSelectInput min={min} max={max} setMin={handleMinChange} setMax={handleMaxChange} />
			</Col>
			<Col span={2}>
				<Button icon="delete" style={{ width: '100%' }} onClick={handleDelete} />
			</Col>
		</Col>
	);
});

const mapStateToProps = (state, ownProps) => {
	const selector = statsFiltersSelector(state);
	return {
		max: selector.statFilters[ownProps.id].max,
		min: selector.statFilters[ownProps.id].min
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setMin: (filterIndex, min) => dispatch(setStatFilterMin(filterIndex, min)),
		setMax: (filterIndex, max) => dispatch(setStatFilterMax(filterIndex, max)),
		remove: id => dispatch(removeStatFilterFromGroup(id))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatFilter);
