import React from 'react';
let myFun;
class Form extends React.Component {
    handleForm = async e => {
        e.preventDefault()
        let url = e.target.url.value
        console.log('this: ---------->', this);
        let method = e.target.one.value;
        console.log('method: ', method);
        let raw = await fetch(url,{ method});
        let data = await raw.json();
        console.log("data >>>>>>>>>>>>>>>>>>>>: ", data)
        myFun(data)
    }
    render() {
        myFun = this.props.edit;
        return (
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


                </form>

            </section>
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