'use client';

import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscription';

const Billing: React.FC = () => {
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  // Function to handle subscription creation
  const CreateSubscription = async () => {
    setLoader(true);
    try {
      const response = await axios.post('/api/create-subscription', {});
      const subscriptionId = response?.data?.id;
      if (subscriptionId) {
        OnPayment(subscriptionId);
      }
    } catch (error) {
      setLoader(false);
      console.error('Error creating subscription:', error);
    }
  };

  // Function to handle payment
  const OnPayment = (subscriptionId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subscriptionId,
      name: 'YourAppName',
      description: 'Monthly subscription',
      handler: async (response: { razorpay_payment_id: string }) => {
        if (response?.razorpay_payment_id) {
          await SaveSubscription(response.razorpay_payment_id);
        }
        setLoader(false);
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  // Function to save subscription in the database
  const SaveSubscription = async (paymentId: string) => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      const fullName = user?.fullName;

      if (email && fullName) {
        const result = await db.insert(UserSubscription).values({
          email,
          userName: fullName,
          active: true,
          paymentId,
          joinDate: moment().format('YYYY-MM-DD'),
        });

        if (result) {
          setUserSubscription({ ...result, active: true });
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h2 className="text-center font-bold text-3xl mb-6">Upgrade with a Monthly Plan</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center">
        {/* Free Plan Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Free Plan</h3>
          <p className="text-sm text-gray-500 mt-1">₹0 / month</p>
          <ul className="text-gray-700 text-sm mt-4 space-y-2">
            <li>✔️ 10,000 Words/Month</li>
            <li>✔️ 50+ Content Templates</li>
            <li>✔️ Unlimited Download & Copy</li>
            <li>✔️ 1 Month of History</li>
          </ul>
          <Button disabled variant="outline" className="mt-6">
            Currently Active Plan
          </Button>
        </div>

        {/* Monthly Plan Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Pro Plan</h3>
          <p className="text-sm text-gray-500 mt-1">₹799 / month</p>
          <ul className="text-gray-700 text-sm mt-4 space-y-2">
            <li>✔️ 100,000 Words/Month</li>
            <li>✔️ 50+ Content Templates</li>
            <li>✔️ Unlimited Download & Copy</li>
            <li>✔️ 1 Year of History</li>
          </ul>
          <Button
            onClick={CreateSubscription}
            disabled={loader}
            className="mt-6"
          >
            {loader && <Loader2 className="animate-spin mr-2" />}
            {userSubscription?.active ? 'Active Plan' : 'Get Started'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
