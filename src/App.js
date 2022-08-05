import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import StoriesContainer from './components/StoriesContainer';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <>
      <Navbar/>
      <div className='sm:flex sm:justify-center lg:space-x-8 '>
        <div className=''>
        <StoriesContainer/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
        </div>
        <Suggestions/>
      </div>
      
    </>
  );
}

export default App;
