import { tw } from 'twind';
import Link from 'next/link';

const ResultSection = ({ results }) => (
  <>
    <div
      className={tw(
        'p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5',
      )}
    >
      {results &&
        results.slice(0, 6).map((result) => (
          <div
            className={tw('shadow-lg overflow-hidden p-1 text-center')}
            key={result.attributes.home_team_logo.data.id}
          >
            <div className={tw('flex items-center p-auto')}>
              <div className={tw('flex flex-wrap overflow-hidden')}>
                <div className={tw('w-1/3 overflow-hidden')}>
                  <img
                    style={{
                      maxWidth: '50%',
                      maxHeight: '100%',
                      margin: 'auto',
                      marginTop: '5%',
                    }}
                    src={result.attributes.home_team_logo.data.attributes.url}
                    alt="Home Team"
                  />
                  <div className={tw('text-md mb-2')}>{result.attributes.home_team_name}</div>
                </div>
                <div className={tw('w-1/3 overflow-hidden')}>
                  <div className={tw('inline-flex text-center')}>
                    <span className={tw('font-bold text-3xl mt-4')}>{result.attributes.home_team_goals_scored}:</span>
                    <span className={tw('font-bold text-3xl mt-4')}>{result.attributes.away_team_goals_scored}</span>
                  </div>
                  <div className={tw('text-sm mb-2')}>{result.attributes.fixture_date}</div>
                  <div className={tw('text-sm mb-2')}>{result.attributes.fixture_type} Match</div>
                </div>
                <div className={tw('w-1/3 overflow-hidden')}>
                  <img
                    style={{
                      maxWidth: '50%',
                      maxHeight: '100%',
                      margin: 'auto',
                      marginTop: '5%',
                    }}
                    src={result.attributes.away_team_logo.data.attributes.url}
                    alt="Away Team"
                  />
                  <div className={tw('text-md mb-2')}>{result.attributes.away_team_name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    {results && (
      <Link href="/results">
        <a className={tw('text-sm mr-10 float-right text-default-burgundy mb-6')}>View Results {'>'}</a>
      </Link>
    )}
  </>
);

export default ResultSection;
