import React from "react";
import classes from "./Footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        <div>
          <div className={classes.footerInfo}>
            <h3>Developed by</h3>
            <h1>Kaan Yardımcı</h1>
          </div>
          <h5 className={classes.copyright}>
            <span>
              <CopyrightIcon />
            </span>
            <p>{year}</p>
          </h5>
        </div>
        <div className={classes.socialSide}>
          <h1>Socails</h1>
          <ul className={classes.socials}>
            <li>
              <a
                className={classes.github}
                href="https://github.com/kaanyrd"
                target="blank"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/in/kaanyardimci/"
                target="blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                className={classes.instagram}
                href="https://www.instagram.com/kaanyrd/"
                target="blank"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                className={classes.twitter}
                href="https://twitter.com/Kaanyrd1"
                target="blank"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                className={classes.yahoo}
                href="mailto:kaan.yardimci@yahoo.com.tr?subject=Hello Kaan%20!"
              >
                <EmailIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
