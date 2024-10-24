import React from "react";
import "./footer.css";
import { locations } from "../data/locationsData";
import { usefulLinks } from "../data/usefulLinksData";
import FooterNavItem from "../components/FooterNavItem";
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>Movie</span>
              </a>
              <p>
                Movie is a movie streaming platform that provides a wide range
                of movies and TV shows for users to watch and enjoy. With a
                user-friendly interface and a vast library of content, Movie
                offers a convenient and enjoyable way to stay entertained.
              </p>
              <div className="social-links mt-3">
                <a href="/" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="/" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="/" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="/" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Movies</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Pudong <br />
                Shanghai
                <br />
                China <br />
                <br />
                <strong>Phone:</strong> +86 17671203920
                <br />
                <strong>Email:</strong> youngwhenball@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Movie</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">Owen</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
