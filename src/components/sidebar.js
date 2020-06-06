import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {

    render(){

        return (
            <div className="sidebar">
                    <ul>
                        <li><Link to="/"><span><img src="assets/home.svg" alt="el-icon"></img></span><span>Home</span></Link></li>
                        <li><Link to="/"><span><img src="assets/file.svg" alt="el-icon"></img></span><span>My Tests</span></Link></li>
                        <li><Link to="/"><span><img src="assets/bank.svg" alt="el-icon"></img></span><span>Question Bank</span></Link></li>
                        <li><Link to="/" className="active"><span><img src="assets/invited.svg" alt="el-icon"></img></span><span>Invited</span></Link></li>
                        <li><Link to="/"><span><img src="assets/subscribed.svg" alt="el-icon"></img></span><span>Subscribed</span></Link></li>
                        <li><Link to="/"><span><img src="assets/results.svg" alt="el-icon"></img></span><span>Test Results</span></Link></li>
                        <hr />
                        <li><Link to="/"><span><img src="assets/admin.svg" alt="el-icon"></img></span><span>Admin Panel</span></Link></li>
                    </ul>
            </div>
        )
        }
}

export default Sidebar;