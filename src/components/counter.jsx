import React, { Component } from "react";

class Counter extends Component {
    // Now it's made a controlled (stateless) component to implement 'Single Source of Truth' pattern

    /* a classic approach for 'binding' event handlers */
    // constructor() {
    //   super(); // Syntax error: 'this' is not allowed before super()
    //   this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // 'componentDidUpdate' hook of the UPDATEing phase
    componentDidUpdate(prevProps, prevState) {
        //console.log("Previous Props", prevProps);
        //console.log("Previous States", prevState);
        /*
        if (prevProps.counter.value === this.props.counter.value) {
            console.log("didn't updated!!!");
        }
        */
    }

    componentWillUnmount() {
        //console.log("Component - Unmount");
    }

    render() {
        //console.log("Counter - Rendered");
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.disableOnZero()}
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDelete(this.props.counter.id)
                        }
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    /* helper methods */
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes +=
            this.props.counter.value === 0
                ? "warning"
                : this.props.counter.value < 0
                ? "danger"
                : this.props.counter.value > 0
                ? "primary"
                : 0;
        return classes;
    }
    formatCount() {
        // object destructuring to read the value property of the 'state'
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    disableOnZero() {
        return this.props.counter.value === 0 ? "disabled" : "";
    }
}

export default Counter;
