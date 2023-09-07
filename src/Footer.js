import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="upperFooter">
          <div className="media">
            <ul>
              <li class="footerHeading">ABOUT</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Technology Used</li>
            </ul>
            <ul>
              <li class="footerHeading">HELP</li>
              <li>Payment</li>
              <li>FAQ</li>
              <li>Report</li>
            </ul>
            <ul>
              <li class="footerHeading">POLICY</li>
              <li>Term Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="media media2">
            <ul>
              <li class="footerHeading">SOCIAL</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
            <ul>
              <li class="footerHeading">
                DEVELOPER <br /> CONATCT
              </li>
              <li>Phone</li>
              <li>Email</li>
              <li>Github</li>
            </ul>
            <ul>
              <li class="footerHeading">CONATCT US</li>
              <li>
                Address: Postmaster,
                <br /> Bangalore City S.O,
                <br /> Bengaluru, Karnataka,
                <br /> India (IN),
                <br />
                Pin Code:-560002
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="lowerFooter">
          <ul>
            <li> ©2023 aselectronics.com</li>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              alt=""
            />
          </ul>
        </div>
      </footer>
    </>
  );
}
