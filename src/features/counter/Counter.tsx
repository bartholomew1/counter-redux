import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { counterActions } from './counterSlice';
import styles from './Counter.module.css';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };


  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

 

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
     <div className={styles.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};
export default Counter