import { createStore } from 'redux';
import { rootReducer } from 'store/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';

const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
whyDidYouRender(React);

export const store = createStore(rootReducer, composeWithDevTools());
