import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import Header from '@/components/HomeHeader';
import FixtureSection from '@/components/FixtureSection';
import ResultSection from '@/components/ResultSection';
import ArticleSection from '@/components/ArticleSection';

export default function Home({ backgroundImage, fixtures, results, articles, sponsors }) {
  return (
    <Page>
      <NextSeo
        title="Home | Balluta Barracudas FC"
        description="Balluta Barracudas FC website home page"
      />
      <Header backgroundImage={backgroundImage} sponsors={sponsors} />
      <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden">
          <ArticleSection articles={articles} isHomePage={true} />
        </div>
        <div className="w-full overflow-hidden">
          <FixtureSection fixtures={fixtures} isHomePage={true} />
        </div>
        <div className="w-full overflow-hidden">
          <ResultSection results={results} isHomePage={true} />
        </div>
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const photoRes = await fetch(`http://localhost:1337/api/home-background?populate=*`);
  const photoResJson = await photoRes.json();
  const backgroundImage = photoResJson.data.attributes.img.data.attributes.url;

  const fixtureRes = await fetch(`http://localhost:1337/api/fixtures?populate=*`);
  const fixtureJson = await fixtureRes.json();
  const fixtures = fixtureJson.data;

  const resultRes = await fetch(`http://localhost:1337/api/results?populate=*`);
  const resultJson = await resultRes.json();
  const results = resultJson.data;

  const artcleRes = await fetch(`http://localhost:1337/api/articles?populate=*`);
  const articleJson = await artcleRes.json();
  const articles = articleJson.data;

  const sponsorRes = await fetch(`http://localhost:1337/api/sponsors?populate=*`);
  const sponsorJson = await sponsorRes.json();
  const sponsors = sponsorJson.data;

  return {
    props: { backgroundImage, fixtures, results, articles, sponsors },
    revalidate: 1,
  };
};
