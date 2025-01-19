"use client";

import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

const Dashboard = () => {
  const [userSearchInput, setUserSerachInput] = useState<string>('');

  return (
    <div>
      {/* Search section */}
      <SearchSection onSearchInput={(value: string) => setUserSerachInput(value)} />
      {/* Template list */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
