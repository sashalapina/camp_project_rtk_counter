import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/CounterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [animationClass, setAnimationClass] = useState('')

  const handleIncrement = () => {
    setAnimationClass('animate-up')
    setTimeout(() => {
      dispatch(increment())
      setAnimationClass('')
    }, 300)
  }

  const handleDecriment = () => {
    setAnimationClass('animate-down')
    setTimeout(() => {
      dispatch(decrement())
      setAnimationClass('')
    }, 300)
  }

  return (
    <div className='counter-container'>
      {' '}
      <h1 className={animationClass}>{count}</h1>{' '}
      <div className='counter-btns-container'>
        <button onClick={handleDecriment}>Уменьшить</button>{' '}
        <button onClick={handleIncrement}>Увеличить</button>{' '}  
      </div>
    </div>
  );
};

export default Counter;
