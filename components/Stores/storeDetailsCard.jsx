import Image from 'next/image';
import React from 'react'

const StoreDetailsCard = () => {
  return (
    <div className="w-1/2 outline outline-2 p-5 outline-purple-600 flex flex-col gap-3 rounded-xl">
      <h1 className="text-xl font-semibold">Manchester, UK</h1>
      <div className="flex gap-3">
        <Image
          src="/shirt.jpg"
          height={300}
          width={300}
          className="w-28 h-24 "
        />
        <Image
          src="/shirt.jpg"
          height={300}
          width={300}
          className="w-28 h-24 "
        />
        <Image
          src="/shirt.jpg"
          height={300}
          width={300}
          className="w-28 h-24 "
        />
      </div>
      <div className='font-semibold flex flex-col gap-3 text-gray-500'>
        <h1>Employees: 23</h1>
        <h1>Items: 308</h1>
        <h1>Orders: 20</h1>
        <h1>Refunds: 2</h1>
      </div>
    </div>
  );
}

export default StoreDetailsCard