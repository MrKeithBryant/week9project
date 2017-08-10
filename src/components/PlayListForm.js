import React from 'react';

export default class PlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    };
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
    })
    .then(response => {
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
          <form onSubmit={this.addToList}>
            <div className="form-list">
              <label htmlFor='username'>User name:</label>
                <input type="text" onChange={this.handleChange('userName')} value={userName} name='userName' className='form-control' />
        </div>

        <div className='form-list'>
          <label htmlFor='songArtist'>Artist/Band:</label>
            <input type='text' onChange={this.handleChange('songArtist')} value={songArtist} name='songArtist' className='form-control' />
        </div>

          <div className='form-list'>
            <label htmlFor='songTitle'>Song Title:</label>
              <input type="text" onChange={this.handleChange('songTitle')} vallue={songTitle} name='songTitle' className='form-control' />
          </div>

          <div className='form-list'>
            <label htmlFor='songNotes'>Notes:</label>
              <textarea type='text' onChange={this.handleChange('songNotes')} value={songNotes} name='songNotes' className='area-control' rows='5' columns='3' />
          </div>

          <input type='submit' className='btn btn-primary' />
        </form>
      </div>
    )
  }
}
