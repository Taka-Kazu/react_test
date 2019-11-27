import React, { Component } from 'react';

class ImageComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            ws: null,
            message: "",
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
        let message = JSON.parse(event.data);
        console.log(message['image'].length)
        let img = new Image();
        img.src = "data:image/jpeg;base64," + message['image']
        document.getElementById('img1').src = img.src;
        this.setState({
            message: message['image'].length
        });
    }
    render() {
        return(
            <img id="img1" width="640" height="480"></img>
        )
    }

}
export default ImageComponent
