import React from 'react';
import './App.scss';
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import People from './People'

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
      <>
      <Header/>
      <Form edit={this.handleGet}/>
      <People data={this.state.results} />
      <Footer/>
    </>
    );
  }
}


export default App;
