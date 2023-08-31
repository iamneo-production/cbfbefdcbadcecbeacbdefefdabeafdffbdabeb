import { filterOdd, filterEven, generateRandomList } from './functions/filterOddEven';
import './App.css';
function App() {
  const randomList = generateRandomList();
  const oddList = filterOdd(...randomList);
  const evenList = filterEven(...randomList);

  return (
    <div>
      
      <h1>Random List: {randomList.join(', ')}</h1>
      <h2 >Odd List: {oddList.join(', ')}</h2>
      <h2 >Even List: {evenList.join(', ')}</h2>
    </div>
  );
}
export default App;