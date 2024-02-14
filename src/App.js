
import Header from './Components/common/heading/Header'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from './Components/home/Home';
import About from './Components/about/About';
import CourseHome from './Components/allcourses/CourseHome';

const App = () => {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/courses" exact component={CourseHome}/>
        </Switch>
    </Router>
    </div>
  )
}

export default App