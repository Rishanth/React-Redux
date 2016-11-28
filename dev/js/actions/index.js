export const selectUser = (user) =>{
console.log('You are in index.js', user.name);
return{
  type:'USER_SELECTED',
  payload:user
}
};
