import React from 'react';

import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

import axios from 'axios';

class Artist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            artists: [],
            selectedArtist: {},
            albums:[],
            songs:[]
        }
    }
componentDidMount(){
    axios.get(`/api/artists/${this.props.id}`)
      .then(res => res.data)
      .then(artist => {
        this.setState({ selectedArtist: artist })
      }
      );
    axios.get(`/api/artists/${this.props.id}/albums`)
    .then(res => res.data)
    .then(albums => {
    this.setState({ albums: albums })
    }
    );
    axios.get(`/api/artists/${this.props.id}/songs`)
    .then(res => res.data)
    .then(songs => {
    this.setState({ songs: songs })
    }
    );
    
}
    render(){
        return(
            <div>
                <div>
                <h3>{this.state.selectedArtist.name}</h3>
                {this.state.albums.map((album)=>{
                    return <Link to={`/albums/${album.id}`} onClick={() => this.props.handleClick(album.id)} key={album.id}><h4>{album.name}</h4></Link>
                })}
                <table className='table'>
                <tbody>
                {this.state.songs.map((song)=>{
                   return <tr className={song.id === this.props.currentSong ? 'active' : ''} key={song.name}>
                    <td>
                        <button onClick={(e)=>{e.stopPropagation();this.props.start(song.id)}} className="btn btn-default btn-xs">
                        <span className={song.id !== this.props.currentSong ? 'glyphicon glyphicon-play' : ''}></span>
                        </button>
                    </td>
                    <td>{song.name}</td>
                    <td>{song.artists[0].name}</td>
                    <td>{song.genre}</td>
                    </tr>
                })
                }
                </tbody>
                </table>
                </div>
               
            </div>
        )
    }
}

export default Artist;