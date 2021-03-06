import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount (){}

    render(){
        return (
            <header className="gj-header-wrap">
                <span className="gj-header-container">
                    <h1 className="gj-header-title">KGJ</h1>
                    <nav className="gj-nav-wrap">
                        <ul>
                            <li>BLOG</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                </span>
            </header>
        );
    }
}

export default Header;