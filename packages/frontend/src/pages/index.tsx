import type { NextPage, NextPageContext } from "next";
import client from "../lib/apolloClient";
import { PostEntity, PostsDocument, PostsQuery } from "../lib/graphql";

export type HomeProps = {
  posts: PostEntity[];
};

export const getStaticProps = async (context: NextPageContext) => {
  const { data, error } = await client.query<PostsQuery>({
    query: PostsDocument,
    variables: {
      locale: context.locale,
    },
  });

  if (!data.posts || error) throw Error("Posts not found!");

  return {
    props: {
      posts: data.posts.data,
    },
    revalidate: 60,
  };
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((c) => (
        <div key={c.attributes?.title}>
          <h1>{c.attributes?.title}</h1>
          <p>{c.attributes?.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
