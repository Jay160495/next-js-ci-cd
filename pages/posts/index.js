export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 10, // ISR (optional)
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>All Posts Test again</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </div>
      ))}
    </div>
  );
}
