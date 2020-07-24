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

    // handleChange(value){
    //     this.setState({from: value})
    //     this.setState({jobTitle: value})
    //     this.setState({Employee: value})
    // }


    render(){
        console.log(this.state)
        return(
            <div>
                 {/* <h2 onChange={e => this.handleChange(e.target.value)}></h2>
                  <p>{this.state.from}</p> */}
                  <h2>{this.state.data[this.state.index].city}</h2>
                  <button className="next" onClick={() => this.next()}>Next</button>
                  <button className="previous" onClick={() => this.previous()}>Previous</button>
            </div>
        )
    }
}

export default Home