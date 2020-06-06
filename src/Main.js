import React, { Component } from "react";
import './css/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Page from './components/page';
import { Route, Switch } from "react-router-dom";


class Main extends Component {

    render(){

        return (
            <div>
                <div className="sidebar-header">
                <Header/>
                
                </div>

               <div className="container">
               <div className="content">
         
                    <Switch >
                    <Route exact path="/" component={Page}/>
                    </Switch>
                    </div>
               </div>

            </div>
        )
        }
}

export default Main;