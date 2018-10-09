import React from 'react';

import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

class Esqueleto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          anda: 're piola'
        }
      }
      render(){
        return <div>
            <div className="albums">
                <h3>Albums</h3>
                <div className="row">
                {
                    this.props.albums.map((album) => {
                        return <div key={album.name} className="col-xs-4">
                           <Link to={`/albums/${album.id}`} onClick={() => this.props.handleClick(album.id)} className="thumbnail" >
                           <img src={album.imageUrl} />
                           <div className="caption">
                               <h5>
                               <span>{album.name}</span>
                               </h5>
                               <small>{album.songs.length}</small>
                           </div>
                           </Link>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    }
}

export default Esqueleto;

