import React from 'react';
import './design/design.scss';
import Header from './components/header/header';
import Footer from './Footer';
import Form from './components/form/form';
import People from './components/results/results';
import {BrowserRouter, Switch} from 'react-router-dom';
import Help from './components/help/help'
import History from './components/history/history';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results : {}
    }
  }
  handleGet = (data) => {

    this.setState({
      results: data
    })
    console.log('---state---',this.state);
  }
  render(){
    return (
      <BrowserRouter>
      <Header/>
      <Switch>
        <div exact path="/">
      <Form  edit={this.handleGet}/>
      <People data={this.state.results} />
        </div>
      <Help exact path="/help"/>
      <History exact path="/history"/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    );
  }
}


export default App;
