import React from 'react';

import ReactDOM from 'react-dom';


class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          anda: 're piola'
        }
      }
    render(){
        return <div className="row">
               <footer>
                   <div className={this.props.currentSong>0?"":"invisible"}>
                        <div className="pull-left">
                        <button onClick={() => this.props.start(this.props.currentSong-1)} className="btn btn-default">
                            <span className="glyphicon glyphicon-step-backward"></span>
                        </button>
                        <button onClick={() => this.props.start(this.props.currentSong)} className="btn btn-default">
                            <span className="glyphicon glyphicon-play"></span>
                        </button>
                        <button onClick={() => this.props.start(this.props.currentSong+1)} className="btn btn-default">
                            <span  className="glyphicon glyphicon-step-forward"></span>
                        </button>
                        </div>
                        <div className="bar">
                        <div className="progress">
                        <div className="progress-bar" style={{width: `${this.props.progress}%`}}></div>
                        </div>
                        </div>
                    </div>
                    </footer>
                </div>
    }
}

export default Footer;



