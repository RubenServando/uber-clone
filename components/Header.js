import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu=[
        {
            id:1,
            name: 'Ride',
            icon: '/taxi.png'
        },
        {
            id:2,
            name: 'Package',
            icon: '/box.png'
        }


    ]
  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px]
    border-gray-200'>
        <div>
            <Image src='/logo.png'
            width={70} height={70}
            alt='Logo'/>
            <div className='flex gap-6 items-center'>
                {headerMenu.map((item)=> (
                    <div>
                        <Image src={item.icon}
                        width={27} height={27}/>
                        <h2 className='text-[14] font-medium'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header