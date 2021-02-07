import useGenereateDispatch from '../../hooks/useGenereateDispatch';

const configDispatch = {
  test: 'test', // 例子
  save: 'save',
};

const useDispatchExample = () => {
  return useGenereateDispatch('example', configDispatch);
};

export default useDispatchExample;
