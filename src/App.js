
import './Styles/App.css';
import Square from './Square/square';
import SquareClass from './Square/squareClass';
import SquareFunction from './Square/squareFunction';

function App() {
  return (
    <div className="App">
      <SquareClass />
      <Square />
      {/* <SquareFunction /> */}
     
    </div>
  );
}

export default App;
