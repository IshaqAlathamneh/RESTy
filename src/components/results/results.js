import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss'

const fill = (e) => {
    e.preventDefault();
     let input1 = document.getElementById('url')
     let select1 = document.getElementsByName('one');
     input1.value = e.target.u.value
     select1.forEach(element => {   
         if (element.value == e.target.m.value) {
             element.checked = true
         }
     });
 }
class People extends React.Component {
    componentDidMount() {
        let obj = this.props.data;
        let div = document.getElementById('output')
        console.log('in mount');
        if (obj) {
            div.style.visibility = 'hidden';
        }
    }
    
    render(){

        let obj = this.props.data;
        let locStor = localStorage.getItem('headers')
        let parsed = JSON.parse(locStor)
        console.log('parsed data -------------', parsed);

        if (!parsed) {
            parsed = [{
                url: 'https://focused-lichterman-9cce89.netlify.app/',
                method: 'get'
            }]
        }
        
        return (
            <>
                <div id="history">
                    
                    {
                        parsed.map((element, inx) => {
                            return(
                                <form onSubmit={fill} key={inx}>
                                            <button className={element.method} type="submit">{element.method}</button>
                                            <label htmlFor="u">{element.url}</label>
                                            <input type="hidden" name="u" value={element.url}/>
                                            <input type="hidden" name="m" value={element.method}/>  
                                </form>
                            )
                     })
                    }                   
                </div>
            <div id="output">
                <ReactJson src={obj} />
            </div>
            </>
        )
    }
}
export default People;