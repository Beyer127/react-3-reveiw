import React, {Component} from 'react'
import data from '../data'

class Home extends Component {
    constructor(){
        super();

        this.state = {
            data: data,
            index: 0,
            numCards: data.length
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

                     <section>
                         <div className="main">

                             <div id="card-numbers">
                                 <h2>{this.state.index}/{this.state.numCards}</h2>
                             </div>

                            <div className="name">
                                <h2>{this.state.data[this.state.index].name.first} {this.state.data[this.state.index].name.last}</h2>
                            </div>
               
                            <div className="state">
                                <strong>From:</strong> {this.state.data[this.state.index].city}
                            </div>

                            <div className="job-title">
                            <strong>Job Title:</strong> {this.state.data[this.state.index].title}
                            </div>

                            <div className="employer">
                                <strong>Employer:</strong> {this.state.data[this.state.index].employer}
                            </div>

                            <ol className="fav-movies">
                                <h2>Favorite Movies:</h2>
                                <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[0]}</li>
                                <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[1]}</li>
                                <li className="movie-list">{this.state.data[this.state.index].favoriteMovies[2]}</li>
                            </ol>

                        </div>

                      </section>

                        <div id="buttons">
                            <button className="button-nav" onClick={() => this.next()}>{'< Previous'}</button>
                            <div id="edit-buttons">
                                <button className="edit-buttons">Edit</button>
                                <button className="edit-buttons">Delete</button>
                                <button className="edit-buttons">New</button>
                            </div>
                            <button className="button-nav" onClick={() => this.previous()}>{'Next >'}</button>
                        </div>
    

               
            </div>

          
        )
    }
}

export default Home