import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="footer-info">
          <div className="footer-info-col-1">
            <h4>Customer Services</h4>
            <span className="footer-info-head-border"></span>
            <div>
              <p>
                Aempor tellus dictumst lectus earum necessitatibus consequunturo
              </p>
            </div>
            <span className="footer-location">LOCATION</span>
            <p>754 Road, 36 Floor New York, USA</p>
          </div>
          <div className="footer-info-col-2">
            <h4>Our Shop</h4>
            <span className="footer-info-head-border"></span>
            {/* <div> */}
            <p>Wooden Chair</p>
            <p>Plastic Table</p>
            <p>Pendent light</p>
            <p>Bottle</p>
            {/* </div> */}
          </div>
          <div className="footer-info-col-3">
            <h4>Useful Link</h4>
            <span className="footer-info-head-border"></span>
            {/* <div> */}
            <p>About Us</p>
            <p>Term of Service</p>
            <p>Privacy Policy</p>
            <p>Shipping</p>
            {/* </div> */}
          </div>
          <div className="footer-info-col-4">
            <h4>Social Profile</h4>
            <span className="footer-info-head-border"></span>
            <div>
              <p>
                Download from <br /> App Store
              </p>
            </div>
            <span>
              <img src="assets/footer-app-img-1.png" />
            </span>
            <span>
              <img src="assets/footer-app-img-2.png" />
            </span>
          </div>
        </div>
        <div className="footer-icon">
          <div className="footer-icon-social">
            <span>
              <FacebookIcon fontSize="small" />
            </span>
            <span>
              <InstagramIcon fontSize="small" />
            </span>
            <span>
              <TwitterIcon fontSize="small" />
            </span>
            <span>
              <YouTubeIcon fontSize="small" />
            </span>
            <span>
              <PinterestIcon fontSize="small" />
            </span>
          </div>
          <span className="footer-rights">
            All right reserved @CopyRight & designed by Egens Lab
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
