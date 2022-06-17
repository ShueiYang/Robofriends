import React from "react";

class Errorboundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorFound : false
        }
    }
    componentDidCatch (error, info) {
        this.setState( {errorFound : true})
    }

    render() {
        if (this.state.errorFound) {
            return <h1> Ooooooops Error Found ! </h1>
        }
        return  this.props.children
    }
}

export default Errorboundry; 