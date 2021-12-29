import Tray from "./Tray";

import { connect } from 'react-redux'
import { addTask, killTask, setActive } from '../../Stores/TaskManager/taskManager'

import { Logo } from '@react95/icons';
import "./style.css";
import React from "react";
import StartMenu from "./StartMenu";

function StartIcon(props) {
    return (
        <button onClick={props.onClick} className="taskicon" id="starticon">
            <Logo variant="32x32_4"></Logo>
            <span className="startText">Start</span>
        </button>
    )
}

const mapStateToProps = state => {
  const {tasks, active} = state.taskManager || {};
  return {tasks, active};
}

class Taskbar extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      startMenuVisible: false
    };
  }

  setActive(pid)
  {
    this.props.setActive(pid)
  }

  fillTaskBar()
  {
    return Object.entries(this.props.tasks).map(([pid, window]) => 
      <button className="taskicon" onClick={()=>this.setActive(pid)}>{window.title}</button>
    )
  }

  toggleStartMenu()
  {
    this.setState({startMenuVisible: !this.state.startMenuVisible});
  }

  getTaskbarTop()
  {
    return document.getElementById("taskbar").getBoundingClientRect().height;
  }

  render()
  {
    return (
      <div id="taskbar" className="frame">
        {
          (this.state.startMenuVisible) ? <StartMenu bottom={this.getTaskbarTop()}></StartMenu> : ""
        }
        <StartIcon onClick={this.toggleStartMenu.bind(this)}></StartIcon>
        <div>
          {this.fillTaskBar()}
        </div>
        <Tray></Tray>
      </div>
    );
  }
}

export default connect(mapStateToProps, {addTask, setActive})(Taskbar);