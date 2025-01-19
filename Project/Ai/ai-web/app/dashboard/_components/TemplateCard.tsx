import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
    <div className="p-5 shadow-md rounded-md border bg-white flex flex-col items-center gap-3 cursor-pointer">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
        <Image src={item.icon} width={50} height={50} alt="icon" />
      </div>
      <h2 className="font-medium text-lg text-center">{item.name}</h2>
      <p className="text-gray-500 text-center line-clamp-3">{item.desc}</p>
    </div>
    </Link>
  );
};

export default TemplateCard;
