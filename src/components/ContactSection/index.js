import { tw, css } from 'twind/css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactSection({ backgroundImage, data }) {
  const headerStyle = css`
    min-height: 30vh;
    max-height: 30vh;
    background-image: url('${backgroundImage}');
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center text-white z-10`)}>
          Contact
        </h1>
      </div>
      <div className={tw(`m-auto text-md center bg-white max-w-6xl p-10`)}>
        <p className={tw()}>Email: {data.data.attributes.email}</p>
        <div className={tw(`flex`)}>
          <Link href={data.data.attributes.facebookLink}>
            <FontAwesomeIcon
              icon={faFacebook}
              width={35}
              className={tw('mr-2 mt-2 hover:cursor-pointer')}
            ></FontAwesomeIcon>
          </Link>
          <Link href={data.data.attributes.instagramLink}>
            <FontAwesomeIcon
              icon={faInstagram}
              width={35}
              className={tw('mt-2 hover:cursor-pointer')}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}
