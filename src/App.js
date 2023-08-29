import logo from './logo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
import navBack from '../src/images/Fill 4 (1).png'
import logo1 from '../src/images/Normallogo.png'
import menu from '../src/images/Group 10.png'
import { useState } from 'react';
import mobBack1 from '../src/images/Fill 1 Copy (1).png'
import close from '../src/images/Close.png'
import fill6 from '../src/images/Fill 6.png'
import copy2 from '../src/images/Store (1).png'
import fill4 from '../src/images/Fill 4.png'
import fill41 from '../src/images/Fill 4 (1).png'
import fill12 from '../src/images/Fill 1 Copy 2 (1).png'
import playStoreLogo1 from '../src/images/Group 17.png'
import ss78 from '../src/images/Screenshot (78).png'



    function App() {
      const [draw,setDraw] = useState(false)
      return (
        <div id="App">

<div>
  <div>
  <div id='weFreshWebNew1' style={{position:"relative"}} >
    <img src={bgimage} style={{position:"absolute"}} width={"100%"} height={"750px"} />
    <div id='newNav' >
    
    <Navbar/>

    <br></br>
    <br></br>  <br></br>
    <br></br>  



    <div id='screen1Content' >

      
<span id='screen1Heading' >
<span>
  The smarter way <br></br>
  <b>to order your food</b>
</span>
</span>
<br></br>
<br></br>
<Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter phone number" style={{fontSize:"13px",width:"27%", height:"27px", marginRight:"5px", borderRadius:"2px"}} /> &nbsp;
<button style={{borderStyle:"none", width:"120px", backgroundColor: "#FFD476"}} > Send </button>
</Form>

<br></br>

<span style={{color:"white"}}>
Available on

</span>
<br></br>
<br></br>
<span>
<img src={iphoneLogo} width={40} />
</span>
&nbsp;
&nbsp;

<span>
<img src={playStoreLogo} width={40} />

</span>

<br></br>

<div id='mobImage' >
<img src={mobImage} style={{height:"540px", width:"291px"}} />

</div>

</div>




    </div>


    
    <div id='screen2' >
      <span >
        <h2 style={{textAlign:"center", color:"#68BAE3"}} > We've more <b> services </b> </h2>
      </span>
      <br>
      </br>
      
      <div id='services' >
      <div> <img src={store} /> </div>
      {/* <div><img src={grocery}/></div> */}
      <div><img src={cafe} /></div>
      <div><img src={cafe} /></div>

      <div><img src={food} /></div>
      </div>

    </div>

<br></br>
<br></br>
<br></br>




    <div id='screen3' style={{backgroundImage:`url(${circleBackground})`, backgroundRepeat:"no-repeat", position:"relative", right:"0px"}} >
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


<div  id='newFindus' >
  <div style={{width:"50%", position:"absolute", top:"36%", left:"5%",color:"#68BAE3"}} >

<br></br> <p style={{ fontSize:"200%"}} >Find us in these <b>Area</b> </p><br></br>
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter your area" style={{fontSize:"14px",width:"35%", height:"27px", marginRight:"5px", borderRadius:"2px"}} />
&nbsp;<button style={{borderStyle:"none", width:"95px", backgroundColor: "#FFD476",borderRadius:"4px"}} > Search </button>
</Form>
</div>

<div style={{position:"absolute", width:"65%", height:"90%", right:"0px"}} >

<img src={ss78} style={{position:"absolute", right:"0px", width:"90%", height:"100%"}}  />
</div>


</div>
<br></br>






   


  <div id='screen5'   >

<br>
</br><br>

</br>

<div id='screen5Text' style={{ position:"relative"}}   >
<img src={circle2} /> 
<div id='onlyText'   >
  <h1 style={{color:"#68BAE3"}} >  Our <b>Partners</b></h1>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
</div>
</div>




<div id='screen5div2'  ></div>
<img src={icons5} id='screen5div2Img' />
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
  <MDBContainer className="mt-5" style={{width:"100%"}}>
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
</div>



<br></br>
<br></br>
<br></br>
<br></br>
<br></br>







<div style={{textAlign:"center", width:"50%", margin:"10px auto"}} >

  <h2 style={{color:"#68BAE3"}} > Still have a question? </h2> <br></br>
  <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <br></br>
  <div style={{display:"flex", justifyContent:"space-evenly", textAlign:"center", width:"50%", margin:"10px auto"}} >
  <div style={{height:"120px", width:"250px", border:"1px solid #EBF7FC"}} >
    <br></br>
    <br></br>

    <b> +92336-2255532 </b>
    <p style={{fontSize:"13px"}} > Lorem ipsum heouu dolor sit amet, incididunt </p>
  </div>
  <div style={{height:"120px", width:"250px", border:"1px solid #EBF7FC"}} >
  <br></br>
  <br></br>

  <b> abc@outlook.com </b>
  
  <p style={{fontSize:"13px"}}> Lorem ipsum dolor sit amet, tempor incididunt </p>

  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>


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

  <div  id='screen8Input' >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter phone number" style={{fontStyle:"prompt",fontSize:"14px",width:"100%", height:"27px", marginRight:"5px", borderRadius:"2px"}} />
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
<div style={{fontWeight:"350"}} >
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adi
</div>

 </div>
<div  ><b>ABOUT</b><br></br> <br></br>
<div style={{fontWeight:"350"}} >
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adi
</div>
</div>
<div style={{fontWeight:"350"}} ><b>HELP</b><br></br> <br></br>
Lorem ipsum <br></br> dolor<br></br> sit amet<br></br> consectetur adi
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
  </div>

    {draw ? 
    <div>
  <div className='wefreshMobile' style={{position:"fixed", backgroundColor:"#68BAE3", width:"100%", height:"100%", top:0, left:0}} >
  <img src={logo1} className='logo' />
   <img onClick={()=>{setDraw(false)}} className='close' src={close}  width={20} />
   
   <div className='drawMenu' >
      <hr></hr>
      Our App
      <hr></hr>
      
      For Business<hr></hr>
      About us<hr></hr>
      English
      <hr></hr> <br></br>
      <button style={{position:"relative", width:"100%", backgroundColor:"#FFD476", borderRadius:"5px", borderStyle:"none", color:"#14243C", fontSize:"25px", fontWeight:"400"}} > Sign up </button>

   </div>

</div>
<div className='wefreshMobileBig' style={{position:"fixed", backgroundColor:"#68BAE3", width:"100%", height:"100%", top:0, left:0}} >
  <img src={logo1} className='logo' />
   <img onClick={()=>{setDraw(false)}} className='close' src={close}  width={20} />
   
   <div className='drawMenu' >
      <hr></hr>
      Our App
      <hr></hr>
      
      For Business<hr></hr>
      About us<hr></hr>
      English
      <hr></hr> <br></br>
      <button style={{position:"relative", width:"100%", backgroundColor:"#FFD476", borderRadius:"5px", borderStyle:"none", color:"#14243C", fontSize:"25px", fontWeight:"400"}} > Sign up </button>

   </div>
</div>
</div>



:
<div>  
    <div className='wefreshMobile'>
      <div>
        <div id='mobNav' >
        <div class="image-container">
      <img src={navBack} alt="Your Image" width={"100%"} height={500} style={{marginTop:"-90px"}}/>
      <div className="logo">
        <img src={logo1} />
  </div>
  <div className='menu' >
        <img src={menu} width={20} onClick={()=>{setDraw(true); console.log(draw)}} />
  </div>



  <div className='heading1' >
    The smarter way <br></br>
    <b>

    <span> to order your food </span>
    </b>
    

  </div>
 
  <br></br>

  <div className='inputs' >
  <div style={{width:"90%", margin:"10px auto"}} >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Phone number" style={{fontSize:"14px",width:"80%", height:"27px", marginRight:"5px", borderRadius:"4px"}} /> &nbsp;
<button style={{borderRadius:"3px",borderStyle:"none", width:"110px", backgroundColor: "#FFD476"}} > Send </button>
</Form>

<br></br>
 <div style={{fontSize:"24px", textAlign:"center", color:"white"}} > Available on
  </div> 
    {/* <span style={{color:"white",  position:"absolute",left:"50%", transform: 'translateX(-50%)', fontSize:"24px"}} > Available on </span> */}
<div>
  </div>
  <br></br>
  
  <div className='logos' >
  <img src={iphoneLogo} width={45}/> &nbsp;  &nbsp;

  <img src={playStoreLogo} width={45} />
    


  </div>
  </div>
  </div>
  <br>
  </br>
 
</div>
<div>
  <img src={mobBack1} style={{position:"relative", top:"-200px", opacity:"0.5"}} />
  </div>
  
    <br></br>
    <div style={{ position: "relative", height: "450px", width: "70%", left: "15%", top:"-300px" }}>
  <img src={mobImage} id='normalIphoneNew' />
  <img src={fill6} style={{ position: "absolute", width:"120%", top: "80%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -1 }} />
</div>

        </div>


<div>

  <div style={{position:"relative", top:"-150px",textAlign:"center", fontSize:"26px", color:"#68BAE3"}} >
    We've more <b>services</b>
    <br></br>
    <br></br>

      <div className='slider' >
      <Swiper
      spaceBetween={10}
      slidesPerView={1.7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      
    </Swiper>
    
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ position: "relative", height: "500px", width: "70%", left: "13%" }}>
  <img src={blackIphone} id='blackIphoneNew' />
  <img src={fill6} style={{ position: "absolute", width:"120%", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -1 }} />
</div>
<br></br>
<div style={{textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>
  <br></br>

  <div style={{ backgroundColor:"#EBF7FC",textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px", borderRadius:"14px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>
  <br></br>
  <div style={{textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>

  <br></br> <br></br>
  <div> Find us in these <b>Area</b> <br></br> <br></br>
  
  <div style={{width:"90%", margin:"10px auto"}} >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter your area" style={{fontStyle:"prompt",fontSize:"22px",width:"80%", marginRight:"5px", borderRadius:"7px"}} /> &nbsp;
<button style={{borderRadius:"7px",borderStyle:"none", width:"130px", backgroundColor: "#FFD476"}} > Search </button>
</Form>
</div>
   </div>






  </div>
  </div>




  <div id='till420px' >
  <div>


    <img src={fill1} width={320} style={{position:"relative", right:"-25%"}} />
    <img src={fill4} width={320} style={{position:"relative", left:"2%", top:"-220px"}} />
    <img src={boyWorking} style={{width:"90%", position:"relative",top:"-580px", left:"15%"}}/> 

     </div>

<div>
  <img src={fill12} style={{width:"100%", position:"relative", bottom:"290px"}} />
  <div>
    <div style={{color:"#68BAE3",position:"relative", bottom:"600px",textAlign:"center", fontSize:"30px"}} >

      Our <b>Partners</b> <br></br>
      <span style={{color:"#868E95", textAlign:"left"}} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
      </span>
    </div>
  </div>
</div>

</div>












  
<div id='after420px' >

  
  <div>
  <img src={ss78} style={{ width:"100%", position:"relative"}}/>


     </div>

<div>
  <img src={fill12} style={{width:"100%", position:"relative", bottom:"-50px", height:"600px"}} />
  <div>
    <div style={{color:"#68BAE3",position:"relative", bottom:"450px",textAlign:"center", fontSize:"188%"}} >

      Our <b>Partners</b> <br></br>
      <span style={{color:"#868E95", textAlign:"left"}} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
      
      </span>
    </div>
  </div>
</div>

</div>







  <div>
    <img src={icons5} style={{position:"relative", bottom:"370px", width:"100%"}} />
  </div>


<div>
<div style={{color:"#68BAE3",position:"relative", bottom:"250px"}} >
<div style={{fontSize:"30px", textAlign:"center"}} >

Got questions? <br></br>
</div>
<br></br>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center"}} >
Perfect, we've got answers!
</div>

<div className='qnaMob' >
<MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="How to get started?">
          <span style={{color:"#68BAE3"}} >This is the first item's accordion body.</span> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What to do next?">
          <span style={{color:"#68BAE3"}}>This is the second item's accordion body.</span> <br></br>  
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Do you have an office?">
          <span style={{color:"#68BAE3"}}>This is the third item's accordion body.</span> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div style={{fontSize:"30px", textAlign:"center"}} >

Still have a question? <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>
</div>


<div style={{textAlign:"center", fontSize:"22px"}} >
  <br></br>
  <div style={{width:"90%", border:"1px solid lightgray", borderRadius:"10px", height:"200px", position:"relative", left:"5%", marginTop:"25px"}} >
  <br></br>
  <br></br>
 
  <span style={{color:"#14243C", fontSize:"28px", fontWeight:"500"}}> +92336-2255511 </span> <br></br>
 <div style={{color:"#868E95"}} > Lorem ipsum dolor sit amet, consectetur </div> 
  </div>


  <div style={{width:"90%", border:"1px solid lightgray", borderRadius:"10px", height:"200px", position:"relative", left:"5%", marginTop:"25px"}}>
 
  <br></br>
  <br></br>
 
  <span style={{color:"#14243C", fontSize:"28px", fontWeight:"500"}}> +92336-2255511 </span> <br></br>
  <div style={{color:"#868E95"}} > Lorem ipsum dolor sit amet, consectetur </div> 

  </div>
</div>

  </div>
  </div>
  <div style={{backgroundColor:"#F2F9FF", width:"100%", height:"600px", position:"relative", bottom:"120px"}} >
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

  <div style={{fontSize:"30px", textAlign:"center", color:"#68BAE3"}} >

Ready to <b>Get the app</b> <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"23px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>
<br></br>
<div>
  <img src={appleSign} width={200} /> <br></br>
  <img src={googleSign} width={200} style={{marginTop:"15px"}} />


</div>
</div>
    
<br></br>

     
  </div>

  

  <div style={{fontSize:"30px", textAlign:"center", color:"#68BAE3"}} >

<b>WeFresh</b> for business <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>

</div>
<br></br>

<div style={{width:"90%", margin:"10px auto"}} >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Phone number" style={{fontStyle:"prompt",fontSize:"22px",width:"80%", marginRight:"5px", borderRadius:"7px"}} /> &nbsp;
<button style={{borderRadius:"7px",borderStyle:"none", width:"130px", backgroundColor: "#FFD476"}} > Send </button>
</Form>
</div>






      </div>
      
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div style={{backgroundColor:"#F2F9FF", width:"100%", height:"1080px", fontSize:"18px"}}>
  <img src={wefresh} width={150} style={{position:"relative",top:"50px", left:"20px"}}/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div style={{position:"relative",left:"7%", marginTop:"25px", marginTop:"28px"}} >
  <b>SERVICE AREA</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div>
  <div style={{position:"relative",left:"7%", marginTop:"28px"}} >
  <b>ABOUT</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div><div style={{position:"relative",left:"7%", marginTop:"28px"}} >
  <b>HELP</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div>

  <br></br>
  <br></br>

    <div style={{textAlign:"center", color:"#868E95", fontSize:"20px"}} >
      Available on <br></br> <br></br>
      <span>
  <img src={iphoneLogo} width={55} />
</span>
&nbsp;
&nbsp;

<span>
<img src={playStoreLogo1} width={55} />

</span>



    </div>
    <br></br>
    <hr></hr>
    <div style={{textAlign:"center", color:"#868E95", fontSize:"20px"}} >
    © 2020 WeFresh. All Rights Reserved.
      </div>
      </div>
  </div>







  <div>  
    <div className='wefreshMobileBig'>
      <div>
        <div id='mobNav' >
        <div class="image-container">
      <img src={navBack} alt="Your Image" width={"100%"} height={"700px"} style={{marginTop:"-90px"}}/>
      <div className="logo">
        <img src={logo1} />
  </div>
  <div className='menu' >
        <img src={menu} width={20} onClick={()=>{setDraw(true); console.log(draw)}} />
  </div>



  <div className='heading1' >
    The smarter way <br></br>
    <b>

    <span> to order your food </span>
    </b>
    

  </div>
 
  <br></br>

  <div className='inputs' >
  <div id='inputsNew' >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Phone number" style={{fontSize:"14px",width:"80%", height:"27px", marginRight:"5px", borderRadius:"4px"}} /> &nbsp;
<button style={{borderRadius:"3px",borderStyle:"none", width:"110px", backgroundColor: "#FFD476"}} > Send </button>
</Form>
<br></br>
<div>
    <span style={{color:"white",  position:"absolute",left:"50%", transform: 'translateX(-50%)', fontSize:"24px"}} > Available on </span>
  </div>
  <br></br>
  <br></br>
  <div className='logosBig' >
  <img src={iphoneLogo} width={45}/> &nbsp;  &nbsp;

  <img src={playStoreLogo} width={45} />
    


  </div>
  </div>
  </div>
  <br>
  </br>
 
</div>
<div>
  <img src={mobBack1} style={{position:"relative", top:"-200px", opacity:"0.5"}} />
  </div>
 
    <br></br>
    <div id='div1New'>
  <img src={mobImage} id='mob1New'  />
  <img src={fill6} id='mobBackNew'  />
</div>

        </div>


<div>

  <div id='div2New' >
    We've more <b>services</b>
    <br></br>
    <br></br>

      <div className='slider' >
      <Swiper
      spaceBetween={10}
      slidesPerView={1.7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      <SwiperSlide><img src={copy2} /></SwiperSlide>
      
    </Swiper>
    
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div id='div'>
  <img src={blackIphone} id='img2New'  />
  <img src={fill6} id='back2New'  />
</div>
<br></br>
<br></br>

<div style={{textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>
  <br></br>

  <div style={{ backgroundColor:"#EBF7FC",textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px", borderRadius:"14px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>
  <br></br>
  <div style={{textAlign:"left", width:"80%", left:"10%", position:"relative", fontSize:"26px", padding:"20px"}} >
Lorem ipsum dolor <br></br>
<span style={{color:"#868E95", fontSize:"20px"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
</span>
  </div>

  <br></br> <br></br>
  <div> Find us in these <b>Area</b> <br></br> <br></br>
  
  <div id='div4New' >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Enter your area" style={{fontStyle:"prompt",fontSize:"22px",width:"80%", marginRight:"5px", borderRadius:"7px"}} /> &nbsp;
<button style={{borderRadius:"7px",borderStyle:"none", width:"130px", backgroundColor: "#FFD476"}} > Search </button>
</Form>
</div>
   </div>






  </div>
  </div>


  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <img src={ss78} id='img4New' />
   

     </div>

<div>
  <img src={fill12} id='back4New' />
  <div>
    <div id='div5New' >

      Our <b>Partners</b> <br></br>
      <span style={{color:"#868E95", textAlign:"left"}} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.
      </span>
    </div>
  </div>
</div>

  <div>
    <img src={icons5} style={{position:"relative", bottom:"370px", width:"100%"}} />
  </div>


<div>
<div style={{color:"#68BAE3",position:"relative", bottom:"250px"}} >
<div style={{fontSize:"30px", textAlign:"center"}} >

Got questions? <br></br>
</div>
<br></br>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center"}} >
Perfect, we've got answers!
</div>

<div className='qnaMob' >
<MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="How to get started?">
          <span style={{color:"#68BAE3"}} >This is the first item's accordion body.</span> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What to do next?">
          <span style={{color:"#68BAE3"}}>This is the second item's accordion body.</span> <br></br>  
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Do you have an office?">
          <span style={{color:"#68BAE3"}}>This is the third item's accordion body.</span> <br></br> 
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div style={{fontSize:"30px", textAlign:"center"}} >

Still have a question? <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>
</div>


<div style={{textAlign:"center", fontSize:"22px"}} >
  <br></br>
  <div style={{width:"90%", border:"1px solid lightgray", borderRadius:"10px", height:"200px", position:"relative", left:"5%", marginTop:"25px"}} >
  <br></br>
  <br></br>
 
  <span style={{color:"#14243C", fontSize:"28px", fontWeight:"500"}}> +92336-2255511 </span> <br></br>
 <div style={{color:"#868E95"}} > Lorem ipsum dolor sit amet, consectetur </div> 
  </div>


  <div style={{width:"90%", border:"1px solid lightgray", borderRadius:"10px", height:"200px", position:"relative", left:"5%", marginTop:"25px"}}>
 
  <br></br>
  <br></br>
 
  <span style={{color:"#14243C", fontSize:"28px", fontWeight:"500"}}> +92336-2255511 </span> <br></br>
  <div style={{color:"#868E95"}} > Lorem ipsum dolor sit amet, consectetur </div> 

  </div>
</div>

  </div>
  </div>
  <div style={{backgroundColor:"#F2F9FF", width:"100%", height:"600px", position:"relative", bottom:"120px"}} >
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

  <div style={{fontSize:"30px", textAlign:"center", color:"#68BAE3"}} >

Ready to <b>Get the app</b> <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"23px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>
<br></br>
<div>
  <img src={appleSign} width={200} /> <br></br>
  <img src={googleSign} width={200} style={{marginTop:"15px"}} />


</div>
</div>
    
<br></br>

     
  </div>

  

  <div style={{fontSize:"30px", textAlign:"center", color:"#68BAE3"}} >

<b>WeFresh</b> for business <br></br> <br></br>
</div>
<div style={{color:"#868E95", fontSize:"20px" , textAlign:"center", width:"80%", position:"relative",left:"10%"}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. <br></br>

</div>
<br></br>

<div id='div6New' >
  <Form style={{display:"flex"}} >
<Form.Control type="email" placeholder="Phone number" style={{fontStyle:"prompt",fontSize:"22px",width:"80%", marginRight:"5px", borderRadius:"7px"}} /> &nbsp;
<button style={{borderRadius:"7px",borderStyle:"none", width:"130px", backgroundColor: "#FFD476"}} > Send </button>
</Form>
</div>






      </div>
      
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div style={{backgroundColor:"#F2F9FF", width:"100%", height:"1080px", fontSize:"18px"}}>
  <img src={wefresh} width={150} style={{position:"relative",top:"50px", left:"20px"}}/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div style={{position:"relative",left:"7%", marginTop:"25px", marginTop:"28px"}} >
  <b>SERVICE AREA</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div>
  <div style={{position:"relative",left:"7%", marginTop:"28px"}} >
  <b>ABOUT</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div><div style={{position:"relative",left:"7%", marginTop:"28px"}} >
  <b>HELP</b> <br></br> <br></br>
  <div style={{color:"#868E95", lineHeight:"30px"}} >
  ipsum dol <br></br>
  Lorem ipsum  <br></br>
   ipsum dol <br></br>
  Lorem Lorem dol <br></br>
    </div>
   

  </div>

  <br></br>
  <br></br>

    <div style={{textAlign:"center", color:"#868E95", fontSize:"20px"}} >
      Available on <br></br> <br></br>
      <span>
  <img src={iphoneLogo} width={55} />
</span>
&nbsp;
&nbsp;

<span>
<img src={playStoreLogo1} width={55} />

</span>



    </div>
    <br></br>
    <hr></hr>
    <div style={{textAlign:"center", color:"#868E95", fontSize:"20px"}} >
    © 2020 WeFresh. All Rights Reserved.
      </div>
      </div>
  </div>
    </div>
    </div>
  }
    

    </div>

  );
}
export default App;
