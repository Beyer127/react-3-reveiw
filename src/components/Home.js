import React, {Component} from 'react'
import data from '../data'

class Home extends Component {
    constructor(){
        super();

        this.state = {
            data: data,
            index: 0
        }

}

    next(){
        if(this.state.index === this.state.data.length -1){
            this.setState({index: 0})
        }else {
            this.setState({index: this.state.index + 1}) 
        }
    }

    previous(){
        if(this.state.index === 0){
            this.setState({index: this.state.data.length -1})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }





    render(){
        console.log(this.state)
        return(
            <div>

                <div className="header">
                    <h4>Home</h4>
                </div>

                <div className="home">
                    <h2>{this.state.data[this.state.index].name.first} {this.state.data[this.state.index].name.last}</h2>
                </div>

                     <section>
                         <div className="main"></div>
               
                     <div>
                         <strong>From:</strong> {this.state.data[this.state.index].city}
                    </div>

                    <div>
                       <strong>Job Title:</strong> {this.state.data[this.state.index].title}
                    </div>

                    <div>
                        <strong>Employer:</strong> {this.state.data[this.state.index].employer}
                    </div>

                    <ol>
                          <h2>Favorite Movies:</h2>
                          <li>{this.state.data[this.state.index].favoriteMovies[0]}</li>
                          <li>{this.state.data[this.state.index].favoriteMovies[1]}</li>
                          <li>{this.state.data[this.state.index].favoriteMovies[2]}</li>
                      </ol>

                      </section>


                  <button className="next" onClick={() => this.next()}>Next</button>
                  <button className="previous" onClick={() => this.previous()}>Previous</button>
               
            </div>

          
        )
    }
}

export default Home