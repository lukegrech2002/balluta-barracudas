import { tw } from 'twind';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const links = [
  {
    label: `About`,
    href: `/about`,
  },
  {
    label: `Contact`,
    href: `/contact`,
  },
  {
    label: `Privacy Policy`,
    href: `/privacy-policy`,
  },
  {
    label: `Terms and Conditions`,
    href: `/terms-and-conditions`,
  },
];

const Footer = () => (
  <footer className={tw(`bg-white pt-14 pb-14 bg-default-burgundy`)}>
    <div className={tw(`max-w-7xl mx-auto px-8`)}>
      <div className={tw(`w-1/2`)}>
        <div className={tw(`mb-6 flex items-center w-full`)}>
          <img className={tw(`h-14 w-14 mr-4`)} src="logo.png" alt="logo" width={48} height={48} />
        </div>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <ul>
                {links.map((link) => (
                  <li className={tw(`text-white text-sm leading-6`)}>
                    <Link key={`mobile-${link.label}`} href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`flex float-right`)}>
        <Link href="https://www.facebook.com/bbfcmalta">
          <FontAwesomeIcon
            icon={faFacebook}
            width={30}
            className={tw('text-white mx-2 hover:cursor-pointer')}
          ></FontAwesomeIcon>
        </Link>
        <Link href="https://www.instagram.com/ballutabarracudas">
          <FontAwesomeIcon
            icon={faInstagram}
            width={30}
            className={tw('text-white mx-2 hover:cursor-pointer')}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
