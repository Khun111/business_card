import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import Linkedin from "../images/Linkedin.png";
import Facebook from "../images/Facebook.png";
import Github from "../images/Github.png";

export default function Footer() {
  return (
    <footer className="foot_con">
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={Linkedin} alt="" />
      <img src={Github} alt="" />
    </footer>
  );
}
