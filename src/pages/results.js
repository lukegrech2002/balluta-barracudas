import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import ResultPage from '@/components/ResultPage';

export default function Results({ results }) {
  return (
    <Page>
      <NextSeo
        title="Results | Balluta Barracudas FC"
        description="Balluta Barracudas FC results"
      />
      <div className="w-full overflow-hidden">
        <ResultPage results={results} />
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const resultRes = await fetch(`http://localhost:1337/api/results?populate=*`);
  const resultJson = await resultRes.json();
  const results = resultJson.data;

  return {
    props: { results },
    revalidate: 1,
  };
};
