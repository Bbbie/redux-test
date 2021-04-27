import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './app/store'

function App() {

  // lokal in komponente
  // const [hallo, setHallo] = useState(["a"]);

  const hallo = useSelector(state => state.items);
  const dispatch = useDispatch();

  const currentCount = useSelector(state => state.counter);

  useEffect(() => {
    dispatch(addItem('c'));
  }, []);

  useEffect(() => {
    console.log(hallo);
  }, [hallo]);

  const increaseCounter = () => {
    dispatch({type: 'count up', counter: currentCount + 1})
  }

  return (
    <div>
      <button onClick={increaseCounter}>Click me: {currentCount}</button>
    </div>
  )
}

export default App;
