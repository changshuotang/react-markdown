import React from 'react';
import NoteTitles from './components/noteTitles';
import NoteMarkdown from './components/noteMarkdown';
import './app.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem('notes'));

    this.clickTitle = this.clickTitle.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deleteCurrentNote = this.deleteCurrentNote.bind(this);
  }

  clickTitle(key) {
    let notesNew = this.state;
    notesNew["currentState"] = key;
    this.setState(notesNew);
  }

  updateNote(text) {
    let myObject = this.state[this.state.currentState];
    myObject[1] = text;
    let newObject = {};
    newObject[this.state.currentState] = myObject;
    this.setState(newObject);
    window.localStorage.setItem('notes', JSON.stringify(this.state) );
  }

  updateTitle(text) {
    let myObject = this.state[this.state.currentState];
    myObject[0] = text;
    let newObject = {};
    newObject[this.state.currentState] = myObject;
    this.setState(newObject);
    window.localStorage.setItem('notes', JSON.stringify(this.state) );
  }

  deleteCurrentNote() {
    let notesNew = this.state;
    delete this.state[this.state.currentState];
    notesNew['currentState'] = null;
    this.setState(notesNew);
    window.localStorage.setItem('notes', JSON.stringify(this.state) );
  }

  addNew() {
    let notesNew = this.state;
    let uid = this.generateUUID();
    notesNew[uid] = ["Untitled", "", "date"];
    this.setState(notesNew);
    this.clickTitle(uid);
    window.localStorage.setItem('notes', JSON.stringify(this.state) );
  }

  generateUUID() {      // source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  render() {
    let markdownNote = this.state.currentState !== null ?
      <NoteMarkdown deleteCurrent={this.deleteCurrentNote} titleUpdate={this.updateTitle} title={this.state[this.state.currentState][0]} notes={this.states} update={this.updateNote} markdown={this.state[this.state.currentState][1]} /> :
      <div></div>;
    return (
      <div>
        <NoteTitles addNew={this.addNew} notes={this.state} clickTitle={this.clickTitle} />
        {markdownNote}
        <div className="add-new btn-circle raised" onClick={this.addNew}>New</div>
      </div>
    )
  }
}

export default App;