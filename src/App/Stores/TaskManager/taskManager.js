import { createSlice } from '@reduxjs/toolkit'

import TextEditor from "../../Components/Window/Applications/TextEditor";

function createTask(payload, pid)
{
  return {...payload, pid}
}

export const taskManagerSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: {},
    lastPID: 0,
    active: []
  },
  reducers: {
    addTask: (state, action) => {
      let newTask = createTask(action.payload, state.lastPID);
      state.tasks[state.lastPID] = newTask;
      state.active.push(state.lastPID);
      state.lastPID++;
    },
    killTask: (state, action) => {
      state.active = state.active.filter(e=>e!=action.payload);
      delete state.tasks[action.payload];
    },
    setActive: (state, action) => {
      let index = state.active.findIndex(e=>e==action.payload)
      if (index != -1)
      {
        //Cut the pid out of the array
        state.active.splice(index, 1);
      }
      state.active.push(action.payload);
    },
    setInactive: (state, action) => {
      let index = state.active.findIndex(e=>e==action.payload)
      if (index != -1)
      {
        //Cut the pid out of the array
        state.active.splice(index, 1);
      }
    },
    updateWindow: (state, action) =>
    {
      console.log(">>", action.payload);
      let pid = action.payload.pid;
      state.tasks[pid].position = action.payload.position || state.tasks[pid].position;
      state.tasks[pid].size = action.payload.size || state.tasks[pid].size;
    },
    openFile: (state, action) =>
    {
      let file = action.payload;
      if (file.type == "shortcut")
      {
        let newTask = createTask(file.content, state.lastPID);
        state.tasks[state.lastPID] = newTask;
        state.active.push(state.lastPID);
        state.lastPID++;
      }
      else
      {
        let newTask = createTask(<TextEditor content={file.content}></TextEditor>, state.lastPID);
        state.tasks[state.lastPID] = newTask;
        state.active.push(state.lastPID);
        state.lastPID++;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTask, killTask, setActive, setInactive, updateWindow } = taskManagerSlice.actions

export default taskManagerSlice.reducer