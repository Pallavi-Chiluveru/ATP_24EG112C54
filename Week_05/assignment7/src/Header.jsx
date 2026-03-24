import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <span>Home</span>
        <span>About Author</span>
        <span>About this Project</span>
      </div>

      <div className="right">
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Header;