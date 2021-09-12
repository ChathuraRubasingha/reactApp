import './App.css';
import './components/Heder';
import Header from './components/Heder';
import Addstudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path="/AddStudent" exact component={Addstudent} />
      </div>
    </Router>
  );
}

export default App;
