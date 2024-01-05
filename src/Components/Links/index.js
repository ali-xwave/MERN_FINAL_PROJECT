import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
    const { link, title } = props;
    return (
        <div>
            <li className="nav-item">
                <Link className="nav-link" to={link}>
                    {title}
                </Link>
            </li>
        </div>
    )
}

export default Links