import {
  FaGithub,
  FaReact,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        <h2>TaskFlow PWA</h2>

        <p>
          Smart Productivity Manager
        </p>

      </div>

      <div className="footer-middle">

        <div className="footer-card">

          <h4>Version</h4>

          <span>v2.0.0</span>

        </div>

        <div className="footer-card">

          <h4>Built With</h4>

          <span>

            <FaReact />

            React + Vite

          </span>

        </div>

        <div className="footer-card">

          <h4>Status</h4>

          <span>

            <FaHeart />

            Production Ready

          </span>

        </div>

      </div>

      <div className="footer-links">

        <a href="#">
          About
        </a>

        <a href="#">
          Privacy
        </a>

        <a href="#">
          Help
        </a>

        <a
          href="https://github.com/Samir-frontend"
          target="_blank"
          rel="noreferrer"
        >

          <FaGithub />

          GitHub

        </a>

      </div>

      <div className="footer-bottom">

        © 2026 TaskFlow PWA • Made with ❤️

      </div>

    </footer>

  );

}
