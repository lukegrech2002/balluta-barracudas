import { useRouter } from 'next/router';
import { tw } from 'twind';
import Link from 'next/link';

export default function Photo({ photo, date, credits }) {
  const router = useRouter();
  if (!router.isFallback && !photo) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <Link href="/">
        <a className={tw('p-6')}>{'<'} Back</a>
      </Link>
      <img src={photo} className={tw('m-auto')} />
      <div className={tw('mx-6')}>Date: {date}</div>
      <div className={tw('mx-6')}>Credits: {credits}</div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const photoid = params.id;
  const results = await fetch(`http://localhost:1337/api/photos?populate=*&[filters][id][$eq]=${photoid}`);
  const previews = await results.json();

  const photo = await previews.data[0].attributes.img.data.attributes.url;
  const date = await previews.data[0].attributes.date.toString();
  const credits = await previews.data[0].attributes.credits;
  return {
    props: { photo, date, credits },
  };
}

export async function getStaticPaths() {
  const results = await fetch('http://localhost:1337/api/photos?populate=*');
  const previews = await results.json();

  return {
    paths:
      previews?.data.map((pic) => ({
        params: { id: pic.id.toString() },
      })) || [],
    fallback: true,
  };
}
