import './App.css';
import Events from './components/events/Events';
import FirstComponent from "./components/firstComponent/FirstComponent";
import ManageData from './components/manageData/ManageData';

function App() {
  return (
    <div className="App">
      <Events />
      <FirstComponent />
      <ManageData />
    </div>
  );
}

export default App;
