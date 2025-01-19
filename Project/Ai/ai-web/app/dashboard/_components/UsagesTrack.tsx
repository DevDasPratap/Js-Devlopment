'use client';

import { TotalUsagesContext } from '@/app/(context)/TotalUsagesContext';
import { UpdateCreditUsagesContext } from '@/app/(context)/UpdateCreditUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscription';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react';

const UsagesTrack = () => {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
  const [maxWords, setMaxWords] = useState(10000)
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsagesContext)


  // Fetch the result when the component mounts
  // const fetchData = async () => {
  //   if (user?.primaryEmailAddress?.emailAddress) {
  //     try {
  //       const result = await db
  //       .select()
  //       .from(AIOutput)
  //       .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
        
  //       // Calculate the total usage
  //       const total = result.reduce((sum, element) => {
  //         return sum + Number(element.aiResponse?.length || 0); // Handle potential null/undefined
  //       }, 0);
        
  //       setTotalUsage(total); // Update the total usage state
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  // };

  const fetchData = async () => {
    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
  
      const total = result.reduce((sum, element) => sum + (element.aiResponse?.length || 0), 0);
      setTotalUsage(total);
  
      // Check subscription
      const subscription = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
      
      if (subscription && subscription?.active) {
        setUserSubscription(true);
        setMaxWords(100000); // Premium
      } else {
        setUserSubscription(false);
        setMaxWords(10000); // Free
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {

    user && fetchData();
    user && IsUserSubscribe()

  }, [user?.primaryEmailAddress?.emailAddress, setTotalUsage]);

  const IsUserSubscribe =async ()=>{
    const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress))
    if(result){
      setUserSubscription(true)
      setMaxWords(100000)
    }
  }

  useEffect(()=>{
    fetchData()
  },[updateCreditUsage && user])

  return (
    <div className="p-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-lg">Credits</h2>
        <div className="h-2 bg-slate-700 w-full mt-3 rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            // style={{ width: `${(totalUsage / 10000) * 100}%` }} // Display the usage percentage
            style={{ width: `${(totalUsage / maxWords) * 100}%` }} // Display the usage percentage
          ></div>
        </div>
        {/* <h2 className="text-sm my-1">{totalUsage}/{userSubscription ? '100000' : '10000'} credit used</h2> */}
        <h2 className="text-sm my-1">{totalUsage}/{maxWords} credit used</h2>
      </div>
      <Button variant="secondary" className="w-full my-3 text-primary">
        Upgrade
      </Button>
    </div>
  );
};

export default UsagesTrack;
