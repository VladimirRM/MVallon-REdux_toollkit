import { useSelector,useDispatch } from 'react-redux';
import './App.css';

function App() {

  const count = useSelector()
  const dispatch = useDispatch()
  return (
    <div className="App">
   <h1></h1>
   <button onClick={()=>{}}>Increment</button>
   <button onClick={()=>{}}>Decrement</button>
    </div>
  );
}

export default App;
