import { tw } from 'twind';

const ResultPage = ({ results }) => (
  <div
    className={tw(
      'p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5',
    )}
  >
    {results &&
      results.map((result) => (
        <div
          style={{
            maxWidth: '60rem',
            maxHeight: '10rem',
            overflow: 'hidden',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            textAlign: 'center',
            padding: '0.5em',
          }}
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
                  alt="Opponent Team"
                />
                <div className={tw('text-md mb-2 ')}>{result.attributes.away_team_name}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default ResultPage;
