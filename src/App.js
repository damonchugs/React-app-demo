
import React from 'react';
// 多个路由切换需要用 Switch 
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/home/index.js'
import About from './pages/about/index.js'
 
function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact  path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Redirect to="/" />
        {/* <Route  component={NoMatch} /> */}
      </Switch>
  </BrowserRouter>
  );
}
 
export default App;
