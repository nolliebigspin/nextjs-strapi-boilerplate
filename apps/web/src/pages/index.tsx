import { GetStaticProps, GetStaticPropsResult } from "next";
import client from "../lib/apolloClient";
import {
  AllPostsDocument,
  AllPostsQuery,
  PostEntity,
} from "../lib/generatedTypes";

interface HomeProps {
  posts: PostEntity[];
}

const Home = ({ posts }: HomeProps) => {
  console.log(posts);

  return (
    <div>
      <h1>All posts:</h1>
      {posts.map((post, index) => (
        <ul>
          <li>
            <h3>Post {index}:</h3>
            <h5>{post.attributes?.title}</h5>
            <p>{post.attributes?.description}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomeProps>> => {
  const { data: postsData, error: postsError } =
    await client.query<AllPostsQuery>({
      query: AllPostsDocument,
    });

  if (!postsData || postsError)
    throw Error(`No posts found! ERROR: ${postsError}`);

  return {
    props: {
      posts: postsData.posts?.data as PostEntity[],
    },
  };
};

export default Home;
