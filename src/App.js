import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import StoreListing from '/components/StoreListing'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <StoreListing/>
    </div>
  );
}

export default App;
