import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { rootReducer } from 'store/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
	const store = createStore(rootReducer, composeWithDevTools());
	return store;
};

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		// we can dispatch from here too
		ctx.store.dispatch({ type: 'FOO', payload: 'foo' });

		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(makeStore)(MyApp);
