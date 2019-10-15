import { UI, APP_STATE } from '../actions/types';
import { createMinMaxSubReducer, createReducer, createMinMaxReducer } from './utils';
import statFilter from '../../pages/components/search/stat-filters/statFilter';

const initialState = {
	loadingState: 'loaded',
	searchFormVisible: true,
	resultsIds: [],
	resultsPage: 0,
	searchResults: [
		{
			id: '86c63a05a6b132b8878f4c89cec771c4708a0515a5242eb214adddaf3d630f0c',
			listing: {
				method: 'psapi',
				indexed: '2019-07-31T15:28:08Z',
				stash: {
					name: '7',
					x: 0,
					y: 6
				},
				whisper: '@Legion_Velkhana 안녕하세요, 군단(보관함 탭 "7", 위치: 왼쪽 1, 상단 7)에 올려놓은 윈드리퍼(Windripper) 제국 활을(를) 구매하고 싶습니다',
				account: {
					name: 'bs_chosun',
					lastCharacterName: 'Legion_Velkhana',
					online: {
						league: 'Legion'
					},
					language: 'ko_KR'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 74,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'S',
						sColour: 'R'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'19-78',
								0
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'54-88',
								5
							],
							[
								'1-143',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.65%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.64',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'22% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 54 to 88 Cold Damage',
					'Adds 1 to 143 Lightning Damage',
					'13% increased Attack Speed',
					'33% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 330.33,
					pdps: 95.9,
					edps: 234.43,
					dps_aug: true,
					pdps_aug: true,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUGh5c2ljYWwgRGFtYWdlOiAxOS03OA0KRWxlbWVudGFsIERhbWFnZTogNTQtODggKGF1Z21lbnRlZCksIDEtMTQzIChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2LjY1JSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjY0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IFIgRy1CLUcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzQNCi0tLS0tLS0tDQoyMiUgaW5jcmVhc2VkIEVsZW1lbnRhbCBEYW1hZ2Ugd2l0aCBBdHRhY2sgU2tpbGxzDQotLS0tLS0tLQ0KQWRkcyA1NCB0byA4OCBDb2xkIERhbWFnZQ0KQWRkcyAxIHRvIDE0MyBMaWdodG5pbmcgRGFtYWdlDQoxMyUgaW5jcmVhc2VkIEF0dGFjayBTcGVlZA0KMzMlIGluY3JlYXNlZCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxNSUgaW5jcmVhc2VkIFF1YW50aXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gRnJvemVuIEVuZW1pZXMNCjMwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gU2hvY2tlZCBFbmVtaWVzDQotLS0tLS0tLQ0KSXQgaHVudHM7IGFzIHNpbGVudCBhcyBmYWxsaW5nIHNub3csIGFzIGRlYWRseSBhcyB0aGUgdGVtcGVzdC4NCg=='
				}
			}
		},
		{
			id: '3d9a245caab12df72e1a4a49a9db0a946cbe814ce304e79a944759532b80e09d',
			listing: {
				method: 'psapi',
				indexed: '2019-08-19T10:33:34Z',
				stash: {
					name: '화폐',
					x: 28,
					y: 0
				},
				whisper: '@Mugoandeno 안녕하세요, 군단(보관함 탭 "화폐", 위치: 왼쪽 29, 상단 1)에 올려놓은 윈드리퍼(Windripper) 제국 활을(를) 구매하고 싶습니다',
				account: {
					name: 'Mogoandeno',
					lastCharacterName: 'Mugoandeno',
					online: {
						league: 'Legion'
					},
					language: 'ko_KR'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 80,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 2,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 2,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 2,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 3,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+20%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'23-94',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'53-90',
								5
							],
							[
								'1-122',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.60%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.65',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'20% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 53 to 90 Cold Damage',
					'Adds 1 to 122 Lightning Damage',
					'14% increased Attack Speed',
					'32% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 316.53,
					pdps: 96.69,
					edps: 219.83,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyMy05NCAoYXVnbWVudGVkKQ0KRWxlbWVudGFsIERhbWFnZTogNTMtOTAgKGF1Z21lbnRlZCksIDEtMTIyIChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2LjYwJSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjY1IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEcgQiBHLUctRyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgwDQotLS0tLS0tLQ0KMjAlIGluY3JlYXNlZCBFbGVtZW50YWwgRGFtYWdlIHdpdGggQXR0YWNrIFNraWxscw0KLS0tLS0tLS0NCkFkZHMgNTMgdG8gOTAgQ29sZCBEYW1hZ2UNCkFkZHMgMSB0byAxMjIgTGlnaHRuaW5nIERhbWFnZQ0KMTQlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjMyJSBpbmNyZWFzZWQgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTUlIGluY3JlYXNlZCBRdWFudGl0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIEZyb3plbiBFbmVtaWVzDQozMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIFNob2NrZWQgRW5lbWllcw0KLS0tLS0tLS0NCkl0IGh1bnRzOyBhcyBzaWxlbnQgYXMgZmFsbGluZyBzbm93LCBhcyBkZWFkbHkgYXMgdGhlIHRlbXBlc3QuDQo='
				}
			}
		},
		{
			id: '0c82de6819fe1799f21975e1314f6bbb5df5d0353984261f06257645806b8c6b',
			listing: {
				method: 'psapi',
				indexed: '2019-08-02T11:53:30Z',
				stash: {
					name: '유닉 ',
					x: 16,
					y: 0
				},
				whisper: '@하늘달구름윤슬 안녕하세요, 군단(보관함 탭 "유닉 ", 위치: 왼쪽 17, 상단 1)에 올려놓은 윈드리퍼(Windripper) 제국 활을(를) 구매하고 싶습니다',
				account: {
					name: 'phylmh2007',
					lastCharacterName: '하늘달구름윤슬',
					online: {
						league: 'Legion'
					},
					language: 'ko_KR'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 75,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'19-78',
								0
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'50-73',
								5
							],
							[
								'1-137',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'7.00%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.64',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'23% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 50 to 73 Cold Damage',
					'Adds 1 to 137 Lightning Damage',
					'13% increased Attack Speed',
					'40% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 309.84,
					pdps: 95.9,
					edps: 213.93,
					dps_aug: true,
					pdps_aug: true,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUGh5c2ljYWwgRGFtYWdlOiAxOS03OA0KRWxlbWVudGFsIERhbWFnZTogNTAtNzMgKGF1Z21lbnRlZCksIDEtMTM3IChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA3LjAwJSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjY0IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3NQ0KLS0tLS0tLS0NCjIzJSBpbmNyZWFzZWQgRWxlbWVudGFsIERhbWFnZSB3aXRoIEF0dGFjayBTa2lsbHMNCi0tLS0tLS0tDQpBZGRzIDUwIHRvIDczIENvbGQgRGFtYWdlDQpBZGRzIDEgdG8gMTM3IExpZ2h0bmluZyBEYW1hZ2UNCjEzJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQo0MCUgaW5jcmVhc2VkIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjE1JSBpbmNyZWFzZWQgUXVhbnRpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBGcm96ZW4gRW5lbWllcw0KMzAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBTaG9ja2VkIEVuZW1pZXMNCi0tLS0tLS0tDQpJdCBodW50czsgYXMgc2lsZW50IGFzIGZhbGxpbmcgc25vdywgYXMgZGVhZGx5IGFzIHRoZSB0ZW1wZXN0Lg0K'
				}
			}
		},
		{
			id: '1adf64b722c76726a70d43fc18783ff65a63f0f20149a7440699b9d028d539bc',
			listing: {
				method: 'psapi',
				indexed: '2019-08-13T11:31:47Z',
				stash: {
					name: '12',
					x: 2,
					y: 4
				},
				whisper: '@oo__Xeli__oo Hi, I would like to buy your Windripper Imperial Bow in Legion (stash tab "12"; position: left 3, top 5)',
				account: {
					name: 'athabstract',
					lastCharacterName: 'oo__Xeli__oo',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 83,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'19-78',
								0
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'53-79',
								5
							],
							[
								'1-135',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.90%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.59',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'23% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 53 to 79 Cold Damage',
					'Adds 1 to 135 Lightning Damage',
					'10% increased Attack Speed',
					'38% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 307.02,
					pdps: 93.3,
					edps: 213.72,
					dps_aug: true,
					pdps_aug: true,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUGh5c2ljYWwgRGFtYWdlOiAxOS03OA0KRWxlbWVudGFsIERhbWFnZTogNTMtNzkgKGF1Z21lbnRlZCksIDEtMTM1IChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2LjkwJSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjU5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogODMNCi0tLS0tLS0tDQoyMyUgaW5jcmVhc2VkIEVsZW1lbnRhbCBEYW1hZ2Ugd2l0aCBBdHRhY2sgU2tpbGxzDQotLS0tLS0tLQ0KQWRkcyA1MyB0byA3OSBDb2xkIERhbWFnZQ0KQWRkcyAxIHRvIDEzNSBMaWdodG5pbmcgRGFtYWdlDQoxMCUgaW5jcmVhc2VkIEF0dGFjayBTcGVlZA0KMzglIGluY3JlYXNlZCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxNSUgaW5jcmVhc2VkIFF1YW50aXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gRnJvemVuIEVuZW1pZXMNCjMwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gU2hvY2tlZCBFbmVtaWVzDQotLS0tLS0tLQ0KSXQgaHVudHM7IGFzIHNpbGVudCBhcyBmYWxsaW5nIHNub3csIGFzIGRlYWRseSBhcyB0aGUgdGVtcGVzdC4NCg=='
				}
			}
		},
		{
			id: '7afdf671251010d966f11d3b22a88b2bb6f998680929287d67c11044d39bd4c8',
			listing: {
				method: 'psapi',
				indexed: '2019-08-10T11:52:13Z',
				stash: {
					name: 'U',
					x: 16,
					y: 0
				},
				whisper: '@MFRainbowP Hi, I would like to buy your Windripper Imperial Bow in Legion (stash tab "U"; position: left 17, top 1)',
				account: {
					name: 'Jeanhon',
					lastCharacterName: 'MFRainbowP',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 82,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'S',
						sColour: 'R'
					},
					{
						group: 2,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+20%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'23-94',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'58-88',
								5
							],
							[
								'1-132',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.65%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.61',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'24% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 58 to 88 Cold Damage',
					'Adds 1 to 132 Lightning Damage',
					'11% increased Attack Speed',
					'33% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 318.84,
					pdps: 94.2,
					edps: 224.64,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyMy05NCAoYXVnbWVudGVkKQ0KRWxlbWVudGFsIERhbWFnZTogNTgtODggKGF1Z21lbnRlZCksIDEtMTMyIChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2LjY1JSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjYxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEctQiBHLUctUiBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDgyDQotLS0tLS0tLQ0KMjQlIGluY3JlYXNlZCBFbGVtZW50YWwgRGFtYWdlIHdpdGggQXR0YWNrIFNraWxscw0KLS0tLS0tLS0NCkFkZHMgNTggdG8gODggQ29sZCBEYW1hZ2UNCkFkZHMgMSB0byAxMzIgTGlnaHRuaW5nIERhbWFnZQ0KMTElIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjMzJSBpbmNyZWFzZWQgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTUlIGluY3JlYXNlZCBRdWFudGl0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIEZyb3plbiBFbmVtaWVzDQozMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIFNob2NrZWQgRW5lbWllcw0KLS0tLS0tLS0NCkl0IGh1bnRzOyBhcyBzaWxlbnQgYXMgZmFsbGluZyBzbm93LCBhcyBkZWFkbHkgYXMgdGhlIHRlbXBlc3QuDQo='
				}
			}
		},
		{
			id: 'cbe38da486879f4ca2f76c79c807c044f4e1aec61159ea9bb3e4c2447d4d7c9d',
			listing: {
				method: 'psapi',
				indexed: '2019-08-14T20:59:14Z',
				stash: {
					name: 'y',
					x: 20,
					y: 20
				},
				whisper: '@둘리엄마 Hi, I would like to buy your Windripper Imperial Bow in Legion (stash tab "y"; position: left 21, top 21)',
				account: {
					name: 'herez',
					lastCharacterName: '둘리엄마',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 79,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+24%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'24-97',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'58-80',
								5
							],
							[
								'1-146',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.85%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.67',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'24% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 58 to 80 Cold Damage',
					'Adds 1 to 146 Lightning Damage',
					'15% increased Attack Speed',
					'37% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 338.33,
					pdps: 100.83,
					edps: 237.5,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzI0JSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyNC05NyAoYXVnbWVudGVkKQ0KRWxlbWVudGFsIERhbWFnZTogNTgtODAgKGF1Z21lbnRlZCksIDEtMTQ2IChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2Ljg1JSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjY3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEItQi1CLUIgRy1HIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDc5DQotLS0tLS0tLQ0KMjQlIGluY3JlYXNlZCBFbGVtZW50YWwgRGFtYWdlIHdpdGggQXR0YWNrIFNraWxscw0KLS0tLS0tLS0NCkFkZHMgNTggdG8gODAgQ29sZCBEYW1hZ2UNCkFkZHMgMSB0byAxNDYgTGlnaHRuaW5nIERhbWFnZQ0KMTUlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjM3JSBpbmNyZWFzZWQgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTUlIGluY3JlYXNlZCBRdWFudGl0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIEZyb3plbiBFbmVtaWVzDQozMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIFNob2NrZWQgRW5lbWllcw0KLS0tLS0tLS0NCkl0IGh1bnRzOyBhcyBzaWxlbnQgYXMgZmFsbGluZyBzbm93LCBhcyBkZWFkbHkgYXMgdGhlIHRlbXBlc3QuDQo='
				}
			}
		},
		{
			id: '1f4b3cb7b952ad0f7036f01c9de9924e0c45dc4e5382ed952bda01c14cc87cec',
			listing: {
				method: 'psapi',
				indexed: '2019-08-08T11:57:07Z',
				stash: {
					name: 'пухи',
					x: 10,
					y: 4
				},
				whisper: '@cyclonafeisabreka Здравствуйте, хочу купить у вас Рассекатель ветра Императорский лук в лиге Легион (секция "пухи"; позиция: 11 столбец, 5 ряд)',
				account: {
					name: 'Vsemhana3',
					lastCharacterName: 'cyclonafeisabreka',
					online: {
						league: 'Legion',
						status: 'afk'
					},
					language: 'ru_RU'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 70,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'19-78',
								0
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'59-81',
								5
							],
							[
								'1-147',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.50%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.61',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'21% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 59 to 81 Cold Damage',
					'Adds 1 to 147 Lightning Damage',
					'11% increased Attack Speed',
					'30% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 326.09,
					pdps: 94.2,
					edps: 231.88,
					dps_aug: true,
					pdps_aug: true,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUGh5c2ljYWwgRGFtYWdlOiAxOS03OA0KRWxlbWVudGFsIERhbWFnZTogNTktODEgKGF1Z21lbnRlZCksIDEtMTQ3IChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2LjUwJSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjYxIChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEctRy1HIEcgDQotLS0tLS0tLQ0KSXRlbSBMZXZlbDogNzANCi0tLS0tLS0tDQoyMSUgaW5jcmVhc2VkIEVsZW1lbnRhbCBEYW1hZ2Ugd2l0aCBBdHRhY2sgU2tpbGxzDQotLS0tLS0tLQ0KQWRkcyA1OSB0byA4MSBDb2xkIERhbWFnZQ0KQWRkcyAxIHRvIDE0NyBMaWdodG5pbmcgRGFtYWdlDQoxMSUgaW5jcmVhc2VkIEF0dGFjayBTcGVlZA0KMzAlIGluY3JlYXNlZCBDcml0aWNhbCBTdHJpa2UgQ2hhbmNlDQoxNSUgaW5jcmVhc2VkIFF1YW50aXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gRnJvemVuIEVuZW1pZXMNCjMwJSBpbmNyZWFzZWQgUmFyaXR5IG9mIEl0ZW1zIERyb3BwZWQgYnkgU2xhaW4gU2hvY2tlZCBFbmVtaWVzDQotLS0tLS0tLQ0KSXQgaHVudHM7IGFzIHNpbGVudCBhcyBmYWxsaW5nIHNub3csIGFzIGRlYWRseSBhcyB0aGUgdGVtcGVzdC4NCg=='
				}
			}
		},
		{
			id: '364689127e8bfd95cb293a81b960b8fac413000459265be1fda0f54318db913d',
			listing: {
				method: 'psapi',
				indexed: '2019-08-14T17:34:45Z',
				stash: {
					name: 'FRS',
					x: 10,
					y: 13
				},
				whisper: '@BPLacSlay Hi, I would like to buy your Windripper Imperial Bow in Legion (stash tab "FRS"; position: left 11, top 14)',
				account: {
					name: 'baspw',
					lastCharacterName: 'BPLacSlay',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: null
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 72,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'G',
						sColour: 'W'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+26%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'24-98',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'59-90',
								5
							],
							[
								'1-126',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.75%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.67',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'24% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 59 to 90 Cold Damage',
					'Adds 1 to 126 Lightning Damage',
					'15% increased Attack Speed',
					'35% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				incubatedItem: {
					name: 'Perandus Item',
					level: 64,
					progress: 4409,
					total: 4810
				},
				extended: {
					dps: 331.67,
					pdps: 101.67,
					edps: 230,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzI2JSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyNC05OCAoYXVnbWVudGVkKQ0KRWxlbWVudGFsIERhbWFnZTogNTktOTAgKGF1Z21lbnRlZCksIDEtMTI2IChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2Ljc1JSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjY3IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEctRy1HLUctVyBHIA0KLS0tLS0tLS0NCkl0ZW0gTGV2ZWw6IDcyDQotLS0tLS0tLQ0KMjQlIGluY3JlYXNlZCBFbGVtZW50YWwgRGFtYWdlIHdpdGggQXR0YWNrIFNraWxscw0KLS0tLS0tLS0NCkFkZHMgNTkgdG8gOTAgQ29sZCBEYW1hZ2UNCkFkZHMgMSB0byAxMjYgTGlnaHRuaW5nIERhbWFnZQ0KMTUlIGluY3JlYXNlZCBBdHRhY2sgU3BlZWQNCjM1JSBpbmNyZWFzZWQgQ3JpdGljYWwgU3RyaWtlIENoYW5jZQ0KMTUlIGluY3JlYXNlZCBRdWFudGl0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIEZyb3plbiBFbmVtaWVzDQozMCUgaW5jcmVhc2VkIFJhcml0eSBvZiBJdGVtcyBEcm9wcGVkIGJ5IFNsYWluIFNob2NrZWQgRW5lbWllcw0KLS0tLS0tLS0NCkl0IGh1bnRzOyBhcyBzaWxlbnQgYXMgZmFsbGluZyBzbm93LCBhcyBkZWFkbHkgYXMgdGhlIHRlbXBlc3QuDQo='
				}
			}
		},
		{
			id: '744b8498dfae0f419ee0ed372571ccb398b02dfd60821f2b6ed3e59245e414a3',
			listing: {
				method: 'psapi',
				indexed: '2019-08-12T23:18:27Z',
				stash: {
					name: 'L1',
					x: 3,
					y: 0
				},
				whisper: '@LGCLOM Hi, I would like to buy your Windripper Imperial Bow listed for 3 exa in Legion (stash tab "L1"; position: left 4, top 1)',
				account: {
					name: 'mdadr',
					lastCharacterName: 'LGCLOM',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: {
					type: '~price',
					amount: 3,
					currency: 'exa'
				}
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 70,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'S',
						sColour: 'R'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 1,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				note: '~price 3 exa',
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+28%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'24-100',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'50-79',
								5
							],
							[
								'1-121',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.90%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.65',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'24% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 50 to 79 Cold Damage',
					'Adds 1 to 121 Lightning Damage',
					'14% increased Attack Speed',
					'38% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 309.92,
					pdps: 102.48,
					edps: 207.44,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzI4JSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyNC0xMDAgKGF1Z21lbnRlZCkNCkVsZW1lbnRhbCBEYW1hZ2U6IDUwLTc5IChhdWdtZW50ZWQpLCAxLTEyMSAoYXVnbWVudGVkKQ0KQ3JpdGljYWwgU3RyaWtlIENoYW5jZTogNi45MCUgKGF1Z21lbnRlZCkNCkF0dGFja3MgcGVyIFNlY29uZDogMS42NSAoYXVnbWVudGVkKQ0KLS0tLS0tLS0NClJlcXVpcmVtZW50czoNCkxldmVsOiA2Ng0KRGV4OiAyMTINCi0tLS0tLS0tDQpTb2NrZXRzOiBHLUcgUi1HLUctRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3MA0KLS0tLS0tLS0NCjI0JSBpbmNyZWFzZWQgRWxlbWVudGFsIERhbWFnZSB3aXRoIEF0dGFjayBTa2lsbHMNCi0tLS0tLS0tDQpBZGRzIDUwIHRvIDc5IENvbGQgRGFtYWdlDQpBZGRzIDEgdG8gMTIxIExpZ2h0bmluZyBEYW1hZ2UNCjE0JSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQozOCUgaW5jcmVhc2VkIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjE1JSBpbmNyZWFzZWQgUXVhbnRpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBGcm96ZW4gRW5lbWllcw0KMzAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBTaG9ja2VkIEVuZW1pZXMNCi0tLS0tLS0tDQpJdCBodW50czsgYXMgc2lsZW50IGFzIGZhbGxpbmcgc25vdywgYXMgZGVhZGx5IGFzIHRoZSB0ZW1wZXN0Lg0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAzIGV4YQ0K'
				}
			}
		},
		{
			id: '08c43fc04f884af8034568d94bb4e0904d230d787f709ada7d80452b641ec428',
			listing: {
				method: 'psapi',
				indexed: '2019-08-05T16:18:41Z',
				stash: {
					name: 'LEG 7',
					x: 0,
					y: 0
				},
				whisper: '@SpompoSpin Hi, I would like to buy your Windripper Imperial Bow listed for 2 exa in Legion (stash tab "LEG 7"; position: left 1, top 1)',
				account: {
					name: 'Cr8ToR',
					lastCharacterName: 'SpompoSpin',
					online: {
						league: 'Legion'
					},
					language: 'en_US'
				},
				price: {
					type: '~price',
					amount: 2,
					currency: 'exa'
				}
			},
			item: {
				verified: true,
				w: 2,
				h: 4,
				ilvl: 72,
				icon: 'https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Eagle.png?scale=1&w=2&h=4&v=d6806afa3e458a76dd7832afd6ce8ec4',
				league: 'Legion',
				sockets: [
					{
						group: 0,
						attr: 'I',
						sColour: 'B'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					},
					{
						group: 0,
						attr: 'S',
						sColour: 'R'
					},
					{
						group: 0,
						attr: 'D',
						sColour: 'G'
					}
				],
				name: 'Windripper',
				typeLine: 'Imperial Bow',
				identified: true,
				note: '~price 2 exa',
				properties: [
					{
						name: 'Bow',
						values: [],
						displayMode: 0
					},
					{
						name: 'Quality',
						values: [
							[
								'+20%',
								1
							]
						],
						displayMode: 0,
						type: 6
					},
					{
						name: 'Physical Damage',
						values: [
							[
								'23-94',
								1
							]
						],
						displayMode: 0,
						type: 9
					},
					{
						name: 'Elemental Damage',
						values: [
							[
								'50-72',
								5
							],
							[
								'1-140',
								6
							]
						],
						displayMode: 0,
						type: 10
					},
					{
						name: 'Critical Strike Chance',
						values: [
							[
								'6.85%',
								1
							]
						],
						displayMode: 0,
						type: 12
					},
					{
						name: 'Attacks per Second',
						values: [
							[
								'1.59',
								1
							]
						],
						displayMode: 0,
						type: 13
					}
				],
				requirements: [
					{
						name: 'Level',
						values: [
							[
								'66',
								0
							]
						],
						displayMode: 0
					},
					{
						name: 'Dex',
						values: [
							[
								'212',
								0
							]
						],
						displayMode: 1
					}
				],
				implicitMods: [
					'24% increased Elemental Damage with Attack Skills'
				],
				explicitMods: [
					'Adds 50 to 72 Cold Damage',
					'Adds 1 to 140 Lightning Damage',
					'10% increased Attack Speed',
					'37% increased Critical Strike Chance',
					'15% increased Quantity of Items Dropped by Slain Frozen Enemies',
					'30% increased Rarity of Items Dropped by Slain Shocked Enemies'
				],
				flavourText: [
					'It hunts; as silent as falling snow, as deadly as the tempest.'
				],
				frameType: 3,
				category: {
					weapons: [
						'bow'
					]
				},
				extended: {
					dps: 303.03,
					pdps: 93.3,
					edps: 209.73,
					mods: {
						implicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'implicit.stat_387439868',
										min: 20,
										max: 24
									}
								]
							}
						],
						explicit: [
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_1037193709',
										min: 48,
										max: 60
									},
									{
										hash: 'explicit.stat_1037193709',
										min: 72,
										max: 90
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3336890334',
										min: 1,
										max: 1
									},
									{
										hash: 'explicit.stat_3336890334',
										min: 120,
										max: 150
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_210067635',
										min: 10,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_2375316951',
										min: 30,
										max: 40
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3304763863',
										min: 15,
										max: 15
									}
								]
							},
							{
								name: '',
								tier: '',
								magnitudes: [
									{
										hash: 'explicit.stat_3188291252',
										min: 30,
										max: 30
									}
								]
							}
						]
					},
					hashes: {
						implicit: [
							[
								'implicit.stat_387439868',
								[
									0
								]
							]
						],
						explicit: [
							[
								'explicit.stat_1037193709',
								[
									0
								]
							],
							[
								'explicit.stat_3336890334',
								[
									1
								]
							],
							[
								'explicit.stat_210067635',
								[
									2
								]
							],
							[
								'explicit.stat_2375316951',
								[
									3
								]
							],
							[
								'explicit.stat_3304763863',
								[
									4
								]
							],
							[
								'explicit.stat_3188291252',
								[
									5
								]
							]
						]
					},
					text: 'UmFyaXR5OiBVbmlxdWUNCldpbmRyaXBwZXINCkltcGVyaWFsIEJvdw0KLS0tLS0tLS0NCkJvdw0KUXVhbGl0eTogKzIwJSAoYXVnbWVudGVkKQ0KUGh5c2ljYWwgRGFtYWdlOiAyMy05NCAoYXVnbWVudGVkKQ0KRWxlbWVudGFsIERhbWFnZTogNTAtNzIgKGF1Z21lbnRlZCksIDEtMTQwIChhdWdtZW50ZWQpDQpDcml0aWNhbCBTdHJpa2UgQ2hhbmNlOiA2Ljg1JSAoYXVnbWVudGVkKQ0KQXR0YWNrcyBwZXIgU2Vjb25kOiAxLjU5IChhdWdtZW50ZWQpDQotLS0tLS0tLQ0KUmVxdWlyZW1lbnRzOg0KTGV2ZWw6IDY2DQpEZXg6IDIxMg0KLS0tLS0tLS0NClNvY2tldHM6IEItRy1HLVItRyANCi0tLS0tLS0tDQpJdGVtIExldmVsOiA3Mg0KLS0tLS0tLS0NCjI0JSBpbmNyZWFzZWQgRWxlbWVudGFsIERhbWFnZSB3aXRoIEF0dGFjayBTa2lsbHMNCi0tLS0tLS0tDQpBZGRzIDUwIHRvIDcyIENvbGQgRGFtYWdlDQpBZGRzIDEgdG8gMTQwIExpZ2h0bmluZyBEYW1hZ2UNCjEwJSBpbmNyZWFzZWQgQXR0YWNrIFNwZWVkDQozNyUgaW5jcmVhc2VkIENyaXRpY2FsIFN0cmlrZSBDaGFuY2UNCjE1JSBpbmNyZWFzZWQgUXVhbnRpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBGcm96ZW4gRW5lbWllcw0KMzAlIGluY3JlYXNlZCBSYXJpdHkgb2YgSXRlbXMgRHJvcHBlZCBieSBTbGFpbiBTaG9ja2VkIEVuZW1pZXMNCi0tLS0tLS0tDQpJdCBodW50czsgYXMgc2lsZW50IGFzIGZhbGxpbmcgc25vdywgYXMgZGVhZGx5IGFzIHRoZSB0ZW1wZXN0Lg0KLS0tLS0tLS0NCk5vdGU6IH5wcmljZSAyIGV4YQ0K'
				}
			}
		}
	],
	searchTerm: ''
};
const reducerObj = {
	[APP_STATE.SET_SEARCH_RESULTS]: (prevState, action) => ({
		searchResults: action.results
	}),
	[APP_STATE.ADD_SEARCH_RESULTS]: (prevState, action) => ({
		searchResults: [...prevState.searchResults, ...action.results]
	}),
	[APP_STATE.SET_SEARCH_STATE]: (prevState, action) => ({
		loadingState: action.state
	}),
	[APP_STATE.SET_SEARCH_TERM]: (prevState, action) => ({
		searchTerm: action.term
	}),
	[APP_STATE.SET_SEARCH_FORM_VISIBLE]: (prevState, action) => ({
		searchFormVisible: action.visible
	}),
	[APP_STATE.SET_SEARCH_RESULTS_IDS]: (prevState, action) => ({
		resultsIds: action.ids
	}),
	[APP_STATE.SET_SEARCH_RESULTS_PAGE]: (prevState, action) => ({
		resultsPage: action.page
	}),
	[APP_STATE.CLEAR_FILTERS]: (prevState, action) => ({
		searchTerm: ''
	})
};

export default createReducer(initialState, reducerObj);
