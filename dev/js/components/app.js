import React from 'react';
import Userlist from '../container/Userlist';
import Userdetails from '../container/Userdetails';
require('../../scss/style.scss');
const App = () => {
  console.log("here in app",Userdetails);
return(
 <div>
 <h2>Username List:</h2>
 <Userlist />
 <hr/>
 <h4> User Details:</h4>
 <Userdetails />
  </div>
)
};
export default App;
