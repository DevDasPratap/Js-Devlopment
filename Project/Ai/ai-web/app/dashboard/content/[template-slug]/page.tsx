// import React from 'react'
// import FormSection from '../_components/FormSection'
// import OutputSection from '../_components/OutputSection'
// import { TEMPLATE } from '../../_components/TemplateListSection'
// import Templates from '@/app/(data)/Templates'

// interface PROPS {
//     slug:string,
//     param:{
//         'template-slug':string
//     }
// }

// const CreateNewContent = (props:PROPS) => {
//     // const selectedTemplate: TEMPLATE | undefined = Templates.find((item)=>item.slug===props.param['template-slug'])
//     const selectedTemplate: TEMPLATE | undefined = Templates.find((item) => item.slug === props.param?.['template-slug']);
//   return (
//     <div className='grid grid-clos-1 md:grid-cols-2 gap-5 p-5'>
//         {/* Form section */}
//         <FormSection selectedTemplate={selectedTemplate} />
//         {/* Output section */}
//         <OutputSection/>
//     </div>
//   )
// }

// export default CreateNewContent


'use client';

import React, { useContext, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment'
import { TotalUsagesContext } from '@/app/(context)/TotalUsagesContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscription';
import { UpdateCreditUsagesContext } from '@/app/(context)/UpdateCreditUsageContext';


const CreateNewContent = () => {

  const [loading, setLoading] = useState(false)
  const [aiOutPut, setAiOutPut] = useState<any>()
  const {user} = useUser()
  const router = useRouter()
  const {totalUsage, setTotalUsage} = useContext(TotalUsagesContext)
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsagesContext)

  const { 'template-slug': templateSlug } = useParams();

  // Find selected template based on slug
  const selectedTemplate = Templates.find((item) => item.slug === templateSlug);

  // Generate Ai content
  // const GenerateAiContent = async (formData: any) => {
  //   setLoading(true)
  //   const SlectedPrompt = selectedTemplate?.aiPrompt
  //   const FinslAiPrompt = JSON.stringify(formData)+','+SlectedPrompt
  //   const resutl = await chatSession.sendMessage(FinslAiPrompt)
  //   console.log('ai resutl', resutl)
  //   setAiOutPut(resutl?.response?.text())
  //   await SaveAiResponseInDB(formData, selectedTemplate?.slug, aiOutPut)
  //   setLoading(false)
  // }



  const GenerateAiContent = async (formData: any) => {
    if(totalUsage >= 10000 && !userSubscription){
      router.push('/dashboard/billing')
      return
    }
    setLoading(true);
    const SlectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ',' + SlectedPrompt;
  
    // Force output format in prompt
    const result = await chatSession.sendMessage(FinalAiPrompt + " Format the output in plain text or Markdown.");
    const responseText = result?.response?.text();
  
    // Clean or standardize the response format (if needed)
    const cleanedResponse = responseText?.replace(/\\[a-z]+\d*|\{\*?|\}|;/g, ""); // Optional cleanup
  
    setAiOutPut(cleanedResponse);
    await SaveAiResponseInDB(formData, selectedTemplate?.slug, cleanedResponse);
    setLoading(false);
    setUpdateCreditUsage(Date.now())
  };
  

  const SaveAiResponseInDB = async (formData:any, slug:any, aiOutPut:any)=>{
    const result = await db.insert(AIOutput).values(
      {
        formData:formData || '',
        templateSlug:slug || '',
        aiResponse: aiOutPut || '',
        createdBy: user?.primaryEmailAddress?.emailAddress || '',
        createdAt: moment().format('DD/MM/YYYY')
      }
    )
  }

  return (
    <div className=''>
      <Link href={'/dashboard'}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
          {/* Form section */}
          <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAiContent(v)} loading={loading} />
          {/* Output section */}
          <OutputSection aiOutPut={aiOutPut} />
        </div>
    </div>
  );
};

export default CreateNewContent;
