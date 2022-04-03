import { tw, css } from 'twind/css';

export default function Header({ backgroundImage, sponsors }) {
  const headerStyle = css`
    min-height: 60vh;
    max-height: 80vh;
    overflow: hidden;
    background-image: url('${backgroundImage}');
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;

  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1 className={tw(`text-white font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-center z-10`)}>
          Balluta Barracudas FC
        </h1>
      </div>
      <div className={tw(`flex justify-center w-full absolute bottom-12`)}>
        <div className={tw(`w-full`)}>
          <div className={tw('grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2')}>
            {sponsors &&
              sponsors.map((sponsor) => (
                <img className={tw(`w-20 sm:w-40 m-auto`)} key={sponsor.id} src={sponsor.attributes.sponsor.data.attributes.url}></img>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
