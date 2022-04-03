import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import FixturePage from '@/components/FixturePage';

export default function Fixtures({ fixtures }) {
  return (
    <Page>
      <NextSeo
        title="Fixtures | Balluta Barracudas FC"
        description="Balluta Barracudas FC fixtures"
      />
      <div className="w-full overflow-hidden">
        <FixturePage fixtures={fixtures} />
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const fixtureRes = await fetch(`${process.env.CMS_URL}/api/fixtures?populate=*`);
  const fixtureJson = await fixtureRes.json();
  const fixtures = fixtureJson.data;

  return {
    props: { fixtures },
    revalidate: 1,
  };
};
