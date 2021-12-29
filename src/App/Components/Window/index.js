import React from "react";
import { Rnd } from "react-rnd";
import {connect} from "react-redux";

import { killTask, setInactive, updateWindow } from "../../Stores/TaskManager/taskManager";

import "./style.css";

class Window extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            size: this.props.size || null,
            position: this.props.position || null,
            title: this.props.title,
            content: this.props.content,
            pid: this.props.pid
        }
    }
    getTitle = () =>
    {
        return this.state.title;
    }
    getContent = () =>
    {
        return this.state.content;
    }
    closeWindow = () =>
    {
        this.props.killTask(this.props.pid);
    }
    hideWindow = () =>
    {
        console.log("whut")
        this.props.setInactive(this.props.pid);
    }
    handleResize = (e, direction, ref, delta, position) =>
    {
        let size = {width: ref.offsetWidth, height: ref.offsetHeight};
        this.setState({size, position});
        console.log(">>1", position)
        this.props.updateWindow({pid: this.props.pid, position, size});
        
    }
    onDragStop = (node, position) =>
    {
        this.setState({position});
        this.props.updateWindow({pid: this.props.pid, position});
    }
    render()
    {
        return (
            <Rnd className="window"
                onResize={this.handleResize}
                onDragStop={this.onDragStop}
                size={this.state.size}
                position={this.state.position}
                enableUserSelectHack={true}
                dragHandleClassName="title-bar">
                <div className="title-bar">
                    <div className="title-bar-text">{this.getTitle()}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={()=>this.hideWindow()}></button>
                        <button aria-label="Close" onClick={()=>this.closeWindow()}></button>
                    </div>
                </div>
                <div className="window-body">
                    {this.getContent()}
                </div>
            </Rnd>
        );
    }
}

export default connect(null, {killTask, setInactive, updateWindow })(Window);