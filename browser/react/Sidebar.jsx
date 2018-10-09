import React from 'react';

import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          anda: 're piola'
        }
      }
    render(){
        return <div className="col-xs-2">
                    <sidebar>
                        <img src="http://downloadicons.net/sites/default/files/headset-headset-icon-93388.png" className="logo" />
                        <section>
                        <h4 className="menu-item active">
                        <Link to="/albums" onClick={() =>this.props.resetSelected() }>Go to Albums</Link> 
                        <br></br>      
                        <br></br>   
                        <Link to="/artists" onClick={() =>this.props.resetSelected() }>Go to Artists</Link>    
                        </h4>
                        </section>
                    </sidebar>
                </div>
    }
}

export default Sidebar;
