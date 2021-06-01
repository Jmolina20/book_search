import Searchbar from './searchbar';
import Nav from './nav_bar';
import Results from './results'
import Process from './results_process'

function App() {
  return (
    <div id="text">
      <Nav />
      <Results />
      <Process />
    </div>
  );
}

export default App;


//api functions to use: book api