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
                <article className="gj-main-layout gj-main">
                    <h1>K<span className="gj-border-text"> G </span>J.</h1>
                    <p>프론트엔드 개발자</p>
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