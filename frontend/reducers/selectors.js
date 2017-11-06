import React from 'react';
import { values } from 'lodash';

export const selectPrices = (state) => values(state.dynamic_prices);
