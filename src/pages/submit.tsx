// pages/submit.tsx
import React, { useState } from 'react';
import Layout from '../components/layout'; // Ensure this is correctly imported

const SubmitObservation = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center">Submit Observation</h1>
                <form className="max-w-lg mx-auto mt-6 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="speciesName" className="block text-sm font-medium text-gray-700">Species Name</label>
                        <input
                            id="speciesName"
                            placeholder="Species Name"
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            placeholder="Describe your observation"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                        {image && <img src={image} alt="Preview" className="mt-4 w-full max-w-xs" />}
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Submit Observation
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default SubmitObservation;
