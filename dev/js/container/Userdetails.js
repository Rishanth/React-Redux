import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions/index'
class Userdetails extends React.Component{
render(){
  console.log('sds',this.props.users);
return(<div><img src = {this.props.users.profile}/>
  <h1>{this.props.users.id}</h1></div>);
}
}
function mapStateToProps(state){
return{
  users:state.Activeuser
};
}
/*function matchDispatchToProps(dispatch){
 return bindActionCreators({selectUser:selectUser},dispatch)
}*/
export default connect(mapStateToProps)(Userdetails);
