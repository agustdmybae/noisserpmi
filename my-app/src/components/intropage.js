import '../css/Intro.css'
export default function Intropage() {
    return (
        <section className="intro-page">
            <img src={require("../gif/icecream.gif")} alt="Ice Cream GIF" id='ice-gif'/>
            <img src={require("../images/home-intro.png")} alt="Introduction background" id='intro-bg'/>
        </section>  
    );
}