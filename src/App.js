import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ListenPage from './components/listen-page';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
// import PageContent from './components/Page-Content';

const routing=(<Router>
    <Routes>
      <Route path='/' exact element={<Header />}/>
      <Route path='/about' element={<Footer />} />
      <Route path='/home' element={<ListenPage/>} />
      {/* <Route path='/podcast' elemen={<PageContent />} /> */}
    </Routes>
</Router>)
function App() {
  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
