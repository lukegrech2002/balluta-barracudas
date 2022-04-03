import { tw, css } from 'twind/css';

export default function AboutSection({ backgroundImage, body }) {
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
          About
        </h1>
      </div>
      <div className={tw(`m-auto center bg-white shadow-lg max-w-6xl overflow-hidden relative`)}>
        <p className={tw(`p-10`)}>{body}</p>
      </div>
    </header>
  );
}
