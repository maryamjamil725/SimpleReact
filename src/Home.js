import React, { Component } from 'react';
import About from './About';
class Home extends Component{
    
    handleSubmit(event) {
        alert('Go to About'  );
        event.preventDefault();
      }
    
    render(){
        return(
            <div>
                <h1>Hello Home Page</h1>

                <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={1}  />        </label>
        <input type="submit" value="Submit" />
      </form>


            </div>
        );
    }
}
export default Home;