import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDogs } from '../actions/dogActions';

class Dogs extends Component {

    componementDidMount() {
        fetch('http://localhost:3001/dogs')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>fff</div>
        );
    }
}

const mapStateToProps = state => {
    // dogs: state.dogs.plural,
}

export default connect(mapStateToProps, { fetchDogs })(Dogs);