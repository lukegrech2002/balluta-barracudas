import { tw, css } from 'twind/css';
import { useState } from 'react';
import Link from 'next/link';

const secondaryLinks = [
  {
    label: `Home`,
    href: `/`,
  },
  {
    label: `About`,
    href: `/about`,
  },
  {
    label: `Gallery`,
    href: `/gallery`,
  },
  {
    label: `Articles`,
    href: `/articles`,
  },
  {
    label: `Contact`,
    href: `/contact`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-white`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`pt-4 pb-3 border-t border-default-yellow h-200`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link) => (
          <Link key={`mobile-${link.label}`} href={link.href}>
            <a className={tw(`block px-3 py-2 text-base font-small text-center text-white`)}>{link.label}</a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const navStyle = css`
    background: #8c141c;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  `;

  return (
    <nav className={tw(navStyle)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-20`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-12 w-12`)} src="logo.png" alt="logo" width={52} height={52} />
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Link href="/">
                <a className={tw('text-white px-3 py-2 text-md font-medium flex items-center border-b-2 border-transparent hover:border-default-yellow transition duration-300')}>Home</a>
              </Link>
              <Link href="/about">
                <a className={tw('text-white px-3 py-2 text-md font-medium flex items-center border-b-2 border-transparent hover:border-default-yellow transition duration-300')}>About</a>
              </Link>
              <Link href="/gallery">
                <a className={tw('text-white px-3 py-2 text-md font-medium flex items-center border-b-2 border-transparent hover:border-default-yellow transition duration-300')}>Gallery</a>
              </Link>
              <Link href="/articles">
                <a className={tw('text-white px-3 py-2 text-md font-medium flex items-center border-b-2 border-transparent hover:border-default-yellow transition duration-300')}>Articles</a>
              </Link>
              <Link href="/contact">
                <a className={tw('text-white px-3 py-2 text-md font-medium flex items-center border-b-2 border-transparent hover:border-default-yellow transition duration-300')}>Contact</a>
              </Link>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
