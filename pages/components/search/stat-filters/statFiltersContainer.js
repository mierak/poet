import { Button, Collapse, Icon, Card } from 'antd';
import { connect } from 'react-redux';
import StatFilterGroup from './statFilterGroup';
import { statsFiltersSelector } from 'store/reducers/rootReducer';
import { addStatFilterToGroup, addStatFilterGroup } from 'store/actions/actions';
import styled from 'styled-components';
const { Panel } = Collapse;
const StyledCard = styled(Card)`
	background-color: #2e3338;
	border: 1px solid #1c1c1e;
	border-radius: 5px;
	margin: 0 0 5px 0;
`;
const genExtra = () => (
	<Icon
		type="setting"
		onClick={event => {
			// If you don't want click extra trigger collapse, you can prevent this:
			event.stopPropagation();
		}}
	/>
);
const StatFiltersContainer = React.memo(({ statGroups, addStatFilterGroup }) => {
	const groups = Object.keys(statGroups).map(groupId => {
		return (
			// <StyledPanel header="Stat group" key="1" extra={genExtra()} style={{ padding: '0px' }}>
			<StyledCard key={groupId}>
				<StatFilterGroup id={parseInt(groupId)} key={groupId} />
			</StyledCard>
			// </StyledPanel>
		);
	});
	return (
		<div>
			{/* <Collapse defaultActiveKey={['1']}>{groups}</Collapse> */}
			{groups}
			<Button onClick={addStatFilterGroup}>Add Stat Group</Button>
		</div>
	);
});

const mapStateToProps = state => {
	const selector = statsFiltersSelector(state);
	return {
		statGroups: selector.statFilterGroups
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addStatFilterToGroup: () => dispatch(addStatFilterGroup()),
		addStatFilterGroup: () => dispatch(addStatFilterGroup()),
		addStatFilter: index => dispatch(addStatFilterToGroup(index))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatFiltersContainer);
