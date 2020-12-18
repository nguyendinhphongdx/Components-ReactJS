import { Button } from 'react-bootstrap';
import logo from './logo192.png';
function HeaderComponent(){
    return(
        <div className="Header-Component">
            <div className="header-left">
                <div className="picture-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="name-web jtf-al-center">
                    BKAV UPDATE
                </div>
            </div>
            <div className="header-right jtf-al-center">
                <Button>Logout</Button>
            </div>
        </div>
    );
}
export default HeaderComponent;
