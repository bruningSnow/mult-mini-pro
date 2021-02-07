import { useDispatch } from 'react-redux';
import type { Dispatch } from 'react-redux';

interface IPre {
  [key: string]: <T, R extends any>(params: T) => Promise<R>;
}

const useGenereateDispatch = (
  namespace: string,
  apis: { [key: string]: string },
) => {
  const dispatch: Dispatch = useDispatch();

  return Object.keys(apis).reduce((pre: IPre, key) => {
    pre[key] = <T, R extends any>(params: T): Promise<R> =>
      dispatch({ type: `${namespace}/${apis[key]}`, payload: params });
    return pre;
  }, {});
};

export default useGenereateDispatch;
