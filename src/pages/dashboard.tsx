// pages/dashboard.tsx
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout'; // Ensure this is correctly imported

const Dashboard = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to your dashboard. Here you will find the latest updates and insights.
                </p>

                {/* Updated dashboard content with clickable sections */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/animals-logged">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Animals Logged</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                View all the animals you have logged in your observations. Track their trends and status.
                            </p>
                        </div>
                    </Link>
                    <Link href="/your-submissions">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Submissions</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Review and manage your submitted observations and any related tasks.
                            </p>
                        </div>
                    </Link>
                    <Link href="/messages">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Messages</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Check your latest messages and notifications.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
