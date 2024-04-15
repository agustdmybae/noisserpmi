import '../css/Work.css'

export default function Work() {
    return (
        <section className="work-section">
            <img src={require("../gif/mouseLogo.gif")} alt="Title GIF" className="work-title"/>
            <div className="work-content">
            A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. 
            Touchpads and smartphone screens are used as a substitute for a mouse where desk space is scarce, which are more convenient.
            </div>
            <img src={require("../images/demomouse.png")} alt="Work demo" className="work-img"/>
        </section>
    );
}