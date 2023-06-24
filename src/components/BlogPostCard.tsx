import Image from "next/image";
import Link from "next/link";
function BlogPostCard({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-gray-300 bg-gray-50 @container hover:bg-white hover:shadow-sm">
      <Link
        href={`/${id}`}
        className="decoration group space-y-2 decoration-indigo-600 decoration-2 hover:text-indigo-600 hover:underline @xs:space-y-6"
      >
        <Image
          className="group group-hover:opacity-90"
          src={`https://picsum.photos/id/${id + 9}/700/400.webp`}
          alt=""
          width={700}
          height={400}
        />
        <h3 className="px-2 text-lg font-bold @xs:px-5 @xs:text-2xl">
          {title}
        </h3>
      </Link>
      <p className="mb-2 line-clamp-3 px-2 pt-0 text-base font-medium text-gray-600 @xs:mb-5 @xs:px-5 @xs:pt-2 @xs:text-lg">
        {description}
      </p>
    </div>
  );
}

export default BlogPostCard;
