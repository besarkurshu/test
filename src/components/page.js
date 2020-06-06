import React, { Component } from "react";

class Page extends Component {

    render(){

        return (
            <div>
                    <div className="searchbar">

                       <div>
                        <span>
                            <img src="assets/search.svg" alt="el-icon"></img>
                        </span>
                        <input placeholder="Search for tests by name, tags, etc..."></input>
                       </div>

                       <div className="filter-btn">
                        <img src="assets/filter.svg" alt="el-icon"></img>
                        <span>Filters</span>
                        </div>

                    </div>


                    <div className="page-title">
                    <img src="assets/invited.svg" alt="el-icon"></img>
                    <span>Invited</span>
                    </div>


                    <div className="boxes">

                    <div className="card-group"> 
                    <div className="card col-md-6">
                    <img className="card-img-top" src="assets/Rectangle.jpg"  alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Web Developing - HTML Basics</h5>
                        <p className="author">Author: Melissa Sparks</p>
                        <p className="card-text"><span>Questions: 40</span><span>Language: English</span></p>
                        <div className="tags-on-hover">
                            <span>Information Technology</span>
                            <span>Web Development</span>
                            <span>HTML</span>
                            <span>Programming</span>
                            <span>Beginner</span>
                        </div>  
                    </div>
                    <div className="card-footer">
                    <div>
                        <img src="assets/Vector.svg" alt="el-icon"></img>
                        <img src="assets/Vector1.svg" alt="el-icon"></img>
                        <img src="assets/Vector2.svg" alt="el-icon"></img>
                    </div>
                    <button>Take Test</button>
                    </div>
                    </div>
                  
                
                 
                    <div className="card col-md-6">
                    <img className="card-img-top" src="assets/Rectangle1.jpg" alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">UI/UX Basic Interaction Design</h5>
                        <p className="author">Author: Melissa Sparks</p>
                        <p className="card-text"><span>Questions: 40</span><span>Language: English</span>
                        <span><span className="price">Price:</span> $1.00</span>
                        </p>
                        <div className="tags">
                            <span>User Interface Design</span>
                            <span>User Experience Desi...</span>
                            <span className="plus">+2</span>
                        </div>  
                    </div>
                    <div className="card-footer">
                    <div>
                        <img src="assets/Vector.svg" alt="el-icon"></img>
                        <img src="assets/Vector1.svg" alt="el-icon"></img>
                        <img src="assets/Vector2.svg" alt="el-icon"></img>
                    </div>
                    <button>Take Test</button>
                    </div>
                    </div>
                    </div>

                    <div className="card-group">

                    <div className="card col-md-6">
                    <img className="card-img-top" src="assets/Rectangle2.jpg"  alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Mathematics and Algebra</h5>
                        <p className="author">Author: Melissa Sparks</p>
                        <p className="card-text"><span>Questions: 40</span><span>Language: English</span></p>
                        <div className="tags">
                            <span>User Interface Design</span>
                            <span>User Experience Design</span>
                            <span className="plus">+2</span>
                        </div>  
                    </div>
                    <div className="card-footer">
                    <div>
                        <img src="assets/Vector.svg" alt="el-icon"></img>
                        <img src="assets/Vector1.svg" alt="el-icon"></img>
                        <img src="assets/Vector2.svg" alt="el-icon"></img>
                    </div>
                    <button>Take Test</button>
                    </div>
                    </div>
                 
                    <div className="card col-md-6">
                    <img className="card-img-top" src="assets/Rectangle3.jpg"  alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">Web Developing - HTML Basics</h5>
                        <p className="author">Author: Melissa Sparks</p>
                        <p className="card-text"><span>Questions: 40</span><span>Language: English</span></p>
                        <div className="tags">
                            <span>User Interface Design</span>
                            <span>User Experience Design</span>
                            <span className="plus">+2</span>
                        </div>   
                    </div>
                    <div className="card-footer">
                    <div>
                        <img src="assets/Vector.svg" alt="el-icon"></img>
                        <img src="assets/Vector1.svg" alt="el-icon"></img>
                        <img src="assets/Vector2.svg" alt="el-icon"></img>
                    </div>
                    <button>Take Test</button>
                    </div>
                    </div>
                 


                    </div>

                    </div>
                   
            </div>
        )
        }
}

export default Page;