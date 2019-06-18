import React, {Component} from 'react';
import  {  BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import Button from './components/button'
import NewPost from './components/newPost'

export default class App extends Component {
    constructor(props){
        super(props);
        this.addComponent= this.addComponent.bind(this);
        this.removeComponent= this.removeComponent.bind(this);
        // initial data
        this.state={
            components:[],
        }
    }
    //Add the component to the  components and rerender the Comp component
    addComponent(postData){
        const components = this.state.components;
        components.push(postData);
        this.setState({
            components:components
        });
    }
    //Remove the component from components and rerender the Comp component
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
                    {/*The Switch avoid that Routes have same alias pathname in the same router  */}
                    <Switch>
                         {/*Button page*/}
                         <Route  exact path="/router"
                                render={props =>
                                    <Button {...props}
                                            components = {this.state.components}
                                            removeComponent={this.removeComponent} />}
                         />
                        {/*NewPost page*/}
                        <Route path="/router/new-post"
                                render={props =>
                                    <NewPost {...props}
                                             addComponent = {this.addComponent}/>}
                         />
                         {/*Redirect '/' to '/router'*/}
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


