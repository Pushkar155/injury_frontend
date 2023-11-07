import './App.css';
import Login from './component/Login/Login';
import Edit from './component/edit/Edit';
import Home from './component/Home/Home';
import Register from './component/Home/Register';
import {Route,Routes} from "react-router-dom";
import Forget from './component/Home/Forget';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <div className="hello">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/forget" element={<Forget/>}/>
          <Route exact path="/edit" element={<Edit/>}/>
        </Routes>
          {/* <Login/> */}
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
