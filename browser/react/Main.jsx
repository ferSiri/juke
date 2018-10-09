import React from 'react';

import ReactDOM from 'react-dom';

import Sidebar from './Sidebar.jsx';

import Footer from './Footer.jsx';

import Esqueleto from './Esqueleto.jsx';

import fakeAlbums from './Albums.jsx';

import axios from 'axios';

import SingleAlbum from './SingleAlbum.jsx';

import { Route } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import { render } from 'react-dom';

import Artists from './Artists';

import Artist from './Artist';

const audio = document.createElement('audio');


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          anda: 're piola',
          albums:[],
          selectedAlbum:{},
          currentSong: 0,
          isPlaying:false,
          progress:0
        }
        this.handleClick= this.handleClick.bind(this)
        this.resetSelected= this.resetSelected.bind(this)
        this.start= this.start.bind(this)
      }
    handleClick(albumId){
      axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => {
        console.log(album)
        this.setState({ selectedAlbum: album })
      }
      );
    }
    resetSelected(){
      this.setState({selectedAlbum:{}})
    }
    start(songId){
      if(this.state.isPlaying==false&&this.state.currentSong<1){
        audio.src = '/api/songs/'+songId+'/audio';
        audio.load();
        audio.play();
        this.setState({currentSong:songId,isPlaying:true});
      }else if(this.state.isPlaying==false&&this.state.currentSong===songId){
        audio.play();
        this.setState({isPlaying:true});
      }else if(this.state.isPlaying==true&&this.state.currentSong!==songId){
        audio.src = '/api/songs/'+songId+'/audio';
        audio.load();
        audio.play();
        this.setState({isPlaying:true,currentSong:songId});
      }else if(this.state.isPlaying==true&&this.state.currentSong===songId){
        audio.pause();
        this.setState({isPlaying:false})
      } 
    }
    componentDidMount(){
      axios.get('/api/albums')
      .then(response => {
        return response.data;
      })
      .then(data => {

        this.setState({albums:data})
      })
      .catch(err => {
        console.error('error');
        console.error(err);
      });
      audio.addEventListener('timeupdate', () => {
        this.setState({
          progress: 100 * audio.currentTime / audio.duration
        });
      });

    }

    render(){
    return  <div>
            <Sidebar resetSelected={this.resetSelected}/>
            <div className="col-xs-10">
            <switch>
            <Route exact path="/albums" render={() => <Esqueleto handleClick={this.handleClick} albums={this.state.albums} /> } />
            <Route exact path="/albums/:id" render={(props) => <SingleAlbum id={props.match.params.id}  currentSong={this.state.currentSong} start={this.start} album={this.state.selectedAlbum} />} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/artists/:id" render={(props) => <Artist id={props.match.params.id} start={this.start} />} />
            <Route exact path="/" render={() => (<Redirect to="/albums" />)} />
            </switch>
            </div>
            <Footer progress={this.state.progress} start={this.start} currentSong={this.state.currentSong}/>
            </div>
    }
    
};



export default Main;