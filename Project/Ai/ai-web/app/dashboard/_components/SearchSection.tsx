import { Search } from 'lucide-react';
import React from 'react';

// const SearchSection = ({ onSearchInput }: any) => {
//   return (
//     <div className="p-8 sm:p-10 bg-gradient-to-br from-purple-500 via-blue-600 to-blue-800 flex flex-col justify-center items-center text-white">
//       {/* Heading Section */}
//       <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Browse All Templates</h2>
//       <p className="text-sm sm:text-base text-center mb-6">What would you like to create today?</p>

//       {/* Search Bar */}
//       <div className="w-full flex justify-center">
//         <div className="flex items-center gap-2 p-3 border rounded-lg bg-white text-gray-700 shadow-md w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search for templates..."
//             className="bg-transparent w-full outline-none text-sm sm:text-base"
//             onChange={(event) => onSearchInput(event.target.value)} // Trigger search input change
//           />
//           <Search className="text-primary cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-500 via-blue-600 to-blue-800 text-white rounded-md mb-4">
      <h2 className="text-2xl font-bold mb-2 text-center">Browse All Templates</h2>
      <p className="text-center mb-4">What would you like to create today?</p>
      <div className="max-w-lg mx-auto flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search for templates..."
          className="flex-1 outline-none text-gray-700"
          onChange={(event) => onSearchInput(event.target.value)}
        />
        <Search className="text-primary cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchSection;
