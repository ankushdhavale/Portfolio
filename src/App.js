import logo from './logo.svg';
import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import MySkills from './PortfolioContainer/MySkills/MySkills';
import Projects from './PortfolioContainer/Projects/Projects';
import Footer from './PortfolioContainer/Footer/Footer';
import Header from './PortfolioContainer/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Profile></Profile>
     <AboutMe></AboutMe>
     <MySkills></MySkills>
     <Projects></Projects>
     <ContactMe></ContactMe>
     <Footer></Footer>
    </div>
  );
}

export default App;
