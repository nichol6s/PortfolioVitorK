import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <nav>
            <Link to='/'>Home</Link>
            <span>|</span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )     
}