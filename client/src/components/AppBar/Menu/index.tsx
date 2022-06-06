import React from 'react'
import { useNavigate} from 'react-router-dom';
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = ({ onClick }: { onClick: () => void }) => {
  const navigate = useNavigate()
  return (
    <div className="header__toggle">
      <FontAwesomeIcon icon={faX} size="1x" onClick={onClick} />
      <ul>
        <li>
          <button onClick={()=> navigate("profile")}>Profile</button>
        </li>
        <li>
          <button >Orders</button>
        </li>

      </ul>
    </div>
  )
}

export default Menu