import React from 'react';
import Socket from './socket';
import Link from './link';
import styled from 'styled-components';

export default function Sockets(props) {
	const sockets = props.sockets;
	const width = props.w;
	let templateRows;
	let templateColumns;
	(function calcRows() {
		if (sockets.length <= 2) {
			templateRows = '32px';
		} else if (sockets.length > 1 && sockets.length <= 4) {
			templateRows = '32px 14px 32px';
		} else {
			templateRows = '32px 14px 32px 14px 32px';
		}
	})();
	(function calcCols() {
		if (sockets.length === 1) {
			templateColumns = '32px';
		} else {
			templateColumns = '32px 14px 32px';
		}
	})();
	const Container = styled.div`
		display: grid;
		justify-content: center;
		grid-template-rows: ${templateRows};
		grid-template-columns: ${templateColumns};
		width: 90px;
	`;

	let components = [];
	let prevGroup = -1;
	for (let i = 0; i < sockets.length; i++) {
		const row = Math.floor(i / 2);
		let col = i % 2;

		const socket = sockets[i];

		let gridCol;
		if (row === 1) {
			if (col === 0) gridCol = 3;
			else if (col === 1) gridCol = 1;
		} else {
			if (col === 0) gridCol = 1;
			else if (col === 1) gridCol = 3;
		}

		let gridRow;
		if (row === 0) gridRow = 1;
		else if (row === 1) gridRow = 3;
		else if (row === 2) gridRow = 5;

		if (col === 1) {
			if (prevGroup == socket.group) {
				components.push(<Link orientation="h" col={2} row={gridRow} />);
			} else {
				components.push(<div />);
			}
		}
		if (row === 1 && col == 0) {
			components.push(<div />);
			components.push(<div />);
			if (prevGroup === socket.group) {
				components.push(<Link orientation="v" col={3} row={2} />);
			} else {
				components.push(<div />);
			}
		}
		if (row === 2 && col == 0) {
			if (prevGroup === socket.group) {
				components.push(<Link orientation="v" />);
			} else {
				components.push(<div />);
			}
			components.push(<div />);
			components.push(<div />);
		}
		components.push(<Socket color={socket.sColour} key={i + socket.sColour} row={gridRow} col={gridCol} />);
		prevGroup = socket.group;
	}
	return <Container>{components}</Container>;
}
