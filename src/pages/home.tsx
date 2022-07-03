import { useState } from 'react';

import { Button } from '../components/button';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { useAppSelector } from '../hooks/use-app-selector';
import { decrement, increment, incrementByAmount, reset } from '../redux/slicers/counter-slicer';

export const Home: React.FC = () => {
  const [incrementAmount, setIncrementAmount] = useState('10');
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen">
      <span className="text-6xl font-bold text-slate-900" data-testid="counter">
        {counter}
      </span>
      <div className="flex gap-4 mt-4">
        <Button data-testid="counter-increment" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button data-testid="counter-decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button data-testid="counter-reset" onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </div>
      <div className="flex gap-4 mt-4">
        <input
          className="px-4 py-2 bg-slate-200 rounded-md"
          type="number"
          value={incrementAmount}
          data-testid="counter-increment-input"
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
        <Button
          data-testid="counter-increment-size"
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Increment
        </Button>
      </div>
    </div>
  );
};
