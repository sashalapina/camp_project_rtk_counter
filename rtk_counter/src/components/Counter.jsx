import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      {' '}
      <h1>{count}</h1>{' '}
      <button onClick={() => dispatch(increment())}>Увеличить</button>{' '}
      <button onClick={() => dispatch(decrement())}>Уменьшить</button>{' '}
    </div>
  );
};

export default Counter;
