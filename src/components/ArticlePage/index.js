import { tw } from 'twind';
import Link from 'next/link';

const ArticlePage = ({ articles }) => (
  <div
    className={tw(
      'p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5',
    )}
  >
    <ul>
      {articles &&
        articles.slice(0, 2).map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.id}`}>
              <div className={tw('shadow-lg overflow-hidden')}>
                <div className={tw('flex justify-center w-full')}>
                  <div className={tw('flex flex-col md:flex-row rounded-lg')}>
                    <img
                      className={tw('w-full h-96 md:h-auto object-cover md:w-48')}
                      src={article.attributes.img.data.attributes.url}
                      alt="Article Image"
                    />
                    <div className={tw('p-6 flex flex-col justify-start')}>
                      <h2 className={tw('text-gray-900 text-xl font-medium mb-2')}>{article.attributes.Title}</h2>
                      <p className={tw('text-gray-700 text-base mb-4')}>
                        {article.attributes.body.substring(0, 200)}...
                        <span className={tw('text-default-burgundy mb-4 hover:cursor-pointer')}> Read More</span>
                      </p>
                      <p className={tw('text-gray-600 text-xs')}>{article.attributes.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

export default ArticlePage;
