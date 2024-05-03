
import './App.css';
import Lottery from './Lottery';
function App() {
  return (
    <div className="App">
      <Lottery numberOfBalls = {6} maxValue = {15} title ="Bingo" />
      <Lottery numberOfBalls = {6} maxValue = {15} title ="Drive Through" />
      <Lottery numberOfBalls = {3} maxValue = {5} />
    </div>
  );
}

export default App;
