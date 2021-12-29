import { createSlice } from '@reduxjs/toolkit'

/*
fileId
fileName
content
type: [text, shortcut]
*/
export const FileManagerSlice = createSlice({
    name: 'files',
    initialState: {
        files: {0:{fileId: 0, title: "test", content: "This is a test"}},
        lastFileId: 0
    },
    reducers: {
        addFile: (state, action) => 
        {
            state.lastFileId++;
            state.files[state.lastFileId] = {...action.payload , fileId: state.lastFileId};
        },
        modifyFile: (state, action) =>
        {
            let fileId = action.payload.fileId
            state.files[fileId].content = action.payload.content; 
        },
        deleteFile: (state, action) =>
        {
            delete state.files[action.payload]
        }
    }
})

export const { addFile, modifyFile, deleteFile } = FileManagerSlice.actions

export default FileManagerSlice.reducer