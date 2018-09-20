import React, { Component, Fragment } from 'react';
import '../styles.scss';
import ChartView from './chart';
import { getData } from '../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({ count: evt.target.value })
    }

    render() {
        return (
            <div className='col'>
                <ChartView {...this.props} />
                <div className="input-group mb-3 col-sm-4 float-right">
                    <input type="text" className="form-control" value={this.state.count} placeholder="Number of Intervals" onChange={this.handleChange} />
                    <div className="input-group-append">
                        <button onClick={() => this.props.getData(this.state.count)} className="btn btn-outline-secondary" type="button">Load</button>
                    </div>
                </div>
                <p className='lead'>Note: Please Use Chrome for Best Experience</p>
            </div>

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