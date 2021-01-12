import { configureStore } from '@reduxjs/toolkit';
import { template } from './reducers';

export type State = { template: ReturnType<typeof template> };

const getStore = () => {
  return configureStore({
    reducer: {template}
  });
};

export default getStore;
