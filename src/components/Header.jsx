
import './style.css';
function Header(){
    return(
        <div className="container-lg">
            <div className="header-wrapper d-flex justify-content-lg-between align-items-center">
                <div>
                    logo
                </div>  
                <ul class="links">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>TEAM</a></li>
                    <li><a>WORK</a></li>
                    <li><a>CLIENTS</a></li>
                    <li><a>CONTACT US</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;