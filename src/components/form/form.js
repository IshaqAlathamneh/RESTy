import React from 'react';
import './form.scss'
let myFun;
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    componentDidUpdate = () => {
        let div = document.getElementById('loading')
        if (this.state.show) {
            div.style.visibility = 'visible'
        }else{
            div.style.visibility = 'hidden'
        }
    }
    handleForm = async e => {
        e.preventDefault()
        this.setState({show : true})
        let url = e.target.url.value
        console.log('this: ---------->', this);
        let method = e.target.one.value;
        console.log('method: ', method);
        let body = e.target.body.value;
        let raw
        if (method === 'get' || method === 'delete') {
            raw = await fetch(url, { method, mode: 'cors' });
        } else {
            raw = await fetch(url, {
                method, mode: 'cors', body, headers: {
                    'Content-Type': 'application/json',
                }
            });
        }
        let data = await raw.json();
        this.setState({show : false})
        console.log("data >>>>>>>>>>>>>>>>>>>>: ", data)
        if (data) {
            if (!localStorage.getItem("headers")) {
                localStorage.setItem("headers", JSON.stringify([{ url, method }]));
            } else {
                let localData = JSON.parse(localStorage.getItem("headers"));
                const found = localData.find(elem => {
                    return (elem.url == url && elem.method == method)
                });
                if (!found) {
                    localData.push({ url, method });
                    localStorage.setItem("headers", JSON.stringify(localData))
                }
            }
        }
        myFun(data)
    }
    render() {
        myFun = this.props.edit;
        return (<>
                
            <div  id="loading">
                    <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                    </div>
                    </div> 
            <section>
                <form onSubmit={this.handleForm}>
                    <label htmlFor="url">URL:</label>
                    <input type="text" name="url" id="url" />
                    <button type="submit">Go!</button>
                    <br></br>
                    <label htmlFor="get">get:</label>
                    <input type="radio" name="one" id="get" value="get" />

                    <label htmlFor="post">post:</label>
                    <input type="radio" name="one" id="post" value="post" />

                    <label htmlFor="put">put:</label>
                    <input type="radio" name="one" id="put" value="put" />

                    <label htmlFor="delete">delete:</label>
                    <input type="radio" name="one" id="delete" value="delete" />
                    <br></br>
                    <label htmlFor="body" id="asd">Body:</label>
                    <textarea id="body" name="body" rows="4" cols="27"></textarea>
                </form>

            </section>
            </>
        )
    }
}
// async function handleForm(e) {
//     e.preventDefault()
//     let url = e.target.url.value
//     console.log('url: ', url);
//     let method = e.target.one.value;
//     console.log('method: ', method);
//     let raw = await fetch(url);
//     let data = JSON.stringify(raw);
//     console.log("data >>>>>>>>>>>>>>>>>>>>: ", data)
//     this.props.edit(data)
// }
// const Form = () => {

// }
export default Form;