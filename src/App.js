import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Mainpage from './pages/mainpage';
import Contentpage from './pages/contentpage'
import Footer from './pages/footer'
import './App.css';
import "bulma/css/bulma.css"

 
function App() {
  return (
    
    <div>
      <Navbar/>
      <Mainpage/>
      <Contentpage/>
      <Footer/>
      <h1>hello</h1>
    </div>
  )
}

export default App;
