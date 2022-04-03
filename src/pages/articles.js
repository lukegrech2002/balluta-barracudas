import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import ArticlePage from '@/components/ArticlePage';

export default function Articles({ articles }) {
  return (
    <Page>
      <NextSeo
        title="Articles | Balluta Barracudas FC"
        description="Balluta Barracudas FC articles"
      />
      <ArticlePage articles={articles} />
    </Page>
  );
}

export const getStaticProps = async () => {
  const articleRes = await fetch(`${process.env.CMS_URL}/api/articles?populate=*`);
  const articleJson = await articleRes.json();
  const articles = articleJson.data;

  return {
    props: { articles },
    revalidate: 1,
  };
};
