import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <div className="footer">
      <a
        className="github"
        href={"https://github.com/Babailan"}
        target="_blank"
      >
        <VscGithub className="githubIcon" />
      </a>
      <a
        className="facebook"
        href={"https://www.facebook.com/imronnnellll"}
        target="_blank"
      >
        <FaFacebookF className="facebookLogo" />
      </a>
      <a
        className="twitter"
        href={"https://twitter.com/ArigatoED"}
        target="_blank"
      >
        <FaTwitter className="twitterLogo" />
      </a>
      <a
        className="instagram"
        href={"https://twitter.com/ArigatoED"}
        target="_blank"
      >
        <FaInstagram className="instagramLogo" />
      </a>
    </div>
  );
}

export default Footer;
