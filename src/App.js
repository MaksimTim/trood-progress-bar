import ProgressBar from "./components/progress-bar/progress-bar.component";

const items = [
  {name: 'Sold', color: '#BD1FBE', value: 677},
  {name: 'Got free', color: '#FC64FF', value: 23},
  {name: 'Burned', color: '#5cfd2c', value: 202},
  {name: 'Free float', color: '#cecece', value: 323},
];

function App() {
  return (
    <div className="App">
      <ProgressBar items={items}/>
    </div>
  );
}

export default App;
