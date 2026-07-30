import {FC, memo} from 'react';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer className="site-footer">
    <div>
      <p className="site-footer__wordmark">Elio Koka</p>
      <p className="site-footer__tagline">Robotics systems, automation, and test.</p>
    </div>
    <nav aria-label="Footer navigation">
      <a href="mailto:kokaelio@msu.edu">Email</a>
      <a href="https://www.linkedin.com/in/elio-koka">LinkedIn</a>
      <a href="https://github.com/ekoka99">GitHub</a>
      <a href="/Resume-site/Elio_Koka_Senior_Systems_Integration.pdf">Résumé</a>
    </nav>
    <p className="site-footer__meta">
      © {currentYear} Elio Koka · Built from <a href="https://github.com/tbakerx/react-resume-template">React Resume</a>
    </p>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
