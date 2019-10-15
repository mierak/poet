import { SOCKET_FILTERS } from 'store/actions/types';
import { Input, Col, Button } from 'antd';
import { socketFiltersSelector } from 'store/reducers/rootReducer';
import NumberSelectInput from './numberSelectInput';
import { connect } from 'react-redux';

const SocketFilter = React.memo(({ setR, setG, setB, setW, setMin, setMax, context, contextTitle, r, g, b, w }) => {
	const handleR = e => setR(parseInt(e.target.value) || null);
	const handleG = e => setG(parseInt(e.target.value) || null);
	const handleB = e => setB(parseInt(e.target.value) || null);
	const handleW = e => setW(parseInt(e.target.value) || null);
	return (
		<Col span={24}>
			<Col lg={3} sm={4} xs={4}>
				<Input placeholder="R" onChange={handleR} value={r} />
			</Col>
			<Col lg={3} sm={4} xs={4}>
				<Input placeholder="G" onChange={handleG} value={g} />
			</Col>
			<Col lg={3} sm={4} xs={4}>
				<Input placeholder="B" onChange={handleB} value={b} />
			</Col>
			<Col lg={3} sm={4} xs={4}>
				<Input placeholder="W" onChange={handleW} value={w} />
			</Col>
			<Col lg={12} sm={8} xs={8}>
				<NumberSelectInput setMin={setMin} setMax={setMax} context={context} contextTitle={contextTitle} />
			</Col>
		</Col>
	);
});

const mapStateToProps = (state, ownProps) => {
	let socketFilters = socketFiltersSelector(state);
	if (ownProps.context === 'sockets') {
		socketFilters = socketFilters.sockets;
	} else {
		socketFilters = socketFilters.links;
	}
	return {
		r: socketFilters.r,
		g: socketFilters.g,
		b: socketFilters.b,
		w: socketFilters.w
	};
};
export default connect(mapStateToProps)(SocketFilter);
