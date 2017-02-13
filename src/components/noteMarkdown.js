import React from 'react';
import ReactMarkdown from 'react-markdown';
import './noteMarkdown.css';
import Textarea from 'react-textarea-autosize';

class NoteMarkdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };

    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEditBtn() {
    this.setState( {edit: !this.state.edit });
  }

  handleChange(event) {
    this.props.update(event.target.value);
  }

  handleTitleChange(event) {
    this.props.titleUpdate(event.target.value);
  }

  render() {
    let textarea = this.state.edit ? 
      <Textarea className="text-area" onChange={this.handleChange} value={this.props.markdown}/>:
      <ReactMarkdown className="markdown markdown-text" source={this.props.markdown} />

    let editBtn = this.state.edit ?
    <div className="edit-button btn-circle raised caution" onClick={this.handleEditBtn}>Editing</div> :
    <div className="edit-button btn-circle raised" onClick={this.handleEditBtn}>Edit</div>

    let titlearea = this.state.edit ?
      <textarea className="title-area" rows="1" onChange={this.handleTitleChange} value={this.props.title}/> :
      <h1 className="markdown">{this.props.title}</h1>


    return (
      <div className="markdown-area">
        {titlearea}
        {textarea}
        {editBtn}
        <div className="delete-button btn-circle raised gray" onClick={this.props.deleteCurrent}>Delete</div>
      </div>
    )
  }
}

export default NoteMarkdown;