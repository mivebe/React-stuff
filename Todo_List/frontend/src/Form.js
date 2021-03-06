import React from 'react';
import { TextField } from '@material-ui/core';









export default class Form extends React.Component {

    state = {
        text: ""
    };

    handlechange = e => {
        const newText = e.target.value;
        this.setState({
            text: newText
        });
    };

    handleKeyDown = e => {
        if (e.key === "Enter") {
            this.props.submit(this.state.text);
            this.setState({ text: "" });
        }
    };

    render() {
        const { text } = this.state;
        return (
            <TextField
                onChange={this.handlechange}
                onKeyDown={this.handleKeyDown}
                label="todo.."
                margin="normal"
                value={text}
                fullWidth
            />
        );
    }
}