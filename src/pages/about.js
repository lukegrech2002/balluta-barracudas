import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import AboutSection from '@/components/AboutSection';

export default function About({ backgroundImage, data }) {
  const body = data.data.attributes.body;

  return (
    <Page>
      <NextSeo
        title="About | Balluta Barracudas FC"
        description="About Balluta Barracudas FC"
      />
      <AboutSection backgroundImage={backgroundImage} body={body} />
    </Page>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.CMS_URL}/api/about`);
  const data = await res.json();

  const photoRes = await fetch(`${process.env.CMS_URL}/api/about-background?populate=*`);
  const photoResJson = await photoRes.json();
  const backgroundImage = photoResJson.data.attributes.img.data.attributes.url;

  return {
    props: { backgroundImage, data },
    revalidate: 1,
  };
};
