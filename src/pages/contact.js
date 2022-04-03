import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import ContactSection from '@/components/ContactSection';

export default function Contact({ backgroundImage, data }) {
  return (
    <Page>
      <NextSeo
        title="Contact | Balluta Barracudas FC"
        description="Balluta Barracudas FC contact details"
      />
      <ContactSection backgroundImage={backgroundImage} data={data} />
    </Page>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.CMS_URL}/api/contact`);
  const data = await res.json();

  const photoRes = await fetch(`${process.env.CMS_URL}/api/contact-background?populate=*`);
  const photoResJson = await photoRes.json();
  const backgroundImage = photoResJson.data.attributes.img.data.attributes.url;

  return {
    props: { backgroundImage, data },
    revalidate: 1,
  };
};
