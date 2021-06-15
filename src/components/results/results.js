import React from 'react';
import ReactJson from 'react-json-view';

class People extends React.Component {
    componentDidMount() {
        let locStor = localStorage.getItem('headers')
        let parsed = JSON.parse(locStor)
        console.log('parsed data -------------', parsed);
        if (parsed) {
            parsed.forEach((element, inx) => {
                let btata = document.createElement('p')
                btata.textContent =inx+1 +'-  ' +element.url + '   ' + element.method;
                let parent = document.getElementById('history')
                parent.appendChild(btata)
         })
        }
    }
    render(){
        let obj = this.props.data;
        
        
        return (
            <div id="output">
                <div id="history"></div>
                <ReactJson src={obj} />
            </div>
        )
    }
}
export default People;