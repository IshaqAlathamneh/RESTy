import React from 'react';
import ReactJson from 'react-json-view'

class People extends React.Component {
    render(){
        let obj = this.props.data
        console.log('obj------------------',obj);
        return (
            <div id="output">

                <ReactJson src={obj} />
            </div>
        )
    }
}
export default People;