import { contactInfo } from '@/utils/const'
import Image from 'next/image'
import CircleOne from 'public/Ellipse.png'
import CircleTwo from 'public/Ellipse2.png'
import { Network } from '@/components/icons'
import type { Metadata } from 'next'
import { Input } from '@/components/ui'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Generated by create next app',
  keywords: 'Ecommerce',
}

export default function Contact() {
  return (
    <>
      <Navbar background='shadow-md shadow-gray-dark' />
      <div className='p-10'>
        <section className='flex flex-wrap justify-evenly gap-11'>
          <article className='bg-black w-full sm:w-[250px] md:w-[400px] relative p-1 sm:p-3 rounded-r-md'>
            <article className='text-white'>
              <h2 className='bolt text-[28px] mt-[5%]'>
                <b>Contact Information</b>
              </h2>
              <p className='font-[500] text-[18px] pb-[10%]'>
                Say something start a live chat!
              </p>
              {contactInfo.map((info, i) => (
                <figure className='flex gap-4 mt-[13%]' key={i}>
                  <Image src={info.src} alt={info.alt} />
                  <p className='text-xs sm:text-base'>
                    <b>{info.text}</b>
                  </p>
                </figure>
              ))}
            </article>
            <div className='flex justify-end relative z-1'>
              <figure className='w-[138px] absolute top-[-5%] right-[11%]'>
                <Image className='w-[100%]' src={CircleOne} alt='circleOne' />
              </figure>
              <figure className='w-[200px] mr-[-20px] mb-[-5px]'>
                <Image className='w-[100%]' src={CircleTwo} alt='circleTwo' />
              </figure>
            </div>
            <div className='absolute z-5 bottom-10'>
              <Network
                styleicons='text-white'
                colorfacebook=''
                bgfacebook='bg-withe'
              />
            </div>
          </article>
          <form className='flex flex-col justify-evenly w-full sm:w-[300px] md:w-[500px] lg:w-[550px] p-1 sm:p-3'>
            <section className='flex w-full gap-5 pt-5 pb-3'>
              <div className='w-1/2'>
                <p className='text-xs text-gray-dark'>First Name</p>
                <Input style={{ paddingLeft: '10px' }} placeholder='Feyz' />
              </div>
              <div className='w-1/2'>
                <p className='text-xs text-gray-dark'>Second Name</p>
                <Input style={{ paddingLeft: '10px' }} placeholder='Ibrahim' />
              </div>
            </section>
            <section className='flex w-full gap-5 pt-5 pb-3'>
              <div className='w-1/2'>
                <p className='text-xs text-gray-dark'>Email</p>
                <Input
                  style={{ paddingLeft: '10px' }}
                  placeholder='example@gmail.com'
                  name='Email'
                />
              </div>
              <div className='w-1/2'>
                <p className='text-xs text-gray-dark'>Phone Number</p>
                <Input
                  style={{ paddingLeft: '10px' }}
                  placeholder='+91 73569 88456'
                />
              </div>
            </section>
            <section className='w-full gap-5 pt-5 pb-3'>
              <b className='text-xs text-gray-dark'>Select Subject?</b>
              <div className='flex flex-wrap gap-2 text-gray-dark'>
                <article className='flex gap-2 w-[150px]'>
                  <Input style={{ width: '15px' }} type='checkbox' />{' '}
                  <p className='text-sm'>General Inquiry</p>
                </article>
                <article className='flex gap-2 w-[150px]'>
                  <Input style={{ width: '15px' }} type='checkbox' />{' '}
                  <p className='text-sm'>General Inquiry</p>
                </article>
                <article className='flex gap-2 w-[150px]'>
                  <Input style={{ width: '15px' }} type='checkbox' />{' '}
                  <p className='text-sm'>General Inquiry</p>
                </article>
                <article className='flex gap-2 w-[150px]'>
                  <Input style={{ width: '15px' }} type='checkbox' />{' '}
                  <p className='text-sm'>General Inquiry</p>
                </article>
              </div>
            </section>
            <section className='w-full gap-5 pt-5 pb-3'>
              <p className='text-xs text-gray-dark'>Message</p>
              <Input
                style={{ paddingLeft: '10px' }}
                placeholder='Write your message..'
              />
            </section>

            <Input
              style={{
                background: '#3858D6',
                color: 'white',
                width: '200px',
                textAlign: 'center',
                padding: '10px',
              }}
              value='Send Message'
              type='submit'
            />
          </form>
        </section>
      </div>
    </>
  )
}
