import profile from '../images/profile.png';
import mail from '../images/Mail.png';

export default function Info() {
    return (
        <div className="info_con">
            <img src={profile} alt="" />
            <h2>Oluwatobi Amure</h2>
            <p>Frontend Developer</p>
            <a>zettaiflex.tech</a>
            <button>
                <img src={mail} alt="" />Email</button>
        </div>
    )
}