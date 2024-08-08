
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';


function App() {
  return (
    <div className="App">
      
      <p>Class Component:</p>
      <ClassComponent />
     
      <br />
      <p>Function Component:</p>
      <FunctionComponent/>
    </div>
  );
}

export default App;
