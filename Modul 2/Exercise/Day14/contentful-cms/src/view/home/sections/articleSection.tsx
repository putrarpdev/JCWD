import { client } from "@/utils/contentful";
import { TypeBlogFields } from "@/types/contentful";
import Image from "next/image";
import RichText from "../components/richText";

export async function fetchArticle() {
  try {
    const data = await client.getEntries<TypeBlogFields>();
    console.log(data.items);

    return data.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function ArticleSection() {
  const articles = await fetchArticle();
  return (
    <div>
      <div>
        {articles?.map((article) => (
          <div key={article.sys.id}>
            <Image
              src={`https:${article.fields.articleImage.fields.file.url}`}
              alt="image"
              width={720}
              height={720}
            />
            <p className="text-2xl mb-5">
              {article.fields.title}
            </p>
            <p className="text-1xl mb-5">
              {`${article.fields.author} - ${article.fields.createdAt}`}
            </p>
            <p className="text-1xl">
              {article.fields.summary}
            </p>
            <div className="pb-10">
              <RichText document={article.fields.details} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}