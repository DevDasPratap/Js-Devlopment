'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import Templates from '@/app/(data)/Templates';

const History = () => {
  const { user } = useUser();

  // State for history and pagination
  const [history, setHistory] = useState<
    { id: number; templateSlug: string; aiResponse: string; createdAt: string; wordCount: number }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of records per page

  // Fetch the data from the database
  useEffect(() => {
    const fetchHistory = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          const result = await db
            .select({
              id: AIOutput.id,
              templateSlug: AIOutput.templateSlug,
              aiResponse: AIOutput.aiResponse,
              createdAt: AIOutput.createdAt,
            })
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

          const formattedHistory = result.map((item) => ({
            id: item.id,
            templateSlug: item.templateSlug,
            aiResponse: item.aiResponse || 'No response available', // Handle null for aiResponse
            createdAt: item.createdAt ? item.createdAt : 'Unknown', // Handle null for createdAt
            wordCount: item.aiResponse ? item.aiResponse.split(' ').length : 0,
          }));

          setHistory(formattedHistory);
        } catch (error) {
          console.error('Error fetching history:', error);
        }
      }
    };

    fetchHistory();
  }, [user?.primaryEmailAddress?.emailAddress]);

  // Pagination logic
  const totalPages = Math.ceil(history.length / itemsPerPage);
  const paginatedHistory = history.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Copy-to-clipboard function
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Function to get the icon URL based on the template slug
  const getTemplateIcon = (slug: string) => {
    const template = Templates.find((template) => template.slug === slug);
    return template ? template.icon : 'https://cdn-icons-png.flaticon.com/128/1828/1828884.png'; // Default icon
  };

  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold mb-5">History</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-5 font-semibold text-gray-500 mb-4">
          <div>Template</div>
          <div>AI Response</div>
          <div>Date</div>
          <div>Words</div>
          <div>Copy</div>
        </div>
        <div className="space-y-3">
          {paginatedHistory.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="flex items-center">
                <img
                  src={getTemplateIcon(item.templateSlug)}
                  alt="Template Icon"
                  className="w-6 h-6 mr-3"
                />
              </div>
              <div className="truncate text-gray-700">{item.aiResponse}</div>
              <div className="text-gray-500 text-sm">{item.createdAt}</div>
              <div>{item.wordCount}</div>
              <button
                className="text-primary hover:underline"
                onClick={() => handleCopy(item.aiResponse)}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-5">
          <button
            className={`px-3 py-1 rounded-lg ${
              currentPage === 1 ? 'bg-gray-200' : 'bg-primary text-white hover:bg-primary-dark'
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 rounded-lg ${
              currentPage === totalPages ? 'bg-gray-200' : 'bg-primary text-white hover:bg-primary-dark'
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
