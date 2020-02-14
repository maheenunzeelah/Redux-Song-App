// Action creator
export const selectSong=(song)=>{
    //returning an action
    return{
      type:'SONG_SELECTED',
      payload: song
    };
}