import React from 'react';
import ReactJson from 'react-json-view';
import './history.scss'
let bg;
class History extends React.Component {
    showMe = (inx) => {
        console.log();
            let myDiv = document.getElementById(bg)
            console.log('show',myDiv);
            if(myDiv){
                myDiv.style.display = 'block'
                myDiv.style.zIndex = '6'
            }
    }
    hide = () => {
        let myDiv = document.getElementById(bg)
        console.log('show',myDiv);
        if(myDiv){
        myDiv.style.display = 'none'
        }
    }
    render(){
        let locStor = localStorage.getItem('headers')
        let parsed = JSON.parse(locStor)

        if (!parsed) {
            parsed = [{
                url: 'https://focused-lichterman-9cce89.netlify.app/',
                method: 'get'
            }]
        }
        
        return (
            <>
                    
                    {
                        parsed.map((element, inx) => {
                            return(
                                <>
                                    <span>{element.method}</span>
                                    <p>{element.url}</p> 
                                    <div className={'m '+inx}>

                                    <ReactJson src={element.res} /> 
                                    </div>
                                </>
                            )
                     })
                    }
            
            </>
        )
    }
}
export default History;