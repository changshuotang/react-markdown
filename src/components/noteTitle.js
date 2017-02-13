import React from 'react';
import ReactMarkdown from 'react-markdown';
import './noteTitle.css';

class NoteTitle extends React.Component {

  constructor(props) {
    super(props);

    this.clickTitle = this.clickTitle.bind(this);
  }

  clickTitle() {
    this.props.clickTitle(this.props.title);
  }

  render() {
    return (
      <div className="titles-container" onClick={this.clickTitle}>
        <p className="titles">{this.props.notes[this.props.title][0]}</p>
      </div>
    )
  }
}

export default NoteTitle;