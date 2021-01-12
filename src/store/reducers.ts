import { createReducer } from '@reduxjs/toolkit';

import { getTemplate, setTemplate, TemplateData } from './actions';

const DefaultTemplate: TemplateData = {
  name: 'New template',
  value: 0,
}

export const template = createReducer<TemplateData>(DefaultTemplate, {
  [getTemplate.type]: (_, {payload: {data}}) => data,
  [setTemplate.type]: (state, {payload}) => ({...state, ...payload})
});
