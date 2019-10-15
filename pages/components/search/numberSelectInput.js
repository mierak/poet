import { Input, Col, Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	weaponFiltersSelector,
	armourFiltersSelector,
	requirementsFiltersSelector,
	mapFiltersSelector,
	miscFiltersSelector,
	socketFiltersSelector
} from 'store/reducers/rootReducer';

const StyledInput = styled(Input)`
	opacity: 1;
`;

const numberSelectInput = React.memo(({ min, max, setMin, setMax, submit }) => {
	function handleMinChange(val) {
		//TODO This implementation does not allow to enter decimal places
		setMin(parseFloat(val.target.value) || null);
	}
	function handleMaxChange(val) {
		setMax(parseFloat(val.target.value) || null);
	}
	return (
		<Col span={24}>
			<Col span={12}>
				<StyledInput
					value={min}
					size="default"
					placeholder="Min"
					onChange={handleMinChange}
					style={{ width: '100%' }}
					onPressEnter={submit}
				/>
			</Col>
			<Col span={12}>
				<StyledInput
					value={max}
					size="default"
					placeholder="Max"
					onChange={handleMaxChange}
					style={{ width: '100%' }}
					onPressEnter={submit}
				/>
			</Col>
		</Col>
	);
});
numberSelectInput.whyDidYouRender = {
	logOnDifferentValues: false,
	customName: 'NumberSelectInput'
};
numberSelectInput.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number
};
const mapStateToProps = (state, ownProps) => {
	let filters;
	if (typeof ownProps.context === 'undefined') return {};
	switch (ownProps.contextTitle) {
		case 'Weapon Filters':
			filters = weaponFiltersSelector(state);
			break;
		case 'Armour Filters':
			filters = armourFiltersSelector(state);
			break;
		case 'Requirements Filters':
			filters = requirementsFiltersSelector(state);
			break;
		case 'Map Filters':
			filters = mapFiltersSelector(state);
			break;
		case 'Misc Filters':
			filters = miscFiltersSelector(state);
			break;
		case 'Socket Filters':
			filters = socketFiltersSelector(state);
			break;
	}
	return {
		min: filters[ownProps.context].min,
		max: filters[ownProps.context].max
	};
};
export default connect(mapStateToProps)(numberSelectInput);
