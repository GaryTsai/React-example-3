import React, {Component} from 'react';

class Comp extends Component {
    render() {
        const componentStyle={
            width: '50%',
            margin: '10px auto',
            borderStyle: 'dashed',
        }
        const imgStyle={
            width: '100px',
            height: '100px',
            objectFit: 'contain',
        }
        return (
            <div style={componentStyle}>
                <div>{this.props.component.title}</div>
                <div>{this.props.component.content}</div>
                {/*If imageURL is empty, not display the Image*/}
                {    this.props.component.imageURL &&
                    <img src={this.props.component.imageURL} alt="preview" style={imgStyle}/>
                }
            </div>
        );
    }
}

export default Comp;