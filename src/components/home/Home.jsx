import './Home.css';
import img from '../../assets/img.png';
import {BsMouse} from 'react-icons/bs'
import { Button } from '../button/Button';

export const Home = () => {
  return (
    <div id='home' className='container home -container'>
        <div className='logo'>
            <div className='main-img'>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
            </div>

            <img src={img} alt='logo'/>
        </div>

        <a href='#footer' className='scroll-down'>
            <hr/>
            <h5>scroll down</h5>
            <BsMouse className="scrol``l"/>
            <hr/>
        </a>

        <h2><span>About Me</span> <br/> 
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi perspiciatis et repellendus deserunt eaque rem in ratione commodi eius reprehenderit. Fuga omnis distinctio non aspernatur vero sunt tempora veritatis eveniet!
            </p>
        </h2>

        <Button/>
    </div>
  );
}

// const toggle = document.querySelector('.main-img');
// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active')
// })