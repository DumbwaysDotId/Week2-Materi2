import React,{Component} from 'react';

class flexCSS extends Component {
    render(){
        return(
            <div>
                <div style={{display:"flex",flex:1,flexDirection: "row"}}>
                <div style={styleSheet.div1}></div>
                <div style={styleSheet.div2}></div>
                <div style={styleSheet.div3}></div>
                </div>
                
                <div style={{display: "flex", flex:1, flexDirection: "row", marginRight: 100 }}>
                <div style={styleSheet.div4}></div>
                <div style={styleSheet.div5}></div>
                </div>
            </div>
        )
    }
}
export default flexCSS

const styleSheet = {
    div1: {
        width: "50px",
        height: "50px",
        backgroundColor: "powderblue"
    },
    div2: {
        width: "50px",
        height: "50px",
        backgroundColor: "skyblue"
    },
    div3: {
        width: "50px",
        height: "50px",
        backgroundColor: "steelblue"
    },
    div4: {
        width: "50px",
        height: "50px",
        backgroundColor: "red"
    },
    div5: {
        width: "50px",
        height: "50px",
        backgroundColor: "yellow"
    }
}