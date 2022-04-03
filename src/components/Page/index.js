import Head from 'next/head';
import Navigation from '@/components/Navbar';
import { tw } from 'twind';
import Footer from '../Footer';

const Page = ({ children }) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      <div className={tw('mt-20')}>{children}</div>
    </div>
    <Footer />
  </div>
);

export default Page;
