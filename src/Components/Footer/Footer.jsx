import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram,FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary
    pt-12 pb-8  text-white'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-8">
                {/* company details section  */}
                <div data-aos="fade-up" className='space-y-6'>
                    <h1 className='text-4 font-bold'>Orange Mint</h1>
                    <p className='text-sm max-w-[300px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Deserunt officiis necessitatibus dolor quas voluptatum 
                         reiciendis earum, quo mollitia molestiae rem neque sit 
                         architecto odio tempora.
                    </p>
                </div>

                {/* NavLink section  */}
                <div data-aos="fade-up" data-aos-delay="300" className='space-y-6'>
                    <h1 className='text-4xl font-bold'>
                    Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                        {/* first column links  */}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li> 
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        {/* second column links  */}
                        <div data-aos="fade-up" data-aos-delat="500">
                            <ul className='space-y-2'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li> 
                                    <a href="#">Search Fruits</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* social link section  */}
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Follow Us</h1>
                </div>
                <div>
                    <p>+92 3458967509</p>
                    <p>peshawar, kpk pakistan</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FaFacebook className='text-3xl 
                    hover:scale-105 duration-300' />
                    <FaInstagram className='text-3xl 
                    hover:scale-105 duration-300' />
                    <FaTelegram className='text-3xl 
                    hover:scale-105 duration-300' />
                    <FaGoogle className='text-3xl 
                    hover:scale-105 duration-300' />
                </div>

            </div>
            {/* copy-right section  */}
            <p className='text-while text-center mt-8 pt-8 border-t-2'>
                Copyright &copy; 2024 Company Name. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
