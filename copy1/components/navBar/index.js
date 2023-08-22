import logo from '../../images/Normallogo.png'

function Navbar (){
    return <div> 
        <div>
            <span id='logo'  >
            <br></br>

                <img src={logo}  />
            </span>
            <br></br>
            <ul style={{fontWeight:"500"}} id='navBarUl'>
                

                 <li>Our App</li>
                
                <li>For Business</li>
                <li>About Us</li>
                <li>English</li>
            </ul>
        </div>
         </div>
}

export default Navbar