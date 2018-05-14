import React, {Component} from 'react';
import './box.css';

class Box extends Component{
    render(){
        return(
            <div className="box" >
            
                <div className="box-title">
                    <p className="activator">{this.props.item.title}</p>
                </div>
                <div className="box-content">
                    <p className="card-year">{this.props.item.year}</p>
                </div>
                <img src = {this.props.item.img} />
            </div>
            
        );
    
    }
}
export default Box;