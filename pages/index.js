import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './assets/dark.less';
import { Layout, Menu, Icon, Affix } from 'antd';
import SearchFormContainer from './components/search/searchFormContainer';
import logo from './assets/logo.png';
import Link from 'next/link';

const { Header, Footer, Content, Sider } = Layout;
const StyledHeader = styled(Header)`
	background-color: transparent;
	line-height: 0px;
	padding: 0;
	height: 290px;
	display: block;
`;
const Img = styled.img`
	/* width: 100%; */
	height: 100%;
	display: block;
	margin: auto;
`;
const BG = styled(Layout)`
	background: url('https://web.poecdn.com/image/layout/legion-bg.jpg') no-repeat fixed center;
`;
const Trigger = styled(Icon)`
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
	&::hover {
		color: #1890ff;
	}
`;
const Container = styled.div`
	margin: auto;
	width: 90%;
`;

const App = React.memo(() => {
	const [collapsed, setCollapsed] = useState(true);
	const toggle = () => {
		setCollapsed(!collapsed);
	};
	return (
		<Layout>
			<BG>
				<Container>
					<Header style={{ padding: 0, minHeight: '285px', background: 'transparent' }}>
						<Img src={logo} />
					</Header>
					<Content>
						<SearchFormContainer />
					</Content>
					{/* <Footer>Footer</Footer> */}
				</Container>
			</BG>
			<Sider trigger={null} collapsible collapsed={collapsed} style={{ zIndex: 1 }}>
				<Affix offsetTop={0}>
					<Trigger className="trigger" type={!collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="save" />
							<span>Saved Searches</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="history" />
							<span>History</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="setting" />
							<span>Settings</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="setting" />
							<span>
								<Link href="/flipper">
									<a>Flip</a>
								</Link>
							</span>
						</Menu.Item>
					</Menu>
				</Affix>
			</Sider>
		</Layout>
		// <BG>
		// 	<StyledHeader>
		// 		{/* <Img src="https://via.placeholder.com/900x48.png" /> */}
		// 		<Img src={logo} />
		// 	</StyledHeader>
		// 	<Content>
		// 		<Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={true}>
		// 			<Menu.Item key="1">
		// 				<Icon type="pie-chart" />
		// 				<span>Option 1</span>
		// 			</Menu.Item>
		// 			<Menu.Item key="2">
		// 				<Icon type="desktop" />
		// 				<span>Option 2</span>
		// 			</Menu.Item>
		// 			<Menu.Item key="3">
		// 				<Icon type="inbox" />
		// 				<span>Option 3</span>
		// 			</Menu.Item>
		// 			<SubMenu
		// 				key="sub1"
		// 				title={
		// 					<span>
		// 						<Icon type="mail" />
		// 						<span>Navigation One</span>
		// 					</span>
		// 				}>
		// 				<Menu.Item key="5">Option 5</Menu.Item>
		// 				<Menu.Item key="6">Option 6</Menu.Item>
		// 				<Menu.Item key="7">Option 7</Menu.Item>
		// 				<Menu.Item key="8">Option 8</Menu.Item>
		// 			</SubMenu>
		// 			<SubMenu
		// 				key="sub2"
		// 				title={
		// 					<span>
		// 						<Icon type="appstore" />
		// 						<span>Navigation Two</span>
		// 					</span>
		// 				}>
		// 				<Menu.Item key="9">Option 9</Menu.Item>
		// 				<Menu.Item key="10">Option 10</Menu.Item>
		// 				<SubMenu key="sub3" title="Submenu">
		// 					<Menu.Item key="11">Option 11</Menu.Item>
		// 					<Menu.Item key="12">Option 12</Menu.Item>
		// 				</SubMenu>
		// 			</SubMenu>
		// 		</Menu>
		// 		<SearchFormContainer />
		// 	</Content>
		// 	<Footer>Footer</Footer>
		// </BG>
	);
});

export default App;
