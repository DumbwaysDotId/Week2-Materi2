import React,{Component} from 'react';
import './App.css'

class List extends Component{
    render(){
        const cars = ["Audi","Lambhorgini","BMW","Ayla Turbo","Mini Cooper"];
        return(
            <div className="App-header">
                {cars.map((car) => (<p>{car}</p>))}
            </div>
        );
    }
}
export default List