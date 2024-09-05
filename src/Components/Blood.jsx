import React from 'react'
import img from '../images/pic1.avif'
import New from './New'

const Blood = () => {
  const cardData=[
    [100,75],
    [60,75],
    [40,35],
    [20,10],
    [33,75],
    [66,25],
]
  return (
    <div className='min-h-screen bg-center bg-no-repeat bg-cover'style={{ backgroundImage: `url(${img})` }}>
    <div className="flex justify-center bg-center bg-no-repeat bg-cover"
    >
      <header className="pt-6 mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Patient's Status</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our hospital's patient management system. Here, you can find the latest updates on patient statuses and health records.
        </p>
      </header>
      </div>
      <div>
      <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-9xl">
      {cardData.map((item) => (
          <div className="w-full p-4 md:w-1/3">
            <New item={item[0]}/>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  )
}

export default Blood