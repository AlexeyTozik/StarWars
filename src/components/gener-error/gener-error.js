import React, { Component } from "react";
import "./gener-error.css";

export default class ErrorButton extends Component {

    state = {
        stateError: false
    }

    render() {
        if(this.state.stateError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className="gen-err-btn btn btn-danger"
                onClick={() => this.setState({ stateError: true })}>
                Generate error
            </button>
        );
    }
}
