import logo from '../../images/Normallogo.png'

function Navbar (){
    return <div> 
        <div>
            <span id='logo'  >
            <br></br>

                <img src={logo}  />
            </span>
            <br></br>
            <ul style={{fontWeight:"500", fontSize:"20px", color:"#14243C"}} id='navBarUl'>
                

                 <li>Our App</li> &nbsp;
                <li></li>
                <li>For Business</li> <li></li>
                <li>About Us</li> <li></li>
                <li>English</li>
            </ul>
        </div>
         </div>
}

export default Navbar