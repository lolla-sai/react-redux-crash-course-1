import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"
import { store } from './state/store';

function App() {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  console.log(actionCreators)
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  // console.log( depositMoney(1000))
  // console.log(AC)

  return (
    <div className="App">
      <h1>{account}</h1>
      {/* <button onClick={() => store.dispatch(actionCreators.depositMoney(1000))}>Deposit 1000</button> */}
      <button onClick={() => depositMoney(1000)}>Deposit 1000</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw Money</button>
    </div>
  );
}

export default App;
