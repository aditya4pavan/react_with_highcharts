import React, { Component, Fragment } from 'react';
import '../styles.scss';
import { getData } from '../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class HomeView extends Component {

    render() {
        return (
            <Fragment>
                <div>Welcome !!</div>
                <button onClick={() => this.props.getData(10)}>Click</button>
                {this.props.random.toString()}
            </Fragment>
        )
    }
}

const mapProps = ({ random }) => {
    return { random }
}

const mapActions = (dispatch) => {
    return bindActionCreators({ getData }, dispatch);
}

HomeView = connect(mapProps, mapActions)(HomeView);

export default HomeView;