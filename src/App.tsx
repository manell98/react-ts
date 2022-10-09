import './App.css';
import Events from './components/events/Events';
import FirstComponent from "./components/firstComponent/FirstComponent";
import ManageData from './components/manageData/ManageData';
import ListRender from "./components/listRender/ListRender"

function App() {
  return (
    <div className="App">
      <Events />
      <FirstComponent />
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
