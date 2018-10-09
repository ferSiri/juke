import React from 'react';

import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

import axios from 'axios';

class Artists extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            artists: [],
            selectedArtist: {}
        }
    }
componentDidMount(){
    axios.get("/api/artists")
      .then(res => res.data)
      .then(artists => {
        console.log(artists)
        this.setState({ artists: artists })
      }
      );
}
    render(){
        return(
            <div>
                <h3>Artists</h3>
                    <div className="list-group">
                    {
                    this.state.artists.map(artist => {
                        return (
                        <div className="list-group-item" key={artist.id}>
                            {/* Determinaremos donde linkear luego */}
                            <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>   
                        </div>
                        )    
                    })
                    }
                </div>
             </div>
        )
    }
}

export default Artists;