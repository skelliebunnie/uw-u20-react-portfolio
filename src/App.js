// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
// import Button from './components/Navbar/Button'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App font-body full-h md:flex">
      <Navbar />
      <div className="relative full-w full-h bg-pewter-400 md:absolute md:w-4/5 md:right-0">
        <div className="flex-col">
          <About />
          <Gallery />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
