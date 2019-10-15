import React from 'react';
import asset from '../../assets/sockets.png';
import styled from 'styled-components';

export default function Socket(props) {
	const color = props.color;
	let position;
	switch (color) {
		case 'R':
			position = '-2.5px -107.5px';
			break;
		case 'G':
			position = '-107.5px -72.5px';
			break;
		case 'B':
			position = '-2.5px -2.5px';
			break;
		case 'W':
			position = '-37.5px -107.5px';
			break;
		default:
			break;
	}
	const Socket = styled.div`
		background: url(${asset});
		background-position: ${position};
		width: 32px;
		height: 32px;
	`;
	const Container = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		grid-area: ${props.row} / ${props.col};
	`;
	return (
		<Container>
			<Socket />
		</Container>
	);
}
