import React, {Component, createContext} from 'react';
import {createUseConsumer} from '../../utils/context';

import CONSTANT from '../../constants/constant';
const Context = createContext();
const {Provider, Consumer: MainPageModalConsumer} = Context;

const defaultState = CONSTANT.defaultModalState;

class MainPageModalProvider extends Component{
    constructor(props) {
        super(props);
        this.state = Object.assign({}, defaultState);
    }

    actions = {
        sync: (syncCallback) => {
            let temp = Object.assign({}, defaultState);
            temp.syncCallback = syncCallback;
            this.setState(temp);
        },
        open: (data, callback) => {
            const isVisible = true;
            this.setState({
                isVisible: isVisible,
                callback: callback
            });
            this.state.syncCallback(data);
        },
        close: () => {
            const isVisible = false;
            this.setState({
                isVisible: isVisible,
                callback: undefined
            });
        }
    };

    render() {
        const {state, actions} = this;
        const value = {state, actions};
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

const useMainPageModal = createUseConsumer(MainPageModalConsumer);

export {
    MainPageModalProvider,
    MainPageModalConsumer,
    useMainPageModal
}