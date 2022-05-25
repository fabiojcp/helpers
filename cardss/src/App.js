
import './App.css';
import Dev from './components/developers'

const devs = [
  {
    name: 'jonny',
    age: 34,
    country: 'United States of America'
  },

  {
    name: 'maria',
    age: 47,
    country: 'Chile'
  },

  {
    name: 'Ulisses',
    age: 40,
    country: 'Brazil'
  }
]

function App() {
  return (
    <div className="App">
      {devs.map((dev) => {
      return  <Dev
            name = {dev.name}
            age = {dev.age}
            country = {dev.country}
        />
      })}
    </div>
  );
}

export default App;
