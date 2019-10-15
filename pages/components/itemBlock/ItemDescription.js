import React, { useState } from 'react';
import styled from 'styled-components';
import { array } from 'prop-types';
import { Tag, Button, notification } from 'antd';

export default function itemDescription(props) {
	const [copied, setCopied] = useState(false);
	const color = () => {
		let c;
		if (typeof props.data === 'undefined') return;
		if (props.data.frameType === 1) {
			c = '#0000FF';
		} else if (props.data.frameType === 2) {
			c = '#FFFF77';
		} else if (props.data.frameType === 3) {
			c = '#9d6020';
		}
		return c;
	};
	const descriptionColors = {
		0: { color: '#FFFFFF', name: 'default' },
		1: { color: '#88F', name: 'augmented' },
		4: { color: '#960000', name: 'fire' },
		5: { color: '#366492', name: 'cold' },
		6: { color: 'gold', name: 'lightning' },
		7: { color: '#d02090', name: 'chaos' }
	};
	const Title = styled.div`
		color: ${color()};
	`;
	const ItemProps = styled.div`
		color: #7f7f7f;
	`;
	const Mods = styled.div`
		color: #e8dfe2;
	`;
	const CorruptedDiv = styled.div`
		color: #ff0000;
	`;
	const TradeText = styled.div`
		color: #999e73;
	`;
	const Container = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	`;
	const Listing = styled.div`
		margin-top: auto;
	`;
	const Separator = styled.hr`
		border-color: black;
		border-style: dotted;
		margin-top: 1px;
		margin-bottom: 1px;
		width: 100%;
	`;

	let i = 0;
	let properties = [];
	let requirements = [];
	let implicitMods = [];
	let explicitMods = [];
	if (typeof props.data !== 'undefined') {
		if (props.data.hasOwnProperty('properties'))
			props.data.properties.forEach(prop => {
				let color;
				if (typeof prop.values[0] !== 'undefined' && typeof prop.values[0][1] !== 'undefined')
					color = descriptionColors[prop.values[0][1]].color;
				else color = 'white';

				let tmp = [];
				if (prop.values.length > 1) {
					//check for elemental damage values in description
					prop.values.forEach(subProp => {
						//iterate the elemental damage array - fire/cold/lightning
						color = descriptionColors[subProp[1]].color;
						tmp.push(<span style={{ color: color }}>{subProp[0]} </span>);
					});
				} else {
					//runs for every other description property
					let val;
					if (Array.isArray(prop.values) && array.length && typeof prop.values[0] !== 'undefined') {
						val = prop.values[0][0];
					} else {
						val = prop.values[0];
					}
					tmp = <span style={{ color: color }}>{val}</span>;
				}

				properties.push(
					<div key={i++}>
						{prop.name}
						{prop.values.length > 0 ? `: ` : ``}
						{tmp}
					</div>
				);
			});
		if (props.data.hasOwnProperty('requirements'))
			props.data.requirements.forEach(req => {
				requirements.push(
					<span>
						{req.name}: <span style={{ color: descriptionColors[0].color }}>{req.values[0][0]} </span>
					</span>
				);
			});

		if (props.data.hasOwnProperty('implicitMods'))
			props.data.implicitMods.forEach(mod => {
				implicitMods.push(<div key={i++}>{mod}</div>);
			});

		if (props.data.hasOwnProperty('explicitMods'))
			props.data.explicitMods.forEach(mod => {
				explicitMods.push(<div key={i++}>{mod}</div>);
			});
	}

	const copyMsgToClipboard = () => {
		navigator.clipboard.writeText(props.listing.whisper).then(
			() => {
				setCopied(true);
				notification.success({
					message: 'Message copied to clipboard!',
					description: 'You can now paste it in the in-game chat.',
					placement: 'bottomLeft',
					duration: 3.5
				});
			},
			() => {
				notification.error({
					message: 'Success',
					description: 'Successfuly copied to clipboard'
				});
			}
		);
	};
	if (typeof props.data === 'undefined') {
		return <div>'No Item data in props!'</div>;
	} else {
		let priceText;
		let listing = '';
		if (props.listing.price !== null) {
			switch (props.listing.price.type) {
				case '~price':
					priceText = 'exact price';
				default:
					priceText = 'b/o';
			}
			listing = `${priceText}: ${props.listing.price.amount} ${props.listing.price.currency}   `;
		}
		return (
			<Container>
				<Title>
					{props.data.frameType === 3 || props.data.frameType === 2
						? `${props.data.name} ${props.data.typeLine}`
						: props.data.typeLine}
				</Title>
				<ItemProps>{properties}</ItemProps>
				<Separator />
				<ItemProps>
					<div>
						Item Level: <span style={{ color: descriptionColors[0].color }}>{props.data.ilvl}</span>
					</div>
					Requires {requirements}
				</ItemProps>
				<Separator />
				<Mods>{implicitMods}</Mods>
				<Separator />
				<Mods>{explicitMods}</Mods>
				<div>{props.data.corrupted ? <CorruptedDiv>Corrupted</CorruptedDiv> : ''}</div>
				<Separator />
				<TradeText>{props.data.note}</TradeText>
				<Listing>
					{listing}
					{props.listing.account.online === null ? <Tag color="red">Offline</Tag> : <Tag color="green">Online</Tag>}
					IGN: {props.listing.account.lastCharacterName}
					<span> </span>
					<Button size="small" onClick={copyMsgToClipboard}>
						{copied ? 'Copied!' : 'Whisper'}
					</Button>
				</Listing>
			</Container>
		);
	}
}
