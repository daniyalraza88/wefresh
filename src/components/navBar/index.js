import logo from '../../images/Normallogo.png'

function Navbar (){
    return <div> 
        <div>
            <span id='logo' >
                <img src={logo}  />
            </span>
            <ul>
                <li>Our App</li>
                <li>For Business</li>
                <li>About Us</li>
                <li>English</li>
            </ul>
        </div>
         </div>
}

export default Navbar