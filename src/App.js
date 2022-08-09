
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
var root = document.querySelector(':root');
function updateSize () {
  let sizing = window.innerWidth;
  if(window.innerWidth > 450){
    sizing = 450;
  } else {
    sizing = window.innerWidth
  }
  root.style.setProperty('--widthVar', sizing)
}
document.addEventListener('DOMContentLoaded', updateSize())
window.addEventListener('resize', function resize() {
  updateSize()
})
function App() {
  return (
    <div className="App">
      <header id='navBar'>

        <Link to='/'><div>Home</div></Link>
        <div>Menu</div>
        <div>Contact</div>
        <a href='https://www.order.store/store/addellas-on-oak/_deV1dJoTAqA3HbtZiG_Dg' target='_blank'><div id='delivery'>Delivery</div></a>
      </header>
      <div id='banner'><a href='https://www.facebook.com' target='_blank'><div id='social1'></div></a><a href='https://www.instagram.com' target='_blank'><div id='social2'></div></a></div>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
      
    </div>
  );
}

function Home() {
  return (
  
      <div id='hoursCont'>
      <h1 id='hours'>hours</h1>
      <div id='schedule'>
        <div id='daysCont'>
          <h2 className='days'>Monday</h2><h2 className='times'>4pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Tuesday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Wednesday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Thursday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Friday</h2><h2 className='times'>12pm - 1am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Saturday</h2><h2 className='times'>12pm - 1am</h2><h2></h2>
          <h2 className='days'>Sunday</h2><h2 className='times'>12pm - 10pm</h2><h2></h2>
        </div>
        <div id='happyHour'>
          *Happy Hour:  $4 drafts, 5$ apps, 5$ wine, 3$ bottles/cans/well drinks
        </div>
        {/*<div id='timesCont'>
        <h2 className='times'>4pm - 12am</h2>
          <h2 className='times'>12pm - 12am</h2>
          <h2 className='times'>12pm - 12am</h2>
          <h2 className='times'>12pm - 12am</h2>
          <h2 className='times'>12pm - 1am</h2>
          <h2 className='times'>12pm - 1am</h2>
          <h2 className='times'>12pm - 10pm</h2>
        </div>
  */}
      </div>
      </div>
   
  )
}
export default App;
