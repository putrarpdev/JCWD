import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "../components/richText";

export async function fetchArticle() {
  try {
    const data = await client.getEntries<TypeBlogFields>();

    return data.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function ArticleSection() {
  const articles = await fetchArticle();
  return (
    <div className="md:h-screen">
      <div className="md:h-3/4">
        {articles &&
          <div className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-full md:h-full">
            <img className="object-cover w-fit h-full md:h-100 md:w-screen md:rounded-none md:rounded-s-lg" src={`https:${articles[1].fields.articleImage.fields.file.url}`} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-2 text-xl font-bold tracking-tight text-black">Featured News</p>
              <p className="mb-2 text-3xl font-bold tracking-tight  text-black">{articles[1].fields.title}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{articles[1].fields.summary}</p>
              <button className="btn shadow-xl rounded-full w-36 h-12 bg-oona-purple text-white hover:bg-oona-purple">Read More</button>
            </div>
          </div>
        }
      </div>

      <div className="flex flex-wrap pt-5 pb-5 gap-x-14 gap-y-5 item justify-start md:pt-5">
        {articles?.map((article) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-96 object-cover" src={`https:${article.fields.articleImage.fields.file.url}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}