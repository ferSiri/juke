import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class SingleAlbum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            funciona: 'ok',
            selectedSong:1,
            selectedAlbum: {}
        }
      }
    componentDidMount(){
       axios.get(`/api/albums/${this.props.id}`)
      .then(res => res.data)
      .then(album => {
        this.setState({ selectedAlbum: album })
      }
      );
    }  
    render(){
        return (
            <div className="album">
                    <div>
                    <h3>{this.state.selectedAlbum.name}</h3>
                    <img src={this.state.selectedAlbum.imageUrl} />
                    </div>
                    <table className='table'>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Song Name</th>
                        <th>Artist Name</th>
                        <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                         !this.state.selectedAlbum.songs ? null: this.state.selectedAlbum.songs.map((song)=>{
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
                </div>)
    }
}

export default SingleAlbum;