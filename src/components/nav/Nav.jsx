import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TiGroupOutline} from 'react-icons/ti'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsArrowDownCircle} from 'react-icons/bs'


export const Nav = () => {

  return (
    <>
        <div className="navigation">
            <a href="#home" >
                <AiOutlineHome className="icon active-nav"/>
            </a>
            <a href="#home" >
                <AiOutlineUser className="icon"/>
            </a>
            <a href="#home" >
                <TiGroupOutline className="icon"/>
            </a>
            <a href="#home" >
                <BiMessageRoundedDots className="icon"/>
            </a>
            <a href="#home" >
                <BsArrowDownCircle className="icon"/>
            </a>
        </div>
    </>
  )
}

let Icons = document.querySelectorAll('.navigation.icon')
Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        changeActive();
        icon.classList.add('active-nav')
    })
})
const changeActive = () =>{ 
    Icons.forEach(icon => {
        icon.classList.remove('active-nav')
    })
}

