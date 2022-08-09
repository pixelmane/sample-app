
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
        
        <Link to='/menu'><div>Menu</div></Link>
        <div>Contact</div>
        <a href='https://www.order.store/store/addellas-on-oak/_deV1dJoTAqA3HbtZiG_Dg' target='_blank' rel='noreferrer'><div id='delivery'>Delivery</div></a>
      </header>
      <div id='banner'><a href='https://www.facebook.com' target='_blank' rel='noreferrer'><div id='social1'></div></a><a href='https://www.instagram.com' target='_blank' rel='noreferrer'><div id='social2'></div></a></div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/menu/*' element ={<Menu />} />
      </Routes>
      
    </div>
  );
}

function Menu() {
  function handleClick(e){
    switch(e.target.id){
      case 'plantBasedIcon':
        document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(246, 137, 137)'
        document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
        document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
        document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
       break;
        case 'menuIcon':
          document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('menuIcon').style.backgroundColor = 'rgb(246, 137, 137)'
          document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          break;
          case 'drinksIcon':
            document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            document.getElementById('drinksIcon').style.backgroundColor = 'rgb(246, 137, 137)'
            document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
            break;
            case 'brunchIcon':
              document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('menuIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
              document.getElementById('brunchIcon').style.backgroundColor = 'rgb(246, 137, 137)'
              break;
        
      }
      }
    
  
  return (
    <div>
      <div id='menuCont'>
        <h1 className='hours'>Menus</h1>
      </div>
    <div id='menuNavs'>
      
      <Link to='menu/plantbased'><div onClick={handleClick} id='plantBasedIcon' className='menuType'>Plant-Based</div></Link>
      <Link to='menu/menu'><div onClick={handleClick} id='menuIcon' className='menuType'>Menu</div></Link>
      <Link to='menu/drinks'><div onClick={handleClick} id='drinksIcon' className='menuType'>Drinks</div></Link>
      <Link to='menu/brunch'><div onClick={handleClick} id='brunchIcon' className='menuType'>Brunch</div></Link>
      </div>
      <div id='menuPicCont'>
      <Routes>
        <Route path='menu/plantbased' element={<PlantBased />} />
        <Route path='menu/menu' element={<FullMenu />} />
        <Route path='menu/drinks' element={<Drinks />} />
        <Route path='menu/brunch' element={<Brunch />} />
      </Routes>
      </div>
    </div>
    
  )
}
function FullMenu() {
  return (
   
      <div className='menuPic'></div>
    
  )
}function Drinks() {
  return (
   
      <div className='drinksPic'></div>
    
  )
}function Brunch() {
  return (
   
      <div className='brunchPic'></div>
    
  )
}
function PlantBased() {
  return (
   
      <div className='plantPic'></div>
    
  )
}
function Home() {
  return (
  
      <div className='hoursCont'>
      <h1 className='hours'>hours</h1>
      <div id='schedule'>
        <div id='daysCont'>
          <h2 className='days'>Monday</h2><h2 className='times'>4pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Tuesday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Wednesday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Thursday</h2><h2 className='times'>12pm - 12am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Friday</h2><h2 className='times'>12pm - 1am</h2><h2>*HH: 4pm-7pm</h2>
          <h2 className='days'>Saturday</h2><h2 className='times'>12pm - 1am</h2><h2>--</h2>
          <h2 className='days'>Sunday</h2><h2 className='times'>12pm - 10pm</h2><h2>--</h2>
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
