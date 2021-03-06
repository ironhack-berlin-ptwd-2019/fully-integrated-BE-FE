import React from 'react';
import ProjectList from './components/ProjectList';
import Signup from './components/Signup';
import { Redirect, Switch, Route } from 'react-router-dom'
import Login from './components/Login';


class App extends React.Component {

  state = {
    loggedInUser: this.props.user
  }

  updateUserHandler = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div>
        Hello, {this.state.loggedInUser ? this.state.loggedInUser.username : 'Stranger'} !
        <Switch>
          <Route path="/profile" component={ProjectList}></Route>
          <Route path="/profile" render={() => <ProjectList></ProjectList>}></Route>
          <Route path="/signup" render={
            () => {
              if (this.state.loggedInUser) {
                return <Redirect to="/profile"></Redirect>
              } else {
                return <div>
                  <Login updateUser={this.updateUserHandler}></Login>
                  <div> ------------------------ </div>
                  <Signup history={this.props.history} updateUser={this.updateUserHandler}></Signup>
                </div>
              }
            }}>
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
