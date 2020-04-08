import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Todo from './pages/TodoApp';
import Flex from './pages/FlexCss';
import List from './pages/List';
import Frame from './pages/frameworkCSS';


class App extends Component {
  render(){
    return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TodoApp</Link>
            </li>
            <li>
              <Link to="/list">ListApp</Link>
            </li>
            <li>
              <Link to="/flex">FlexApp</Link>
            </li>
            <li>
              <Link to="/frame">FrameApp</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          
          <Route path ="/list">
            <List />
          </Route>

          <Route path ="/flex">
            <Flex />
          </Route>

          <Route path ="/frame">
            <Frame />
          </Route>

          <Route path ="/">
            <Todo />
          </Route>

        </Switch>

      </div>
    </Router>
    )
  }
}

export default App;
