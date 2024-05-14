import React from 'react';
import Layout from '../components/layout'; // Ensure the import path is correct

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">About Zoodex</h1>
        <p className="text-lg text-gray-700 mb-4">
          At Zoodex, our mission is to connect people with the natural world, educating and inspiring them to help conserve wildlife and habitats. We believe in the power of knowledge to drive positive environmental changes.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We envision a world where every person is aware of and contributes to the conservation of our planets diverse species. Through our interactive Zoodex platform, we aim to make wildlife information accessible to everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Achievements</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Launched the first interactive online wildlife encyclopedia in 2022.</li>
            <li>Partnered with national wildlife conservation initiatives.</li>
            <li>Reached over 1 million users worldwide.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default About;
