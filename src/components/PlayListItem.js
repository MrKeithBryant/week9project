import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
     const {song} = this.props;
     console.log(song);
     return (
        <div className='listItem'>
         <tbody>
         <tr>
         <td>
         <h5>User: <small>{song.userName}</small></h5>
         <h5>Artist/Band: <small>{song.songArtist}</small></h5>
         <h5>Title: <small>{song.songTitle}</small></h5>
         <h5>Notes: <small>{song.songNotes}</small></h5>
         </td>
         </tr>
         </tbody>
        </div>
  )}
}
