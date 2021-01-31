import React from 'react'
import "./End.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function End() {
    return (
        <div className="footer-distributed">
            
                <div class="footer-icons">
                <a href="#"><FacebookIcon /><i class="fa fa-facebook"></i></a>
                <a href="#"><TwitterIcon /><i class="fa fa-twitter"></i></a>
                <a href="#"><LinkedInIcon /><i class="fa fa-linkedin"></i></a>
                <a href="#"><GitHubIcon /><i class="fa fa-github"></i></a>
                </div>    
                <div class="footer-text">
                    <span> About </span> | <span> Contact </span> | <span> Login </span>  
                </div>
                <div className="copy">
                    <h4>&#169; Jennerus2021</h4>
                </div>
                
        </div>
        
    )
}

export default End
