import '../css/Work.css'
import title1Logo from '../gif/mouseLogo.gif';
import title2Logo from '../gif/carLogo.gif';
import title3Logo from '../gif/recordLogo.gif';
import title4Logo from '../gif/gumLogo.gif';


const logos = {
    mouse: title1Logo,
    car: title2Logo,
    record: title3Logo,
    gum: title4Logo
};

const gifs = {
    mouse: require('../gif/demomouse.gif'),
    car: require('../gif/democar.gif'),
    record: require('../gif/demorecord.gif'),
    gum: require('../gif/demogum.gif')
}

export default function Work(props) {
    return (
        <section className="work-section">
            <img src={logos[props.title]} alt="Title GIF" className="work-title"/>
            <div className="work-content">
                {props.content}
            </div>
            <img src={gifs[props.title]} alt="Work demo" className="work-img"/>
        </section>
    );
}