import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Can from '../../can';

const Menu = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate()

  return (
    <Can role={"admin" || "user"} perform="menu:view"
      yes={() => (
        <div className="header__toggle">
          <FontAwesomeIcon icon={faX} size="1x" onClick={onClick} />
          <ul>
            <li>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </li>
            <li>
              <button >Orders</button>
            </li>
            <Can role="admin" perform="products:add"
              yes={() => (<li><button onClick={() => navigate("/addProduct")} >Add product</button>   </li>
              )}
            />
            <Can role="user" perform="users:get"
              yes={() => (<li><button onClick={() => navigate("/users")} >Users</button>   </li>
              )}
            />
          </ul>
        </div>
      )} />
  )
}

export default Menu