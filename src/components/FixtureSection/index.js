import { tw } from 'twind';
import Link from 'next/link';

const FixtureSection = ({ fixtures }) => (
  <>
    <div
      className={tw(
        'p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5',
      )}
    >
      {fixtures &&
        fixtures.slice(0, 4).map((fixture) => (
          <div className={tw('shadow-lg overflow-hidden')} key={fixture.id}>
            <img
              className={tw('w-full')}
              src={fixture.attributes.opponent_logo.data.attributes.url}
              alt="Opponent Team"
            />
            <div className={tw('px-6 py-4')}>
              <div className={tw('font-bold text-md mb-2')}>Vs {fixture.attributes.opponent}</div>
              <div className={tw('text-sm mb-2')}>
                {fixture.attributes.date} {fixture.attributes.time.toString().substring(0, 5)}
              </div>
              <div className={tw('text-sm mb-2')}>{fixture.attributes.location}</div>
              <div className={tw('text-sm mb-2')}>{fixture.attributes.fixture_type} Match</div>
            </div>
          </div>
        ))}
    </div>
    {fixtures && (
      <Link href="/fixtures">
        <a className={tw('text-sm mr-10 float-right text-default-burgundy')}>View Fixtures {'>'}</a>
      </Link>
    )}
  </>
);

export default FixtureSection;
