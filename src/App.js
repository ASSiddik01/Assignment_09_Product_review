import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashborad from './components/Dashborad/Dashborad';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home> } ></Route>
        <Route path='/home' element={<Home></Home> } ></Route>
        <Route path='/reviews' element={<Reviews></Reviews> } ></Route>
        <Route path='/dashboard' element={<Dashborad></Dashborad> } ></Route>
        <Route path='/blogs' element={<Blogs></Blogs> } ></Route>
        <Route path='/about' element={<About></About> } ></Route>
        <Route path='/*' element={<NotFound></NotFound> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
