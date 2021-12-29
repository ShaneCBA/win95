import React from "react";
import { connect } from 'react-redux';
import { modifyFile } from '../../../Stores/FileManager/files'
import "./style.css"

const mapStateToProps = state => {
    return {files: state.fileManager.files}
}

class TextEditor extends React.Component
{
    constructor(props)
    {
        super(props);

        let file = this.props.files[props.fileId];
        this.state = {
            content: file.content
        }
    }
    handleModification = (event) =>
    {
        let newValue = event.currentTarget.value
        console.log(">>", newValue);
        this.setState({content: newValue});
        this.props.modifyFile({fileId: this.props.fileId, content: newValue});
    }
    render()
    {
        return (
            <textarea class="textEditor" onChange={this.handleModification} value={this.state.content}></textarea>
        )
    }
}

export default connect(mapStateToProps, {modifyFile})(TextEditor);