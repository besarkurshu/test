import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from './sidebar';

class Header extends Component {

    render(){

        return (
            <div className="header">
                   <div className='container'>
                   <Link to="/"><img src="assets/evaluo-logo.svg" alt="main-logo" /></Link>
                   <div>
                       <Link to="#">
                           <img src="assets/create_test.svg" alt="el-icon"></img>
                       Create Test
                       </Link>
                       <span>
                           <img src="assets/notification.svg" alt="el-icon"></img>
                       </span>
                       <span style={{background: "url('assets/avatar.jpeg')"}}>
                            <img src="assets/chevron-group.svg" alt="el-icon"></img>
                       </span>
                   </div>


                   <Sidebar />
                   </div>

            </div>
        )
        }
}

export default Header;