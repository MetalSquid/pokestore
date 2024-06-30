import { ReactComponent as HambergerSVG } from '../../assets/hamburger-menu.svg';
import './navigation.styles.css';


function Navigation() {
    return (  
<div className='navigation-container'>

      <div className="hamburger-icon-container">
        <HambergerSVG />
      </div>
   
</div>
    );
}

export default Navigation;