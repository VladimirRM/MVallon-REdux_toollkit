import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { counterSelector,incremented,decremented } from './store/slices/counterSlices';

function App() {

  const count = useSelector(counterSelector.getCounter)
  const dispatch= useDispatch()



  return (
    <div className="App">

      {count}
      <button onClick={()=>dispatch(incremented())}>Incremented</button>
      <button onClick={()=>dispatch(decremented())}>Decremented</button>
    </div>
  );
}

export default App;
