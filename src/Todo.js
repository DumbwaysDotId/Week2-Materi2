import React, {Component} from 'react';

class Todo extends Component{
    render(){
        let {id,todo,onRemove} = this.props
        return(
            <li>{todo} <button onClick={() => onRemove(id)}>X</button></li>
        );
    }
}
export default Todo