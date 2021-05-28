import Bookcover from './bookcover';
import Synopsis from './synopsis';
import Review from './review';
import Purchase from './purchase_location';
import Searchbar from './searchbar';

function App() {
  const temp = [<Searchbar /> , <Synopsis /> , <Bookcover />, <Review /> , <Purchase />]
  return (temp);
}

export default App;
