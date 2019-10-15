import { Table } from 'antd';

const ResultsTable = ({ want, have, results }) => {
	const images = {
		'ancient-orb':
			'https://web.poecdn.com/image/Art/2DItems/Currency/AncientOrb.png?v=3edb14b53b9b05e176124814aba86f94',
		chaos:
			'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?v=c60aa876dd6bab31174df91b1da1b4f9',
		exa:
			'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png?v=1745ebafbd533b6f91bccf588ab5efc5',
		'mirror-shard':
			'https://web.poecdn.com/image/Art/2DItems/Currency/MirrorShard.png?v=b5b677eece4ae7e8450452e3944f121d',
		'stacked-deck': 'https://web.poecdn.com/image/Art/2DItems/Divination/Deck.png?v=0e5e6da39f79fc57f3d38d463126617a',
		'chayulas-breachstone':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Breach/BreachFragmentsChaos.png?v=fabeba4157753d08666137bb482ce18c',
		'chayulas-pure-breachstone':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Breach/BreachFragmentsChaos.png?v=fabeba4157753d08666137bb482ce18c',
		'timeless-maraketh-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/EternalEmpireFragment.png?v=30c2c9438da81c410cee1f8163557706',
		'timeless-templar-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/TemplarFragment.png?v=b6527abf80550dc661af223ca1cc4767',
		'timeless-karui-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/KaruiFragment.png?v=f7bfe0a32b0c064acb8255b457c40535',
		'timeless-eternal-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/EternalEmpireFragment.png?v=30c2c9438da81c410cee1f8163557706',
		'timeless-vaal-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/VaalFragment.png?v=9c8f41e2642fbe1cac2e5ed801330f0f',
		'golden-oil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Oils/GoldenOil.png?v=7640c249d21dbddf0425727a2ff9b4cf',
		'pristine-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/PristineFossil.png?v=d8d8938da9c6edf3b0c9aa9056908805',
		'serrated-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/SerratedFossil.png?v=603bfb143ece949c58671b2b87080cf2',
		'bound-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/ResonatingFossil.png?v=17265c7ab9b83cc6e91ba22db4dabde3',
		'enchanted-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/EnchantedFossil.png?v=f0c439ecbd6c8ef6ead41fe4907d59d2',
		'faceted-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/FacetedFossil.png?v=319ed2d59667285880877153e560508c',
		'glyphic-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/GlyphicFossil.png?v=046124f39dafe06454cd306c71d6ddb7',
		'sanctified-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/GildedFossil.png?v=6314bd89971f353179f630def8cf3a17',
		'house-of-mirrors':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'the-fiend':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'the-immortal':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'the-doctor':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'beauty-through-death':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'the-demon':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743'
	};
	const dataSource = results.map(result => {
		let amount = result.listing.price.amount;
		let note = result.item.note;
		let before = '';
		let after = '';
		if (typeof note !== 'undefined') {
			note = note.substring(note.indexOf(' ') + 1);
			if (note.includes('/')) {
				const split = note.split('/');
				// for (let i = split[0].length - 1; i > 0; i--) {
				// 	if (split[0].charAt(i) === ' ') {
				// 		break;
				// 	}
				// 	before += split[0].charAt(i);
				// }
				before = split[0];
				// before = before
				// 	.split('')
				// 	.reverse()
				// 	.join('');
				for (let i = 0; i < split[1].length; i++) {
					if (split[1].charAt(i) === ' ') {
						break;
					}
					after += split[1].charAt(i);
				}
			}
		}
		if (before === '') before = amount;
		if (after === '') after = '1';
		before = toFixed(before, 1);
		after = toFixed(after, 1);
		let lessThanOne = false;
		if (amount % 1 !== 0) {
			// amount = toFixed(1 / amount, 2);
		}
		if (amount < 1) {
			lessThanOne = true;
		}
		let have;
		let want;
		// if (lessThanOne) {
		// 	want = 1 + ` (${before})`;
		// 	have = `(${after}) ` + amount;
		// } else {
		// 	have = amount + ` (${before})`;
		// 	want = `(${after}) ` + 1;
		// }
		// have = amount + ` (${before})`;
		if (lessThanOne) {
			// amount = toFixed(1 / amount, 2);
			have = (
				<div style={{ position: 'relative' }}>
					<div style={{ textAlign: 'center' }}>{before}</div>
					<div style={{ fontSize: '8px', position: 'absolute', bottom: -7, right: 3 }}>(1)</div>
				</div>
			);
			want = (
				<div style={{ position: 'relative' }}>
					<div style={{ fontSize: '8px', position: 'absolute', bottom: -7, left: 3 }}>({toFixed(1 / amount, 1)})</div>
					<div style={{ textAlign: 'center' }}>{after}</div>
				</div>
			);
		} else {
			have = (
				<div style={{ position: 'relative' }}>
					<div style={{ textAlign: 'center' }}>{before}</div>
					<span style={{ fontSize: '8px', position: 'absolute', bottom: -7, right: 3 }}>({toFixed(amount, 1)})</span>
				</div>
			);
			want = (
				<div style={{ position: 'relative' }}>
					<div style={{ fontSize: '8px', position: 'absolute', bottom: -7, left: 3 }}>(1)</div>
					<div style={{ textAlign: 'center' }}>{after}</div>
				</div>
			);
		}
		return {
			key: result.id,
			have: have,
			want: want,
			note: note,
			before: before,
			after: after,
			acc: result.listing.account.name
		};
	});
	const columns = [
		{
			title: (
				<div>
					Get:<img src={images[want]} title={want} width="32" height="32" alt={have}></img>
				</div>
			),
			dataIndex: 'want',
			key: 'want',
			className: 'col-right',
			textWrap: 'word-break',
			width: 100,
			align: 'center'
		},
		{
			title: (
				<div>
					Pay:
					<img src={images[have]} title={have} width="32" height="32" alt={want} style={{ margin: 'auto' }}></img>
				</div>
			),
			dataIndex: 'have',
			key: 'have',
			className: 'col-left',
			textWrap: 'word-break',
			width: 100,
			align: 'center'
		}
	];

	function toFixed(num, fixed) {
		var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
		let n = parseFloat(num, 10);
		if (n.toString().match(re) !== null) {
			return n.toString().match(re)[0];
		} else {
			return ERROR;
		}
	}

	return (
		<Table
			pagination={false}
			size="small"
			dataSource={dataSource}
			columns={columns}
			bordered
			rowClassName={record => (record.acc === 'MieraK' || record.acc === 'EagleFist' ? 'ownAcc' : '')}></Table>
	);
};

export default ResultsTable;
