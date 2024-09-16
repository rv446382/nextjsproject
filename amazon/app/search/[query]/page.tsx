"use client";
import SearchResult from '@/components/SearchResult';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {
  const { query } = useParams();  // Fetching the query from URL params
  const { filterData, getFilterData } = useSupabase();  // Getting data from Supabase hook

  useEffect(() => {
    if (query) {
      getFilterData(query.toString());  // Fetching filtered data based on query
    }
  }, [query, getFilterData]);

  return (
    <div>
      <SearchResult filterData={filterData} />  {/* Passing filtered data to SearchResult */}
    </div>
  );
};

export default Page;
