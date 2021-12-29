import { connect } from 'react-redux';
import Icon from '../../Icon';
import { addTask } from '../../../Stores/TaskManager/taskManager'

import APPS from '../../../apps';

function StartMenu(props)
{
    return (
        <div id="start" className="window" style={{bottom: props.bottom+"px"}}>
            {
                APPS.map(e=>{
                    return <button onClick={()=>props.addTask(e)}>
                        <Icon icon={e.icon}/>
                        {e.title}
                    </button>
                })
            }
            <button onClick={()=>props.addTask({title: "HELLO", content:new Date().getSeconds()})}>CLICK</button>
        </div>
    )
}


export default connect(null, {addTask})(StartMenu);