import './App.css';
import Appcomponent from './Components/Appcomponent';
import Yellow from './Components/Yellow';
import Blue from './Components/Blue';
import Red from './Components/Red';

function App() {
  return (
    
  <div className='App'>
    <Appcomponent>
      <Yellow/>
      <Yellow/>
    </Appcomponent>
    <Appcomponent>
      <Red/>
    </Appcomponent>
    <Appcomponent>
      <Blue/>
      <Blue/>
      <Blue/>
    </Appcomponent>
  </div>
  
  );
}

export default App;
