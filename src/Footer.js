import React from 'react'
import "./Menubar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div>
            <footer class="footer-distributed">
                
                <div class="footer-left">

                <h3>JENNERUS</h3>
                
                <p class="footer-links">
                <a href="#">Home</a><br/>
                
                <a href="#">Blog</a><br/>
                
                <a href="#">Pricing</a><br/>
                
                <a href="#">About</a><br/>
                
                <a href="#">Faq</a><br/>
                
                <a href="#">Contact</a>
                </p>

                <p class="footer-company-name">jennerus &copy; 2021</p>
                </div>

                <div class="footer-center">

                <div>
                <i class="fa fa-map-marker"></i>
                <p><span>New Delhi</span> India, Earth, Milkyway</p>
                </div>

                <div>
                <i class="fa fa-phone"></i>
                <p>+123456789</p>
                </div>

                <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">jennerus@mail.com</a></p>
                </div>

                </div>

                <div class="footer-right">

                <p class="footer-company-about">
                <span>About the company</span>
                Company of Piyush Boss ! Buy things here ..
                </p>

                <div class="footer-icons">

                <a href="#"><FacebookIcon /><i class="fa fa-facebook"></i></a>
                <a href="#"><TwitterIcon /><i class="fa fa-twitter"></i></a>
                <a href="#"><LinkedInIcon /><i class="fa fa-linkedin"></i></a>
                <a href="#"><GitHubIcon /><i class="fa fa-github"></i></a>

                </div>

                </div>

            </footer>

        </div>
    )
}

export default Footer
