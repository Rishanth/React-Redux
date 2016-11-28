import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../actions/index'
class Userlist extends React.Component{
createUserList()
{
 return this.props.users.map((user) =>{
   return(

     <li key= {user.id} onClick ={() =>this.props.selectUser(user)}>{user.name}</li>
   );
 });
}
render(){
return(<div><ul>{this.createUserList()}</ul></div>);
}
}
function mapStateToProps(state){
return{
  users:state.users
};
}
function matchDispatchToProps(dispatch){
 return bindActionCreators({selectUser:selectUser},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Userlist);
