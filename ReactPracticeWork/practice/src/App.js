// import {User} from './Hello_World_Class_Component/User';
// import User from './Hello_World_Class_Component/User';
// import State from './React_State_Example/State';
// import State from './ReactStateUsingClassComponent/State';
import Student from './React_Props_In_Function_Component/Student';

import  './App.css';

function App() {
  return (
    <div className="App">
      <Student name={"Jilan"} other={{gender:'Mail',address:'dont know',age:'22',email:'jameuljilan@gmail.com'}}/>
      <Student name={"Jilan"} other={{gender:'Mail',address:'dont want to write',age:'23',email:'jadsjljdf@gamil.com'}}/>
      <Student name={"Jilan"} other={{gender:'Mail',address:'wait i will tell you',age:'24',email:'jameuakdsfkljdasl@.com'}}/>
    </div>
  );
}

export default App;
