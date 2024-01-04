import './index.scss';
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const Sidebar = () => (

// creating a navigation bar. 
// logo link will take to '/' aka homepage
// 
<div className = 'navigation-bar'>

    <Link className = 'logo' to= '/'>
        <img src = {Logo} alt = 'logo'/>
    </Link>

</div>



)



export default Sidebar

