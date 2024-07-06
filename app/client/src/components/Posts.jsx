import { } from 'react';

const Post = ({ title, timestamp }) => (
  <li>
    <article className="post stub">
      <header>
        <h3><a href="#">{title}</a></h3>
      </header>
      <span className="timestamp">{timestamp}</span>
    </article>
  </li>
);

const Posts = () => {
  const posts = [
    { title: 'Nisl fermentum integer', timestamp: '3 hours ago' },
    { title: 'Phasellus portitor lorem', timestamp: '6 hours ago' },
    { title: 'Magna tempus consequat', timestamp: 'Yesterday' },
    { title: 'Feugiat lorem ipsum', timestamp: '2 days ago' }
  ];

  return (
    <section className="col-4 col-12-mobile">
      <header>
        <h2 className="icon solid fa-file circled"><span className="label">Posts</span></h2>
      </header>
      <ul className="divided">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} timestamp={post.timestamp} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;