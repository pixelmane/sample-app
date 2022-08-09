
import './App.css';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
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
  
  let activeStyle = {
    color: 'white', backgroundColor: 'rgb(246, 137, 137)', borderRadius: '10px', padding: '5px 10px', paddingLeft: '10px', paddingRight: '10px'
  }
  let inactiveStyle = {
    color: 'white', borderRadius: '10px', padding: '5px 10px', backgroundColor: 'rgba(0,0,0,.3)', paddingLeft: '10px', paddingRight: '10px'
  }
  return (
    
    <div className="App">
      <header id='navBar'>
        <NavLink style={({isActive}) => 
                isActive ? activeStyle : inactiveStyle}  to='/'><div id='homeLink'>Home</div></NavLink>
        <NavLink style={({isActive}) => 
                isActive ? activeStyle : inactiveStyle} to='/menu'><div id='menuLink'>Menu</div></NavLink>
        <NavLink style={({isActive}) => 
                isActive ? activeStyle : inactiveStyle} to='/contact' ><div id='contactLink'>Contact</div></NavLink>
        <a href='https://www.order.store/store/addellas-on-oak/_deV1dJoTAqA3HbtZiG_Dg' target='_blank' rel='noreferrer'><div id='delivery'>Delivery</div></a>
      </header>
      <div id='banner'><div id='phoneCont'><a href='tel:614-928-3032'><h2 id="phone">ph:614-928-3032</h2></a></div><a href='https://www.facebook.com/addellasonoak/' target='_blank' rel='noreferrer'><div id='social1'></div></a><a href='https://www.instagram.com/addellas614/' target='_blank' rel='noreferrer'><div id='social2'></div></a></div>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/menu/*' element ={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  );
}
function Contact() {
  
  return (
    <div>
    <div id='contactCont'>
      <h1 className='hours'>contact</h1>
      <form id='theForm' name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
          <p>
            <input placeholder='name' type="text" name="name"/>
          </p>
          <p>
            <input placeholder='email' type="email" name="email"/>
          </p>
          <p>
            <textarea placeholder='question' name="message"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      
     {/*} <form  method='post' name='myForm' id='contactForm' data-netlify="true">
      <input type="hidden" name="form-name" value="pizzaOrder" />
        <input placeholder='email' type='text'></input>
       <input placeholder='name' type='text'></input>
       <textarea style={{height: '80px'}} placeholder='message' type='text'></textarea>
       <button type="submit" id='submit'>Submit</button>
      </form>
      <form onSubmit={handleSubmit} name="contact" data-netlify="true">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
  </form> */}
    </div>
  )
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
            default: 
            document.getElementById('plantBasedIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('menuIcon').style.backgroundColor = 'rgb(246, 137, 137)'
          document.getElementById('drinksIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          document.getElementById('brunchIcon').style.backgroundColor = 'rgb(92, 112, 80)'
          break;
        
      }
      }
    
  
  return (
    <div>
      <div id='menuCont'>
        <h1 className='hours'>menus</h1>
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
    <div id='homeCont'>
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
      <div id='addressCont'>
      <h1 className='hours'>address</h1>
      
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
      <div id='addressBlock'>
      <h2>ADDELLA'S ON OAK</h2>
      <h2>1485 Oak St.</h2>
      <h2>Columbus, OH 43205</h2>
      </div>
      </div>
      
  )
}
export default App;
