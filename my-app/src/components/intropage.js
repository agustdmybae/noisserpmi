import '../css/Intro.css'
export default function Intropage() {
    return (
        <section className="intro-page">
            <img src={require("../images/home-intro.png")} alt="Introduction background" id='intro-bg'/>
        </section>  
    );
}