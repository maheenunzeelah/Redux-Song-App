import React from 'react';
import SongsList from './songsList';
import SongsDetails from './songsDetails';
const App=()=> {
  return (
    <div className="container jumbotron" >
    <center><h2>Songs App</h2></center>
    <br /><br />
    <div className="row">
     <div className="col-md-6" >
     <SongsList />
     </div>
     <div className="col-md-6">
     <SongsDetails />
    </div>
     </div>
    </div>
  );
}

export default App;
