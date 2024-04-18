import { } from 'react';

const HeroText = () => {
  return (
    <div className="text-center text-white px-10">
      <h2 className="text-2xl font-bold uppercase tracking-widest">catch the drip</h2>
      <h1 className="text-6xl font-bold uppercase mt-4 leading-none">feel the drop</h1>
      <p className="mt-6 mx-auto leading-relaxed max-w-2xl text-lg">
        {/* Content here */}
      </p>
      <div className="mt-10">
        <a href="#" className="bg-red-500 text-white py-3 px-8 inline-block hover:bg-red-600 mr-4 text-lg rounded">All events</a>
        <a href="#" className="bg-transparent text-white py-3 px-8 inline-block border border-white hover:bg-white hover:text-red-500 text-lg rounded">Book a table</a>
      </div>
    </div>
  );
}

export default HeroText;
