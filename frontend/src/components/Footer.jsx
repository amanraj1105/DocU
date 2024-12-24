import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 text-sm'>
            {/*-------left section------------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt='' />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocU is a simple web app for booking doctor appointments, offering easy scheduling, real-time availability, and personalized reminders for a hassle-free healthcare experience.</p>

            </div>

            {/*-------centre section------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>

            {/*-------right section------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-1234567890</li>
                    <li>MailDocU@gmail.com</li>
                </ul>
                
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2025 DocU. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer