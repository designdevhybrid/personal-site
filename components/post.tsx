"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import dayjs from "dayjs";

interface postlistProps {
  post: any;
}

const portableComponents: PortableTextComponents = {
  types: {},
  block: {
    p: ({ children }) => <p className="prose text-7xl">{children}</p>,
  },
};

const Post: FC<postlistProps> = ({ post }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mt-24 md:mt-48 container max-w-2xl text-zinc-900 dark:text-zinc-100 prose dark:prose-invert"
    >
      <h1 className="text-[48px] font-bold mb-3">{post.name}</h1>
      <p className="mt-0">
        Published on {dayjs(post.publishDate).format("MMMM D, YYYY")}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-12"
      >
        <div className="text-9xl">
          <PortableText value={post.content} components={portableComponents} />
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="py-12 mt-12 flex flex-col gap-12"
      >
        {posts.map((post: any) => (
          <Link href={`/writing/${post.slug}`} key={post._id}>
            <h2 className="text-[32px] font-extrabold">{post.name}</h2>
            <p className="text-[16px] opacity-50">
              {dayjs(post.publishDate).format("MMMM D, YYYY")}
            </p>
          </Link>
        ))}
      </motion.div> */}
    </motion.main>
  );
};

export default Post;
