import React, { useState } from 'react';
import styled from 'styled-components';
import Sockets from './sockets';

export default function ItemIcon(props) {
	const Icon = styled.div`
		width: 25%;
		display: table-cell;
		vertical-align: middle;
	`;
	const SocketContainer = styled.div`
		display: grid;
		height: 100%;
	`;
	const Overlay = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		grid-area: 1 / 1;
	`;
	return (
		<Icon>
			{typeof props.item === 'undefined' ? (
				'No item data in props!'
			) : (
				<SocketContainer>
					<Overlay>
						<img
							src={props.item.icon}
							alt="Icon"
							width={parseInt(props.item.w) * 47}
							height={parseInt(props.item.h) * 47}
						/>
					</Overlay>
					{props.item.hasOwnProperty('sockets') ? (
						<Overlay>
							<Sockets sockets={props.item.sockets} w={props.item.w} h={props.item.h} />
						</Overlay>
					) : (
						''
					)}
				</SocketContainer>
			)}
		</Icon>
	);
}
