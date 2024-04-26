import '../css/Team.css';

export default function TeamPage() {
    return (
        // ref attribute cannot be directly used on a functional component!
        <section className="team-page">
            <img src={require("../images/team.png")} className="team-image" alt="Team introduction"/>
        </section>
    )
}