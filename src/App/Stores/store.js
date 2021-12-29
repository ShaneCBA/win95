import { configureStore } from '@reduxjs/toolkit'
import taskManager from './TaskManager/taskManager'
import fileManager from './FileManager/files'

export default configureStore({
  reducer: {
    taskManager,
    fileManager
  },
})