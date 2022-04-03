import { tw } from 'twind';

const FixturePage = ({ fixtures }) => (
  <div
    className={tw(
      'p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5',
    )}
  >
    {fixtures &&
      fixtures.slice(0, 4).map((fixture) => (
        <div
          style={{
            maxWidth: '20rem',
            maxHeight: '30rem',
            overflow: 'hidden',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          }}
          key={fixture.id}
        >
          <img
            className={tw('w-full')}
            src={fixture.attributes.opponent_logo.data.attributes.url}
            alt="Opponent Team"
          />
          <div className={tw('px-6 py-4')}>
            <div className={tw('font-bold text-md mb-2')}>Vs {fixture.attributes.opponent}</div>
            <div className={tw('text-sm mb-2')}>
              Date: {fixture.attributes.date} {fixture.attributes.time}
            </div>
            <div className={tw('text-sm mb-2')}>{fixture.attributes.location}</div>
            <div className={tw('text-sm mb-2')}>{fixture.attributes.fixture_type} Match</div>
          </div>
        </div>
      ))}
  </div>
);

export default FixturePage;
