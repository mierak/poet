import React from 'react';
import ItemDescription from './ItemDescription';
import styled from 'styled-components';
import Icon from './itemIcon';

export default function Item(props) {
	const Container = styled.div`
		padding: 10px 10px 10px 10px;
		width: 100%;
		height: 100%;
		font-size: 14px;
		background-color: ${!props.darker ? 'rgba(44, 48, 51, 0.95)' : 'rgba(34, 38, 41, 0.95)'};
	`;

	const ItemContainer = styled.div`
		display: table;
		height: 100%;
		width: 100%;
		font-family: Verdana, Arial, Helvetica, sans-serif;
		font-size: 12.15px;
		color: rgb(232, 223, 226);
	`;
	const StyledItemDescription = styled(ItemDescription)`
		width: 100%;
	`;
	return (
		<Container>
			{typeof props.data === 'undefined' ? (
				'No item data in props'
			) : (
				<ItemContainer>
					<Icon item={props.data.item} />
					<StyledItemDescription data={props.data.item} listing={props.data.listing} />
				</ItemContainer>
			)}
		</Container>
	);
}
