import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    horse,
    gator
};



function AnimalShow({ type }) {

    const handleClick = () => {
        setClicks(clicks + 1);
        setDisplayHeart({display:"block"});
    };

    const [clicks, setClicks] = useState(0);
    const [displayHeart,setDisplayHeart] = useState({display:"none"});

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[type]} />
            <div style={displayHeart}>
                <img className="heart" alt="heart"
                    src={heart}
                    style={{ width: "50px" }}
                />
                <span className="click-counter">{clicks}</span>
            </div>
        </div>
    );
}


export default AnimalShow;