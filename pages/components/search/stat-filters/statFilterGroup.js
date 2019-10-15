import React from 'react';
import StatFilter from './statFilter';
import { connect } from 'react-redux';
import { Button, Select, Col } from 'antd';
import { addStatFilterToGroup, setStatFilterType, removeStatFilterGroup } from 'store/actions/actions';
import { statsFiltersSelector } from 'store/reducers/rootReducer';

const Option = { Select };

const statFilterGroup = React.memo(
	({ id, groupFilterIds, addStatFilterToGroup, setStatFilterGroupType, removeStatFilterGroup }) => {
		const statFilters = groupFilterIds.map(filterId => {
			return <StatFilter id={parseInt(filterId)} key={filterId} />;
		});
		const options = ['And', 'Not', 'If', 'Count', 'Weighted Sum'];

		const handleTypeChange = type => {
			setStatFilterGroupType(id, type);
		};
		const handleDelete = () => {
			removeStatFilterGroup(id);
		};
		const optionsComponents = options.map(opt => {
			return (
				<Select.Option key={opt} value={opt}>
					{opt}
				</Select.Option>
			);
		});

		return (
			<div>
				<Col span={24}>{statFilters}</Col>
				<Col span={18}>
					<Button
						type="primary"
						onClick={() => {
							addStatFilterToGroup(id);
						}}
						style={{ width: '100%' }}>
						Add Stat Filter
					</Button>
				</Col>
				<Col span={4}>
					<Select style={{ width: '100%' }} defaultValue="And" onChange={handleTypeChange}>
						{optionsComponents}
					</Select>
				</Col>
				<Col span={2}>
					<Button icon="delete" style={{ width: '100%' }} onClick={handleDelete} />
				</Col>
			</div>
		);
	}
);

const mapStateToProps = (state, ownProps) => {
	const selector = statsFiltersSelector(state);
	const groupFilterIds = selector.statFilterGroups[ownProps.id].statFilters;
	return {
		groupFilterIds: groupFilterIds
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addStatFilterToGroup: groupId => dispatch(addStatFilterToGroup(groupId)),
		setStatFilterGroupType: (groupId, type) => dispatch(setStatFilterType(groupId, type)),
		removeStatFilterGroup: id => dispatch(removeStatFilterGroup(id))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(statFilterGroup);
