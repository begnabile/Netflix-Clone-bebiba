import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Social Media Icons */}
        <div className="footer-social">
          <ul>
            <li><FacebookOutlinedIcon /></li>
            <li><YouTubeIcon /></li>
            <li><InstagramIcon /></li>
          </ul>
        </div>

        {/* Top Text */}
        <p className="footer-top">
          Questions? Call <span>000-800-919-1694</span>
        </p>

        {/* Links Section */}
        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>

          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>

          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Language Selector */}
        <div className="footer-language">
          <select>
            <option>English</option>
            <option>Amharic</option>
          </select>
        </div>

        {/* Bottom Text */}
        <p className="footer-bottom">Netflix Clone © 2026</p>

      </div>
    </footer>
  );
}

export default Footer;