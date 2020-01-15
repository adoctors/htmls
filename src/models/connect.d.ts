import { AnyAction, Dispatch } from 'redux';
import { RouterTypes } from 'umi';
import { GlobalModelState } from './global';

export { GlobalModelState };

export type IObject = { [key: string]: any };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch<AnyAction>;
}
