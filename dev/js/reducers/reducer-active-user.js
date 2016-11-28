export default function(state={},action){
  console.log("hello");
switch (action.type) {
  case 'USER_SELECTED':
  return action.payload;
  }
return state;
}
