import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Services from './home/services/Services';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SingleProject from './home/SingleProject/SingleProject';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact index path='/' element ={<Home/>}></Route>
      <Route exact path='/singleproject1' element={<SingleProject 
        img1={require("./images/portfolio/news-express.png")} 
        img2={require("./images/web-development-icon2-removebg-preview.png")}
        img3={require("./images/graphic-design-removebg-preview.png")}
        category="website" client="Elijah" date="tyui" url="www.url.com"
        description="project 1"/>}></Route>

<Route exact path='/singleproject2' element={<SingleProject 
        img1={require("./images/singleProject/safiri-home.png")} 
        img2={require("./images/singleProject/safiri-home-2.png")}
        img3={require("./images/singleProject/safiri-home-3.png")}
        category="website" client="Elijah" date="tyui" url="https://safiri-app.netlify.app/"
        description="project 2"/>}></Route>
    
    <Route exact path='/singleproject3' element={<SingleProject 
        img1={require("./images/web-designing-big.png")} 
        img2={require("./images/web-development-icon2-removebg-preview.png")}
        img3={require("./images/graphic-design-removebg-preview.png")}
        category="website" client="Elijah" date="tyui" url="Http://eliki-hue.github.io/akan-name-matcher/"
        description="project 3"/>}></Route>

<Route exact path='/singleproject4' element={<SingleProject 
        img1={require("./images/portfolio/neighbourhood.png")} 
        img2={require("./images/web-development-icon2-removebg-preview.png")}
        img3={require("./images/graphic-design-removebg-preview.png")}
        category="website" client="Elijah" date="tyui" url="www.url.com"
        description="project 4"/>}></Route>

<Route exact path='/singleproject5' element={<SingleProject 
        img1={require("./images/web-designing-big.png")} 
        img2={require("./images/web-development-icon2-removebg-preview.png")}
        img3={require("./images/graphic-design-removebg-preview.png")}
        category="website" client="Elijah" date="tyui" url="Https://news-finder-express.herokuapp.com"
        description="project 5"/>}></Route>
    
    <Route exact path='/singleproject6' element={<SingleProject 
        img1={require("./images/web-designing-big.png")} 
        img2={require("./images/web-development-icon2-removebg-preview.png")}
        img3={require("./images/graphic-design-removebg-preview.png")}
        category="website" client="Elijah" date="tyui" url="www.url.com"
        description="project 6"/>}></Route>
    
    
    </Routes>
    {/* <Home/> */}
    </Router>
    
    {/* // <BrowserRouter>
    // <Routes>
    //   <Route index element={<Home />}>
    //   </Route> */}
      {/* <Route path="dashboard" element={<Dashboard />}>
      </Route>
      <Route path="profile" element={<Profile />}>
      </Route>
      <Route path="login" element={<LoginPage />}>
      </Route>
      <Route path="driver" element={<Main />}>
      </Route>
      <Route path="customer" element={<CustomerRegister />}>
      </Route>
      <Route path="addbus" element={<AddBus />}>
      </Route>
      <Route path="buses" element={<BusList />}>
      </Route>
      <Route path="businfo" element={<BusInfo />}>
      </Route>
      <Route path="bookingform" element={<BookingForm />}>
      </Route> */}
    {/* </Routes>
  </BrowserRouter> */}
  </>
  
  );
}

export default App;
