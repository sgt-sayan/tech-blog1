export async function getBlogs() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10"
  );
  const data = await res.json();
  return data.blogs;
}
