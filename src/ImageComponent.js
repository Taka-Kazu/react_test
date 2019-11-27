import React, { Component } from 'react';

class ImageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            ws: null,
            messages: [],
            server_address: null
        };
    }
    componentDidMount(){
        let server_address = window.location.hostname;
        let ws_address = "ws://" + server_address + ":8080/image";
        this.setState({server_address: server_address})
        let ws = new WebSocket(ws_address);
        ws.onmessage = this.handleMessage.bind(this);
        this.setState({ws: ws});
        console.log(ws_address)
        console.log(ws);
    }
    componentWillUnmount() {
        this.state.ws.close();
    }
    componentDidUpdate() {
        // let node = ReactDOM.findDOMNode(this.refs.messages);
        // window.scrollTo(0, node.scrollHeight);
    }
    handleMessage(event) {
        console.log(event.data);
        let message = event.data;
        // let message = JSON.parse(event.data);
        this.state.messages[0] = message;
        this.setState({
            messages: this.state.messages
        });
    }
    render() {
        console.log(this.state)
        return(
            <div>{this.state.messages}</div>
        )
    }

}
export default ImageComponent
