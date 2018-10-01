import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import AddScreen from './add-screen.component.jsx';

import {
    addScreen
} from '../../store/actions';

class AddScreenComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['Screen 1', 'Screen 2']
        };
    }

    render() {
        const {
            state,
            props
        } = this;
        const {
            onAddScreen,
            screens
        } = props;

        return <AddScreen headerProps = {
            {
                items: screens,
                onAddScreen
            }
        }
        />
    }
}

function mapStateToProps(state, props) {
    return {
        screens: state.screens
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddScreen: function (screen) {
            dispatch(addScreen(screen));
        }
    };
}

export const AddScreenContainer = connect(mapStateToProps, mapDispatchToProps)(AddScreenComponent)