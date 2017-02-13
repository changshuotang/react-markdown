import React from 'react';
import ReactMarkdown from 'react-markdown';
import NoteTitle from './NoteTitle';
import './noteTitles.css';

class NoteTitles extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    let arr = [];
    for (let key in this.props.notes){
      if (key != "currentState"){
        arr.push(key);
      }
    }

    return (
      <div className="scrollable">
        {arr.map((value, index) => {
          return <NoteTitle title={value} notes={this.props.notes} clickTitle={this.props.clickTitle}/>;
        })}
      </div>
    )
  }
}

export default NoteTitles;