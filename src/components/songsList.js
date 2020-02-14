import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongsList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return (
              <div className="container">
              <div className="row" key={song.title}>
              <div className="col-md-4" >
               <div>{song.title}</div>
               </div>
              <div className="col-md-2">
              <button className="btn btn-sm btn-success" onClick={()=>this.props.selectSong(song)}>
                Select
            </button>
              </div>
              
              </div>
              </div>
            );
        })
    }
    render(){
       // console.log(this.props);
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {songs:state.songs};
};
export default connect(mapStateToProps,{selectSong})(SongsList);