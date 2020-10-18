/* VAMOS A CREAR EL COMPONENTE REACT "JUMBOTRON" */
import React from 'react';
class Jumbotron extends React.Component{
    constructor(){
        super();
        this.state={
            title: "vermos el titulo",
//            lead: "",
//            paragraph: "",
//            link_text: "",
//            link: "#"
        }
    }
    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-4">{this.state.title.toUpperCase()}</h1>
                <p className="lead"></p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        )
    }
}
export default Jumbotron;