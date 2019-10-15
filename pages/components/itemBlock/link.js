import React from 'react';
import styled from 'styled-components';
import asset from '../../assets/sockets.png';

export default function Link(props) {
	const StyledLink = styled.div`
		background: url(${asset});
		background-position: ${props.orientation === 'h' ? '0px -140px' : '-140px 0px'};
		min-width: ${props.orientation === 'h' ? '38px' : '15px'};
		height: ${props.orientation === 'h' ? '15px' : '38px'};
	`;
	const Container = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: -4px;
		margin-top: -2px;
		z-index: 2;
		grid-area: ${props.row} / ${props.col};
	`;
	return (
		<Container>
			<StyledLink />
		</Container>
	);
}
