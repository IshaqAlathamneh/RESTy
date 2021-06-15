import React from 'react';
import './design/design.scss';
import Header from './components/header/header';
import Footer from './Footer';
import Form from './components/form/form';
import People from './components/results/results';

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
