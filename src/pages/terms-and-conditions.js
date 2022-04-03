import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import { tw } from 'twind';

export default function TermsAndConditions({ termsAndConditions }) {
  return (
    <Page>
      <NextSeo
        title="Terms and Conditions | Balluta Barracudas FC"
        description="Balluta Barracudas FC website terms and conditions"
      />
      <div className="w-full overflow-hidden">
        <h1 className={tw('text-gray-900 text-xl text-center font-medium m-6')}>Terms and Conditions</h1>
        <p className={tw('text-md font-small mx-8 mb-6')}>{termsAndConditions.attributes.terms}</p>
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const termsAndConditionsRes = await fetch(`${process.env.CMS_URL}/api/terms-and-condition`);
  const termsAndConditionsJson = await termsAndConditionsRes.json();
  const termsAndConditions = termsAndConditionsJson.data;

  return {
    props: { termsAndConditions },
    revalidate: 1,
  };
};
