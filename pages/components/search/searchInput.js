import { connect } from 'react-redux';
import { appStateSelector } from 'store/reducers/rootReducer';
import { setSearchTerm } from 'store/actions/actions';
import { Input } from 'antd';

const earchInput = React.memo(({ searchTerm, setSearchTerm, search }) => {
	const handleSearchTermChange = e => {
		setSearchTerm(e.target.value);
	};
	return (
		<Input.Search
			type="text"
			placeholder="Search items..."
			onChange={handleSearchTermChange}
			value={searchTerm}
			onSearch={search}
			size="default"
		/>
	);
});
const mapStateToProps = state => {
	return {
		searchTerm: appStateSelector(state).searchTerm
	};
};
const mapDispatchToProps = dispatch => {
	return {
		setSearchTerm: val => dispatch(setSearchTerm(val))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(earchInput);
