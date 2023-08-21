import './App.css';
import logo from "./BridgeLogo.svg";
import { useState } from 'react';
function App() {
  let webSite = "www.bridgelabz.com";
  let intialValue = {
    name:"",
    nameError:"",
  };
  let url = "https://www.bridgelabz.com";

  const [changeValue,setValue] = useState(intialValue);
  
  const clickEvent=() => {
    console.log("If you click you will be in bridgelabz web site");
    window.open(url,"black");
  };
  const changeInput = (event) => {
    const inputValue = event.target.value;
    const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    const newState = {changeValue };
  
    if (nameRegex.test(inputValue)) {
      newState.name = inputValue;
      newState.nameError = "";
    } else {
      newState.name = inputValue;
      newState.nameError = "Name is Invalid";
    }
  
    setValue(newState);
  };
  return (
    <form>
    <div>
      <div1><h1>Hello {changeValue.name} from Bridgelabz </h1>
      </div1>
      <div2>
      <img src={logo} alt='' onClick={clickEvent} />
      </div2><br></br>
      <div3>
      <input type="text" onChange={changeInput}/>
      </div3>
      <div4>
      <input type="checkbox" onChange={changeInput}/>
      </div4>
      <div5>
      <span>{changeValue.nameError}</span>
      </div5>
      <h2>At Bridgelabz we're community of</h2>
      <h3>Technologists</h3>
      <h3>Thinkers</h3>
      <h3>Builders</h3>
      <p>Working together to keep to keep th Employability of Engineers alive and accessible <br></br>
      so Tech company worldwide can get contributors creator for technology solutions. We believe to act of Human collabration <br></br>
      collabration across at Employablity plateform is essantial to individual growth and our colective feature .<br></br>
      <h4>To know about us visit in our webSite {webSite}</h4> 
      </p>

      
    </div>
    </form>
    
  );
  }

export default App;
