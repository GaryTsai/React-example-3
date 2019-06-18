import React, {Component} from 'react';
import  {  BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import Button from './components/button'
import NewPost from './components/newPost'

export default class App extends Component {
    constructor(props){
        super(props);
        this.addComponent= this.addComponent.bind(this);
        this.removeComponent= this.removeComponent.bind(this);

        this.state={
            components:[],
        }
    }
    addComponent(postData){
        const components = this.state.components;
        components.push(postData);
        this.setState({
            components:components
        });
    }
    removeComponent(){
        if (!this.state.components.length)
            return;
        const components = this.state.components;
        components.pop();
        this.setState({component: components});

    }
    render(){
        const center={
            textAlign: "center",
        }

        return (
            <div style={center}>
                <Router>
                <div>
                  {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About，加入exact可以避免兩個都被render*/}
                    <Switch>
                         <Route exact path="/router"
                                render={props =>
                                    <Button {...props}
                                            components = {this.state.components}
                                            removeComponent={this.removeComponent} />}
                         />
                         <Route path="/router/new-post"
                                render={props =>
                                    <NewPost {...props}
                                             addComponent = {this.addComponent}/>}
                         />
                         <Redirect
                             from='/'
                             to='/router'
                         />
                    </Switch>

                </div>
              </Router>


            </div>
        );
    }
}


