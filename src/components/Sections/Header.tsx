import {FC, memo} from 'react';

export const headerID = 'site-header';

const Header: FC = memo(() => {
  return (
    <header className="site-header" id={headerID}>
      <a className="site-header__wordmark" href="/Resume-site/#hero">
        <span>Elio Koka</span>
        <small>Systems integration</small>
      </a>
      <nav aria-label="Primary navigation" className="site-header__nav">
        <a href="/Resume-site/#resume">Experience</a>
        <a href="/Resume-site/Elio_Koka_Senior_Systems_Integration.pdf">Résumé ↗</a>
        <a href="mailto:kokaelio@msu.edu">Contact</a>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
