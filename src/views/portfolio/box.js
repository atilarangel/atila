import React, {Component} from 'react';
import './box.css';

class Box extends Component{
    render(){
        return(
            <div className="box" >
                <a href={this.props.item.link} target='_blank'>
                    <img className='image' src = {require("./../../assets/portfolio/"+this.props.item.img)}/>
                <div className="overlay">
                    <div className="text">{this.props.item.title}</div>
                        <p className="text">{this.props.item.year}</p>
                    
                </div>
                </a>
            </div>
            
        );
    
    }
}
export default Box;