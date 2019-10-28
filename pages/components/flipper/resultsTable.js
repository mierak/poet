import { Table } from 'antd';
import { connect } from 'react-redux';
import { bulkStateSelector } from 'store/reducers/rootReducer';

const ResultsTable = ({ want, have, results, highlight }) => {
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
			'https://web.poecdn.com/image/Art/2DItems/Maps/MarakethFragment.png?v=0b1e038b90b3f899ce3dca06c89cf028',
		'timeless-templar-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/TemplarFragment.png?v=b6527abf80550dc661af223ca1cc4767',
		'timeless-karui-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/KaruiFragment.png?v=f7bfe0a32b0c064acb8255b457c40535',
		'timeless-eternal-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/EternalEmpireFragment.png?v=30c2c9438da81c410cee1f8163557706',
		'timeless-vaal-emblem':
			'https://web.poecdn.com/image/Art/2DItems/Maps/VaalFragment.png?v=9c8f41e2642fbe1cac2e5ed801330f0f',
		'timeless-maraketh-splinter':
			'https://web.poecdn.com/image/Art/2DItems/Maps/MarakethShard.png?v=e0b5a2a9dd104c9884025da7191cdb9e',
		'timeless-templar-splinter':
			'https://web.poecdn.com/image/Art/2DItems/Maps/TemplarShard.png?v=82d3d517ed1caa15a3dfad5f3a0a8fff',
		'timeless-karui-splinter':
			'https://web.poecdn.com/image/Art/2DItems/Maps/KaruiShard.png?v=e3ab494b7e170292856cd88874110b61',
		'timeless-eternal-empire-splinter':
			'https://web.poecdn.com/image/Art/2DItems/Maps/EternalEmpireShard.png?v=c39753adba56300b8c08f3066a79429c',
		'timeless-vaal-splinter':
			'https://web.poecdn.com/image/Art/2DItems/Maps/VaalShard.png?v=0a4bddb57e7c348f72bfffd3434f0e6b',
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
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'rusted-sulphite-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/LesserScarabSulphite.png?v=c07b341f6d9d64654359a0abdb758c3a',
		'polished-sulphite-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/NormalScarabSulphite.png?v=fd2b17d31cccffb35bfc07a0dde68088',
		'gilded-sulphite-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/GreaterScarabSulphite.png?v=d39f02dfa31d8bb942c408e5cb15b7ef',
		'rusted-bestiary-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/LesserScarabBeasts.png?v=ddb914ed1c2b799263e2e12f73d8f8fc',
		'polished-bestiary-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/NormalScarabBeasts.png?v=3804844af213d8f5dad123f07f33d518',
		'gilded-bestiary-scarab':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Scarabs/GreaterScarabBeasts.png?v=fa5f1ff1448d73ec81b0f1309da91129',
		'silver-oil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Oils/SilverOil.png?v=37b466d27aad3d06b0fd97ee42322bcc',
		'frigid-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/AmberFang.png?v=5ad7bc2cc225c2cc27774cf81f390506',
		'metallic-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/MetallicFossil.png?v=cd53ee25a1625393929dec5f114b7f03',
		'jagged-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/JaggedFossil.png?v=2939dc778481bf687e678e22885cb847',
		'aberrant-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/AbberantFossil.png?v=517fe1f29702c7f6f9b11d10206ab0e2',
		'dense-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/DenseFossil.png?v=bd717b705466892a7208dd62049f1ade',
		'corroded-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/CorrodedFossil.png?v=13ecceed03b1b56183516130c7d8d587',
		'prismatic-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/PrismaticFossil.png?v=8889a1bf7ae2cd4665bb5d42c3707ab8',
		'shuddering-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/ShudderingFossil.png?v=1b98a7816e9f531d43661590b54da6f1',
		'perfect-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/PerfectFossil.png?v=cbce2c743aad0314753383fa1cf220e2',
		'encrusted-fossil':
			'https://web.poecdn.com/image/Art/2DItems/Currency/Delve/EncrustedFossil.png?v=41de1749ab9c3acdd85cf3e16b67dfaa',
		'the-damned':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'alluring-bounty':
			'https://web.poecdn.com/image/Art/2DItems/Divination/InventoryIcon.png?v=a8ae131b97fad3c64de0e6d9f250d743',
		'the-nurse':
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
					Get:
					<br />
					<img src={images[want]} title={want} width="32" height="32" alt={have}></img>
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
					<br />
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
			rowClassName={record => (record.acc === highlight ? 'ownAcc' : '')}></Table>
	);
};

const mapStateToProps = state => {
	const selector = bulkStateSelector(state);
	return {
		highlight: selector.nicknameHighlight
	};
};
export default connect(mapStateToProps)(ResultsTable);
