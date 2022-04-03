import { tw } from 'twind';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function Article({ articleData }) {
  const article = articleData.data[0].attributes;

  return (
    <div>
      <NextSeo title={article.title + ' | Balluta Barracudas FC'} description={article.title} />
      <Link href="/">
        <a className={tw('p-6')}>{'<'} Back</a>
      </Link>
      <h1 className={tw('text-center m-4 mt-8 text-xl')}>{article.title}</h1>
      <div>
        <img src={article.img.data.attributes.url} className={tw('px-12')} />
      </div>
      <h1 className={tw('text-center m-8 text-l')}>{article.body}</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const data = await fetch(`http://localhost:1337/api/articles?populate=*&[filters][id][$eq]=${context.params.id}`);
  const articleData = await data.json();

  return {
    props: { articleData },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:1337/api/articles`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = articles.data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
