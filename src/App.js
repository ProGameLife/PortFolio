import logo from './logo.svg';
import imgA from './images/1.jpg'
import './App.css';

function App() {
  return (
    <div className='mainframe'>
      <div className='mainleftbar'>
          <div> 프로젝트 </div>
      </div>
      <div className='profilebar'>
        <div className='profilebox'>
          <img src={imgA} className='profile'/>
        </div>
      </div>
    </div>
  );
}

export default App;
