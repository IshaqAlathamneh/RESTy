import React from 'react';
let state = {
    url : '',
    method : ''
}
function handleForm(e) {
    e.preventDefault()
    let output = document.getElementById('output')
    console.log('output: ', output);
    let url = e.target.url.value
    console.log('url: ', url);
    let method = e.target.one.value;
    console.log('method: ', method);
    state.url = url;
    state.method = method;
    output.innerHTML = state.method + '  ' + state.url
}
const Form = () => {
    return (
        <section>
            
            <form onSubmit={handleForm}>
                <label htmlFor="url">URL:</label>
                <input type="text" name="url" id="url"/>
                <button type="submit">Go!</button>
                <br></br>
                <label htmlFor="get">get:</label>
                <input type="radio" name="one" id="get" value="get"/>

                <label htmlFor="post">post:</label>
                <input type="radio" name="one" id="post" value="post"/>

                <label htmlFor="put">put:</label>
                <input type="radio" name="one" id="put" value="put"/>

                <label htmlFor="delete">delete:</label>
                <input type="radio" name="one" id="delete" value="delete"/>

                
            </form>
            <div id="output">
                
            </div>
            
        </section>
      )
}
export default Form;