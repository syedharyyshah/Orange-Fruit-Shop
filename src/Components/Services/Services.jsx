import React from 'react'
import Fruits1 from '../../assets/Fruits/fruits1.webp'
import Fruits2 from '../../assets/Fruits/fruits2.png'
import Fruits3 from '../../assets/Fruits/fruits3.png'


const ServicesData= [
   {
    id: 1,
    Image: Fruits1,
    title: "Fresh Fruits",
    subtitle:"lorem jnjnirn ioinihnio dolor sit amet consectetur, adipisicing elit.",
    aosDelay:"300",
   },
   {
    id: 2,
    Image: Fruits2,
    title: "Fresh Fruits",
    subtitle:"lorem jnjnirn ioinihnio nioniojojdolor sit amet consectetur, adipisicing elit.",
    aosDelay:"500",
   },
   {
    id: 3,
    Image: Fruits3,
    title: "Orange Juice",
    subtitle:"loremipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay:"700",
   },

]

function Services() {
  return (
    <div className='container my-16 space-y-4'>
      {/* header section  */}
     <div className='text-center max-w-lg mx-auto space-y-2 '>
     <h1 data-aos="fade-up" className='text-3xl font-bold text-dark '>
        Fresh and <span className='text-primary'> Tasty Fruits </span>{" "}
    </h1>
    <p  data-aos="fade-up" data-aos-dealy="300" className='text-sm opacity-50'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam eius! Modi 
    obcaecati similique esse mollitia aspernatur sapiente voluptate minus?
    </p>
     </div>

      {/* card section  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 gap-8'>
        {ServicesData.map(({ id, Image, title,subtitle,aosDelay }) => ( 
              <div
               key={id}
               data-aos="fade-up" 
               data-aos-delay={aosDelay}
               className='p-4 text-center space-y-6'
               >
                <img
                src={Image}
                alt=""
                className='max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2'
                />
                   <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-primary'> {title} </h1>
                    <p className='text-dark'> {subtitle} </p>
                   </div>


                 </div>
       ))}
      </div>
    </div>
  )
}

export default Services
