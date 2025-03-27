import React from 'react'
import heroimg2 from '../assets/heroimg2.png'

const Home = () => {
  return (
    <section className='bg-[#fef9e7] h-[100%] pb-10' id='home'>
      <div className='flex '>
        <div className='pl-0 md:pl-24 text-center md:text-left'>
           <h2 className='text-3xl italic font-medium mt-6'>
              ‘Master the Joy of Eating Well.’ - Dt. Varsha
           </h2>
           <p className='text-sm md:text-lg text-gray-500 mt-8'>
           At Dietitian Varsha's Clinic, we’re not here to push restrictive diets or
             quick fixes. Our passion is empowering you to transform your relationship
             with food! We’ll partner with you to refine your eating habits, making
              them sustainable, enjoyable, and perfectly tailored to your life. Let’s 
              ditch the diet drama and embrace a healthier, happier you—together!
           </p>

          <a href="https://wa.me/919370616757?text=Hi%20Varsha,%20I’m%20interested%20in%20your%20dietitian%20services—can%20you%20help%20me%20with%20a%20personalized%20plan%20for%20my%20health%20goals?" target='_blank'>
            <button class="mt-6 inline-block text-lg tracking-[2px] uppercase text-center font-bold py-[0.7em] px-[2em] border-2 border-green-400 rounded-[2px] relative shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] text-green-600 no-underline transition-all duration-300 ease-in-out z-[1] hover:text-white focus:text-white active:scale-90 group">
                        Book An Appointment
                    <span class="absolute top-0 left-1/2 right-1/2 bottom-0 opacity-0 bg-gradient-to-r from-green-400 to-green-800 z-[-1] transition-all duration-500 ease-in-out group-hover:left-0 group-hover:right-0 group-hover:opacity-100 group-focus:left-0 group-focus:right-0 group-focus:opacity-100"></span>
            </button>
          </a>
           
          
        </div>
        <div className='hidden lg:block'>
            <img src={heroimg2} />
        </div>
      </div>
    </section>
  )
}

export default Home
