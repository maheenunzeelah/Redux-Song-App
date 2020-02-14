import React from 'react';
import {connect} from 'react-redux';

const SongsDetails=({selectedSong})=>{
    if(!selectedSong){
        return <div>Select a song</div>
    }
    return(
      <div>
          <h3>Details</h3>
          <div>title:{selectedSong.title}</div>
          <div>duration:{selectedSong.duration}</div>
      </div>
    );
}
const mapStateToProps=(state)=>{
    return{
    selectedSong:state.selectedSong
    }
}
export default connect(mapStateToProps)(SongsDetails);