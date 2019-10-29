import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { HomeContainer, ProfileContainer } from '../index';
import { NavigationDesktop } from '../../components';

class RouterContainer extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <NavigationDesktop />
                <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/profile' component={ProfileContainer} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(
    state => ({
        platformType: state
    }),
    dispatch => ({
        actions: bindActionCreators({}, dispatch)
    })
)(RouterContainer);