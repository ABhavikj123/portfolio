import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="relative bg-white flex items-center h-screen overflow-hidden">
      {/* Left section with text */}
      <div className="flex-1 px-6 lg:px-12">
        <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-up">
            Close to Blessings, Comfort Within
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in-up delay-200">
            Experience tranquility at our hotel, just steps away from the revered temple. Enjoy modern amenities, serene ambiance, and seamless access to spiritual blessings. Your divine retreat awaits!
          </p>
          <br />
          <Link
            className="no-underline inline-block px-6 py-2 text-sm font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-transform transform hover:scale-105 animate-fade-in-up delay-400"
            to="/booking"
          >
            Book Now &rarr;
          </Link>
        </div>
      </div>

      {/* Right section with image */}
      <div className="flex-1 relative hidden lg:block h-full">
        <div className="w-full h-full bg-cover bg-center animate-fade-in-up delay-600">
          <img
            className="object-cover h-full w-full rounded-lg shadow-lg transform transition-transform hover:scale-105"
            src="https://www.istockphoto.com/photo/somnath-temple-facade-gujarat-gm1174372687-326579822?utm_source=pexels&utm_medium=affiliate&utm_campaign=sponsored_photo&utm_content=srp_inline_media&utm_term=temple" // Replace with actual image path
            alt="Scenery"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;