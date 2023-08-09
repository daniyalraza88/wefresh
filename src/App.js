import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import mobImage from '../src/images/iPhone_Black.png'
import bgimage from '../src/images/BG.png'
import Navbar from './components/navBar';
import iphoneLogo from './images/Apple.png'
import playStoreLogo from './images/Googleplay.png'
import cafe from '../src/images/Cafe.png'
import food from '../src/images/Food.png'
import grocery from '../src/images/Grocery.png'
import store from '../src/images/Store.png'
import circleBackground from '../src/images/Circle.png'
import blackIphone from '../src/images/iPhone_Black (1).png'
import boyWorking from '../src/images/image.png'
import fill1 from '../src/images/Fill 1.png'
import circle2 from '../src/images/Circle (1).png'
import icons5 from '../src/images/icons5.png'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import appleSign from '../src/images/Button/Apple.png'
import googleSign from '../src/images/Button/Googleplay.png'
import wefresh from '../src/images/WeFresh logo.png'




function App() {
  return (
    <div id="App">
    <div>
    <div style={{backgroundImage:`url(${bgimage})`, backgroundRepeat:"no-repeat", position:"relative"}} id='screen1Container' >
      <div id='screen1' >
        <div id='navBar' >
          <Navbar/>
        </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


      <span id='screen1Heading' >
      <span>
        The smarter way <br></br>
        <b>to order your food</b>
      </span>
      </span>
<br></br>
<br></br>
<Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter phone number" style={{width:"27%", height:"27px", marginRight:"5px", borderRadius:"2px"}} />
<button style={{borderStyle:"none", width:"75px", backgroundColor: "#FFD476"}} > Send </button>
</Form>

<br></br>

<span style={{color:"white"}}>
Available on

</span>
<br></br>
<br></br>
<span>
  <img src={iphoneLogo} width={35} />
</span>
&nbsp;
&nbsp;

<span>
<img src={playStoreLogo} width={35} />

</span>

<br></br>

<div id='mobImage' >
  <img src={mobImage} style={{height:"480px", width:"291px"}} />
</div>


      </div>
    </div>
<br></br>
<br></br>

    <div id='screen2' >
      <span >
        <h2 style={{textAlign:"center", color:"#68BAE3"}} > We've more <b> services </b> </h2>
      </span>
      <br>
      </br>
      
      <div id='services' >
      <div> <img src={store} /> </div>
      <div><img src={grocery} /></div>
      <div><img src={cafe} /></div>
      <div><img src={food} /></div>
      </div>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div id='screen3' style={{backgroundImage:`url(${circleBackground})`, backgroundRepeat:"no-repeat", position:"relative", right:"0px", backgroundSize:"50%"}} >
      <div  >

    <img src={blackIphone} style={{position:"relative", top:"-80px", left:"0px"}} height={600} />
      </div>
<br></br>
      <div id='quickAnswers' >
        <div> <h5>Lorem ipsum dolor sit</h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </div>
        <div> <h5>Lorem ipsum dolor sit</h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </div>
        <div> <h5>Lorem ipsum dolor sit</h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </div>

      </div>

    </div>



<div style={{backgroundImage:`url(${fill1})`, backgroundRepeat:"no-repeat", position:"relative", right:"0px", backgroundPosition:"right", backgroundSize:"300px", height:"50%"}} >

<div id='screen4'   >
  <div id='div1'>
    <br></br> <br></br> <h2>Find us in these <b>Area</b> </h2><br></br>
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter your area" style={{width:"65%", height:"27px", marginRight:"5px", borderRadius:"2px"}} />
&nbsp;<button style={{borderStyle:"none", width:"105px", backgroundColor: "#FFD476"}} > Send </button>
</Form>
   </div>
   <br></br>
  <div id='div2'   >
    <br></br>

    <img src={boyWorking}  />
  </div>


</div>
 

</div>

<br>
</br>
<br>
</br><br>
</br>
<div id='screen5'  >
<div>
<br>
</br><br>
</br>
<div>

  
</div>
<span id='screen5Text' >
<img src={circle2} height={300} style={{position:"relative", left: "50"}} />
<span id='onlyText' >
  <h2>Our <b>Partners</b></h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>

</span>
</span>

</div>

<div id='screen5div2' ></div>
<img src={icons5} />
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<div id='screen6' >
  <span id='headingsScreen6' >

<h2 style={{color:"#68BAE3"}} > Got Questions? </h2> <br></br>
<p> Perfect, we've got answers! </p>
  </span>
  
  <div id='qna' >
  <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="How to get started?">
          <strong>This is the first item's accordion body.</strong> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What to do next?">
          <strong>This is the second item's accordion body.</strong> <br></br>  
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Do you have an office?">
          <strong>This is the third item's accordion body.</strong> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>

  </div>



  <br></br>
  <br></br>
  <br></br>
  <div style={{textAlign:"center"}} >

  <h2 style={{color:"#68BAE3"}} > Still have a question? </h2> <br></br>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <br></br>
  <div style={{display:"flex", justifyContent:"space-evenly", textAlign:"center"}} >
  <div style={{height:"100px", width:"230px", border:"1px solid #EBF7FC"}} >
    <br></br>
    <b> +92336-2255532 </b>
    <p> Lorem ipsum dolor sit amet, incididunt </p>
  </div>
  <div style={{height:"100px", width:"230px", border:"1px solid #EBF7FC"}} >
  <br></br>

  <b> abc@outlook.com </b>
  
  <p> Lorem ipsum dolor sit amet, tempor incididunt </p>

  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>

</div>
<div id='screen7' >
  <br></br>
  <br></br>
  <br></br>

<h2 style={{color:"#68BAE3"}} > Ready to <b> Get the app </b> </h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod ut labore et dolore magna aliqua.</p>
<div style={{margin:"10px auto", width:"30%"}} >
  <img src={appleSign} width={130} />
  <img src={googleSign} width={130} style={{marginTop:"-5px"}} />


</div>
</div>
<br></br>
<br></br>


<div id='screen8' style={{width:"50%", margin:"10px auto", textAlign:"center"}}>
  <h2 style={{color:"#68BAE3"}} > <b>WeFresh</b> for business </h2>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> dolore magna aliqua. </p> 
<br></br>

  <div style={{width:"40%", margin:"10px auto"}} >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter phone number" style={{width:"100%", height:"27px", marginRight:"5px", borderRadius:"2px"}} />
<button style={{borderStyle:"none", width:"100px", backgroundColor: "#FFD476"}} > Send </button>
</Form>
  </div>
  
<br></br>
<br></br>

</div>
<div id='footer' >
  <br></br>
  <br></br>

<div style={{width:"75%", height:"50%", margin:"10px auto", display:"flex", justifyContent:"space-evenly", gridGap:"1px"}} >

<div  > <img src={wefresh} />

 </div>
<div  > 
<b>SERVICE AREA</b> <br></br> <br></br>
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adipisc

 </div>
<div  ><b>ABOUT</b><br></br> <br></br>
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adipisc
</div>
<div  ><b>HELP</b><br></br> <br></br>
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adipisc
</div>

<div>
  Available on
  <br></br> 

  <div style={{margin:"10px auto"}} >
  <img src={iphoneLogo} width={35} /> 
&nbsp;
&nbsp;&nbsp;
<img src={playStoreLogo} width={35} />
  </div>


  
  
  </div> 

</div>

</div>

    </div>
    </div>


  );
}

export default App;
