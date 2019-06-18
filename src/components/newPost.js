import React, {Component} from 'react';
// (1)
// import {Link} from "react-router-dom";

class NewPost extends Component {
    constructor(props){
        super(props);
        this.uploadClick = this.uploadClick.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);

        this.state={
            imageURL:''
        }
    }
    uploadClick (){
        this.upload.click();
    }
    handleImage(e){
        const file = e.target.files[0];
        console.log(file);
        const imageURL = URL.createObjectURL(file);
        this.setState({
            imageURL:imageURL,
        })
    }
    handleNewPost(){
        const postData = {
            title:this.title.value,
            content:this.content.value,
            imageURL: this.state.imageURL
        }
        this.props.addComponent(postData);
        this.props.history.push('/router');

    }

    render(){
        const titleStyle={
            padding: '10px 0px',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const inputStyle={
            width:"20%"
        }
        const btnStyle={
            type:"button",
            width: '100px'
        }
        const imgStyle={
            width: '100px',
            height: '100px',
            objectFit: 'contain',
        }
        return (
            <div>
                <div >
                    <div>
                        <span style={titleStyle}>Title:</span>
                        <input style={inputStyle}    ref = {input => this.title =input}   type="text"
                        name="title"
                        maxLength="10"/>
                    </div>
                    <div>
                        <span style={titleStyle}>Content:</span>
                        <textarea   cols="50"
                                    rows="5"
                                    name="content"
                                    defaultValue="Please input Content." ref={textarea => this.content =textarea}/>
                    </div>
                    <br/>
                    {/*When state.imageURL is not empty so that display Image */}
                    {
                        this.state.imageURL &&
                        <div>
                            <span style={titleStyle}>Image Preview:</span>
                            < img src={this.state.imageURL} alt="preview" style={imgStyle}/>
                        </div>
                    }
                    <input type="file" accept="image/*" value='' ref={(input) => { this.upload = input; }} onChange={event => this.handleImage(event)} hidden/>
                    <button style={btnStyle} onClick={this.uploadClick} >upload</button>
                    {/*(1) Link*/}
                    {/*<Link to={'/router'} ><button style={btnStyle} onClick={this.handleNewPost} >submit</button></Link>*/}
                    {/*(2) this.props.history.push*/}
                    <button style={btnStyle} onClick={this.handleNewPost} >submit</button>

                </div>
            </div>
        );
    }
}

export default NewPost;