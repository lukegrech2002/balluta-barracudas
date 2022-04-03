import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import Images from '../components/ImageDetail';
import { tw } from 'twind';

export default function Gallery({ photos }) {
  return (
    <Page>
      <NextSeo
        title="Gallery | Balluta Barracudas FC"
        description="Gallery of Balluta Barracudas FC"
      />
      <section className={tw("overflow-hidden text-gray-700")}>
        <div className={tw("container px-5 py-2 mx-auto lg:pt-12 lg:px-32")}>
          <div className={tw("flex flex-wrap -m-1 md:-m-2")}>
            {photos &&
              photos.map((photo) => (
                <div className={tw("flex flex-wrap w-1/3")}>
                  <div className={tw("w-full p-1 md:p-2")}>
                    <Images
                      key={photo.id}
                      thumbnailUrl={photo.attributes.img.data.attributes.url}
                      title={photo.name}
                      id={photo.id}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

export const getStaticProps = async () => {
  const photoRes = await fetch(`http://localhost:1337/api/photos?populate=*`);
  const photoResJson = await photoRes.json();
  const photos = photoResJson.data;

  return {
    props: { photos },
    revalidate: 1,
  };
};
