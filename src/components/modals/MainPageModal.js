import React, {Component} from "react";
import {useAlert} from "../../contexts/alert";
import {useMainPageModal} from '../../contexts/modal/mainPageModal';

class MainPageModal extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.sync(this.init);
    }

    init = () => {
        document.addEventListener('keyup', this.closeOnEscape);
    };

    close = () => {
        this.props.close();
        document.removeEventListener('keyup', this.closeOnEscape);
    };

    closeOnEscape = (e) => {
        if (e.keyCode === 27) this.close();
    };

    render(){
        return(
            <article id="lcModalNoticeRequestWrap" className={'modal-container' + (this.props.isVisible ? ' active' : '')}
                     tabIndex="0">
                <div className="vertical-align-wrap">
                    <div className="vertical-align">
                        {this.props.isVisible ?
                            <div id="lcModalNoticeRequest" className="modal-wrap">
                                <section className="modal-body">
                                    <strong>
                                        고지사항 안내
                                    </strong>
                                    <span>
                                        -요청 후 담장자 검토 및 개별연락, 등록됩니다.<br/>
                                        -광고, 홍보 및 가상번호 할당은 무료이며 JOY37 시스템을
                                        통한 예약전화에 한하여 10초당 100원의 정보이용료가 부과됩니다.
                                        <p>(평균 예약전화 40초 내외)</p>
                                    </span>
                                    <span>
                                        (주)퍼스널가든<br/>
                                         info@pgunit.com
                                    </span>
                                    <button type={"button"} onClick={this.close}>
                                        확인
                                    </button>
                                </section>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </article>
        )
    }
}

export default useAlert(
    ({actions}) => ({
        show: actions.show,
        alertError: actions.alertError,
    })
)(useMainPageModal(
    ({state, actions}) => ({
        isVisible: state.isVisible,
        callback: state.callback,
        sync: actions.sync,
        close: actions.close
    })
)(MainPageModal));