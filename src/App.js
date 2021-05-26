import bookcover from './bookcover';
import synopsis from './synopsis';
import review from './review';
import purchase from './purchase_location';
import './App.css';

function App() {
  return (
    <div class="searchbar">
    </div>,
    bookcover(),
    synopsis(),
    review(),
    purchase()
  );
}

export default App;
