import React, {Component} from 'react';
// import  {Link } from 'react-router-dom';
import Comp from "./comp";

class Button extends Component {
    // (2)Use onClick methods to redirect address to  '/router/new-post'
    // constructor(props){
    //     super(props);
    //      this.btnRedirect = this.btnRedirect.bind(this);
    // }
    // btnRedirect(){
    //     this.props.history.push('/router/new-post');
    // }
    render() {
        const buttonStyle={
            type:'button',
            width:'100px'
        }
        return (

            <div >
                {/*(1) Use Link methods to redirect to '/router/new-post'*/}
                {/*<Link to={`${this.props.match.url}/new-post`}><button style={buttonStyle}   >Add Post</button></Link>*/}
                {/*(2)*/}
                {/*<button style={buttonStyle} onClick={this.btnRedirect}>Add Post</button>*/}
                {/*(3) inline function */}
                <button style={buttonStyle} onClick={()=>{this.props.history.push('/router/new-post')}}>Add Post</button>

                <button style={buttonStyle} onClick={this.props.removeComponent}>Remove Post</button>
                <br/>
                {/*Display the Comp component*/}
                {this.props.components.map((component,index)=>
                    <Comp component = {component} key={index} />
                )}
            </div>
        );
    }
}

export default Button;