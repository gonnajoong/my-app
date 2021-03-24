import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount (){}

    render(){
        return (
            <section className="gj-main-wrap">
                <article className="gj-main-layout">
                    
                </article>
                <article className="gj-main-layout" id="gjBlog">
                    BLOG 내용
                </article>
                <article className="gj-main-layout" id="gjAbout">
                    ABOUT 내용
                </article>
                <article className="gj-main-layout" id="gjContact">
                    CONTACT 내용
                </article>
            </section>
        )
    }
}

export default Main;