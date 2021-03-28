import React, {Component} from "react";
import CONSTANT from '../constants/constant';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectArr: CONSTANT.Projects,
            skillArr: CONSTANT.Skills,
        }
    }

    componentDidMount (){
        console.log(this.state.skillArr);
    }

    render(){
        const {projectArr, skillArr} = this.state;
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
                        <h2>내가 걸어온 길</h2>
                        <li className="gj-split-wrap">
                            <span className="gj-split-image-wrap">
                                <img src="#" alt="about-image"/>
                            </span>
                            <span className="gj-split-text-wrap gj-split-padding">
                                <h2>화성 남양고등학교</h2>
                                <span>2012. 03 ~ 2015. 02</span>
                                <p>고등학교 3년 개근으로 졸업</p>
                            </span>
                        </li>
                        <li className="gj-split-wrap">
                            <span className="gj-split-text-wrap ">
                                <h2>안산 라인컴퓨터아트학원</h2>
                                <span>2018. 04 ~ 2019. 02</span>
                                <p>국비지원으로 스마트 UI / UX과정 교육 정상 수료</p>
                            </span>
                            <span className="gj-split-image-wrap">
                                <img src="#" alt="about-image"/>
                            </span>
                        </li>
                        <li className="gj-split-wrap">
                            <span className="gj-split-image-wrap">
                                <img src="#" alt="about-image"/>
                            </span>
                            <span className="gj-split-text-wrap  gj-split-padding">
                                <h2>(주)린코</h2>
                                <span>2019. 05. 20 ~ 2020. 08. 31</span>
                                <p>
                                    스타트업 기업에서 라라벨 및 리액트를 이용한 API연동을 주로 담당하였으며 
                                    카페24를 이용한 쇼핑몰 디자인과 리액트를 이용한 농업 ERP 프로젝트 참여경험또한 있습니다.
                                </p>
                            </span>
                        </li>
                    </ul>
                    <ul className="gj-about-list grid">
                        <h2>기술</h2>
                        <li>
                            <ul className="gj-grid-wrap">
                                {
                                    skillArr && skillArr.length ?
                                    skillArr.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span>
                                                    <img src={item.src} alt="언어 아이콘"/>
                                                    <p>{item.skillName}</p>
                                                </span>
                                            </li>
                                        )
                                    })
                                    :
                                    null
                                }
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
        )
    }
}

export default Main;