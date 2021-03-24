import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render (){
        return (
            <footer className="gj-footer-wrap">
                <address>
                    <span>Email: <a href="mailto:gonnajoong@gmail.com">gonnajoong@gmail.com</a></span><br/>
                    <span>Phone: <a href="tel:01032906667">010-3290-6667</a></span><br/>
                    <span>Copyright ⓒ GonnaJoong. 2021 All Rights Reserved</span>
                </address>
            </footer>
        )
    }
}

export default Footer;