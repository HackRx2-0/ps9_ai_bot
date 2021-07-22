import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Popup from './Popup';
import alanBtn from "@alan-ai/alan-sdk-web";


function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    //setIsOpen(!isOpen);
  }
  const alanBtnContainer = useRef();
  const logoEl = useRef();

  /*alanBtn({
    key: '47b82d48be5793bb94a1efca8688389f2e956eca572e1d8b807a3e2338fdd0dc/stage',
    rootEl: alanBtnContainer.current,
    onCommand: (commandData) => {
      console.log(commandData);
      if (commandData.command === 'command-example') {
        if (logoEl.current) {
           // logoEl.current.style.transform = 'rotate(180deg)';
           setIsOpen(!isOpen);
        }
      }
    }
  }); */

  useEffect(() => {
    alanBtn({
      key: '47b82d48be5793bb94a1efca8688389f2e956eca572e1d8b807a3e2338fdd0dc/stage',
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        console.log(commandData);
        if (commandData.command === 'command-example') {
          if (logoEl.current) {
             // logoEl.current.style.transform = 'rotate(180deg)';
             setIsOpen(!isOpen);
          }
        }
      }
    });
    alanBtn({
      key: '4d292cf043b0a2ea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod',
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        console.log(commandData);
        if (commandData.command === 'command-example') {
          if (logoEl.current) {
             // logoEl.current.style.transform = 'rotate(180deg)';
             setIsOpen(!isOpen);
          }
        }
      }
    });
  }, []);

  return <div className="App">
    <header className="App-header">


    <input
      title="AI Bot"
      ref={logoEl}
      
    />
    
    {isOpen && <Popup
      content={<>
    
     <table>
  <tr>
    <th>Products</th>
    <th>Website Link</th>
    
  </tr>
  <tr>
    <td>Bajaj Health Prime</td>
    <td>https://www.bajajfinserv.in/health-prime-group-care#;</td>
   
  </tr>
  <tr>
    <td>Bajaj Heath Protect</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>
   
  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Health Prime</td>
    <td>https://www.bajajfinserv.in/health-prime-group-care#;</td>
   
  </tr>
  <tr>
    <td>Bajaj Heath Protect</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>
   
  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Health Prime</td>
    <td>https://www.bajajfinserv.in/health-prime-group-care#;</td>
   
  </tr>
  <tr>
    <td>Bajaj Heath Protect</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>
   
  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Health Prime</td>
    <td>https://www.bajajfinserv.in/health-prime-group-care#;</td>
   
  </tr>
  <tr>
    <td>Bajaj Heath Protect</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>
   
  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  <tr>
    <td>Bajaj Booster Plans</td>
    <td>https://www.bajajallianz.com/health-insurance-plans.html</td>

  </tr>
  
</table>
 
     
      </>}
      
      handleClose={togglePopup}
    />}



     
    </header>
    <div ref={alanBtnContainer}></div>
  </div>;
}

export default App;
