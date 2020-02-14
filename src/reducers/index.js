import {combineReducers} from 'redux';

//songsReducer
const songsReducer=()=>{
    return [
        {title:'Unbreakable', duration:'4:45'},
        {title:'Thunder', duration:'3:19'},
        {title:'Believer', duration:'4:15'}
    ];
}

//selectedSongReducer
 const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type=='SONG_SELECTED'){
        return action.payload
    } 
    else
     return selectedSong;
 }

 export default combineReducers({
     songs: songsReducer,
     selectedSong: selectedSongReducer
 });