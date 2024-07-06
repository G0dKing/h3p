import { } from 'react';

const Tweet = ({ content, timestamp }) => (
  <li>
    <article className="tweet">
      {content}
      <span className="timestamp">{timestamp}</span>
    </article>
  </li>
);

const Tweets = () => {
  const tweets = [
    { content: 'Amet nullam fringilla nibh nulla convallis tique ante sociis accumsan.', timestamp: '5 minutes ago' },
    { content: 'Hendrerit rutrum quisque.', timestamp: '30 minutes ago' },
    { content: 'Curabitur donec nulla massa laoreet nibh. Lorem praesent montes.', timestamp: '3 hours ago' },
    { content: 'Lacus natoque cras rhoncus curae dignissim ultricies. Convallis orci aliquet.', timestamp: '5 hours ago' }
  ];

  return (
    <section className="col-4 col-12-mobile">
      <header>
        <h2 className="icon brands fa-twitter circled"><span className="label">Tweets</span></h2>
      </header>
      <ul className="divided">
        {tweets.map((tweet, index) => (
          <Tweet key={index} content={tweet.content} timestamp={tweet.timestamp} />
        ))}
      </ul>
    </section>
  );
};

export default Tweets;