import { useSelector, useDispatch } from 'react-redux'

import Taskbar from "./Components/Taskbar";
import Window from './Components/Window';

import "./style.css";

function App() {
  const tasks = useSelector((state) => state.taskManager.tasks)
  const active = useSelector((state) => state.taskManager.active)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div id="Windows">
        {active.map((pid)=>{
          let window = tasks[pid];
          console.log(pid);
          return <Window key={pid} pid={pid} title={window.title} content={window.content} position={window.position} size={window.size}>
          </Window>
        })}
        {/* {Object.entries(tasks).map(([pid, window])=>{
          return <Window key={pid} pid={pid} title={window.title} content={window.content}>
          </Window>
        })} */}
      </div>
      <Taskbar/>
    </div>
  );
}

export default App;
