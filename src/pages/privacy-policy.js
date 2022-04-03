import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import { tw } from 'twind';

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <Page>
      <NextSeo
        title="Privacy Policy | Balluta Barracudas FC"
        description="Balluta Barracudas FC website privacy policy"
      />
      <div className={tw("w-full overflow-hidden")}>
        <h1 className={tw('text-gray-900 text-xl text-center font-medium m-6')}>Privacy Policy</h1>
        <p className={tw('text-md font-small mx-8')}>{privacyPolicy.attributes.policy}</p>
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const privacyPolicyRes = await fetch(`http://localhost:1337/api/privacy-policy`);
  const privacyPolicyJson = await privacyPolicyRes.json();
  const privacyPolicy = privacyPolicyJson.data;

  return {
    props: { privacyPolicy },
    revalidate: 1,
  };
};
