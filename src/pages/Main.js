import React, {Component} from "react";
import CONSTANT from '../constants/constant';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectArr: CONSTANT.Projects,
        }
    }

    componentDidMount (){
        console.log(this.state.projectArr);
    }

    render(){
        const {projectArr} = this.state;
        return (
            <section className="gj-main-wrap">
                <article className="gj-main-layout gj-main">
                    <h1>KIM<br/><span className="gj-border-text">GWAN<br/></span>JOONG.</h1>
                    <p>프론트엔드 개발자 김관중</p>
                </article>
                <article className="gj-main-layout gj-blog" id="gjBlog">
                    <h1>참여 프로젝트</h1>
                    <ul className="gj-project-icon-list">
                        {
                            projectArr && projectArr.length ?
                            projectArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            <img src={item.src} alt="프로젝트 이미지, 아이콘"/>
                                            <p>{item.projectName}</p>
                                        </span>
                                    </li>
                                )
                            })
                            :
                            null
                            
                        }
                    </ul>
                </article>
                <article className="gj-main-layout gj-about" id="gjAbout">
                    <h1>
                        ABOUT.<br/>
                        <p>
                        <span>언제나 침착하고 신중한</span><br/>
                            프론트엔드 개발자 "김관중"
                        </p>
                    </h1>
                    <ul className="gj-about-list">
                        <h2>학력</h2>
                        <li>
                            <strong>화성 남양고등학교</strong>
                            <span>2012. 03 ~ 2015. 02</span>
                            <p>고등학교 졸업</p>
                        </li>
                        <li>
                            <strong>안산 라인컴퓨터아트학원</strong>
                            <span>2018. 04 ~ 2019. 02</span>
                            <p>국비지원과정으로 정상 수료</p>
                        </li>
                    </ul>
                    <ul className="gj-about-list">
                        <h2>경력</h2>
                        <li>
                            <strong>(주)린코</strong>
                            <span>2019. 05. 20 ~ 2020. 08. 31</span>
                            <p>웹 퍼블리셔 및 웹 프론트엔드로 근무</p>
                        </li>
                    </ul>
                    <ul className="gj-about-list grid">
                        <h2>기술</h2>
                        <li>
                            <span>
                                <img src="#" alt="언어 아이콘"/>
                                <p>HTML5</p>
                            </span>
                        </li>
                    </ul>
                </article>
                <article className="gj-main-layout gj-contact" id="gjContact">
                    CONTACT 내용
                </article>
            </section>
        )
    }
}

export default Main;