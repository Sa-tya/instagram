// import Hello from './components/first';
import Card from './components/functional_compo';
// import Sudoku from './sudoku'
// import Compo from './components/classCompo';
import './App.css';
// const prop = {name: "Satya",surname:"Prakash", age: 23}
function App() {
  return ( //<Hello />
    // <Card name="Satya Prakash" age="23" />
    // <div className="App">
    // </div>
    // <Compo {...prop} />
    <Card arr={[10,11,12,13,14]} />
  );
}

export default App;
