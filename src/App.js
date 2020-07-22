import React from 'react';
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import {increment , decrement, reset} from './actions/counterActions'
import {loggIn} from './actions/isLoggedInAction'
function App() {


  const counter = useSelector(state => state.count);
  const isLogged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch(); 
 

  return (
    <div className="App">
      <div>
        <h1>Our App</h1>
        <p>Counter: {counter} </p>
        <button className="ui green button" onClick={() => dispatch(increment())}> + </button>
        <button className="ui red button" onClick={() => dispatch(decrement())}> - </button>
      </div>
      <div>
        { !isLogged ? <button style={{marginTop: "20px"}} className="ui inverted primary button" onClick={() => dispatch(loggIn())}>
          Login 
        </button>:<div>
          <p>You are Logged in</p>
          <button  class="ui inverted teal button" onClick={() => dispatch(loggIn())}>Log out </button>
          </div>}
        <button class="ui primary button" style={{marginTop: "20px"}} onClick={() =>       dispatch(reset())} >
          Reset 
        </button>
      </div>
    </div>
  );
}

export default App;
