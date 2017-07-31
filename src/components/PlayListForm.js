import React from 'react';

export default class PlayListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }

  handleChange = key => {
    return (event) => {
      let state = {};
      state[key] = event.target.value
      this.setState(state);
    }
  }


  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }



    render () {
      const
        {userName, songArtist, songTitle, songNotes} = this.state;

      return (
        <div className='col-md-6'>
        <div className="form-control">
        <form onSubmit={this.addToList}>
        <label htmlFor = 'username'>User name:</label>
        <input  type="text"
                className="form-control"
                id="username"
                placeholder="Name or User Name"
                onChange = {this.handleChange('userName')}/>

                <label htmlFor = 'songArtist'>Artist/Band:</label>
                <input type="text"
                       className="form-control"
                       id="songArtist"
                       placeholder="Artist or Band Name"
                       onChange = {this.handleChange('songArtist')}/>

                      <label htmlFor = 'songTitle'>Song Title:</label>
                      <input type="text"
                             className="form-control"
                             id="songTitle"
                             placeholder="Song Title"
                             onChange = {this.handleChange('songTitle')}/>

                            <label htmlFor = 'songNotes'>Notes about Song:</label>
                            <input type="text"
                                   className="form-control"
                                   id='songNotes'
                                   onChange = {this.handleChange('songNotes')}/>

                            <input type='submit' />



        </form>
        </div>
        </div>
      )
    }
}
//userName, songArtist, songTitle, and songNotes
