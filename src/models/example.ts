import { Reducer, Effect } from 'react-redux';

export interface IState {
  example: string;
}

export interface IReducers {
  save: Reducer;
}

export interface IEffects {
  test: Effect;
}

export interface IExampleModel {
  namespace: string;
  state: IState;
  reducers: IReducers;
  effects: IEffects;
}

const ExampleModel: IExampleModel = {
  namespace: 'example',
  state: {
    example: 'example',
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *test({ payload }, {}) {
      console.log('payload =>', payload);
    },
  },
};

export default ExampleModel;
