'use client'
import { Newest } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { IconArrowLeft, IconArrowRight } from './icons'
import { Button } from './ui'

export default function CaruselIphones() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <h2 className=' text-center text-3xl md:text-5xl  m-10 font-bold'>
        Newest Lynx.iphones. Collection
      </h2>

      <article ref={emblaRef} className='overflow-hidden relative ml-2  '>
        <div className='flex  relative mt-10  gap-4 md:gap-4 mb-10'>
          {Newest.map((data, index) => (
            <Link
              href={'/'}
              key={index}
              className=' shrink-0 snap-start hover:scale-105 text-center  p-4 rounded-xl shadow-2xl transition-transform ease-in-out duration-500 w-60 flex flex-col
              items-center '
            >
              <div className=' rounded-xl drop-shadow-lg p-2 flex w-auto '>
                <Image
                  src={data.src}
                  alt={`Imagen de ${data.name}`}
                  className=' size-44  mb-2 object-contain  hover:opacity-70 '
                />
              </div>

              <span className='text-[#BF4800] text-xs font-bold mt-2'>New</span>
              <div className='flex justify-between items-center gap-10 mt-2 mb-4 '>
                <h3 className='text-sm font-bold '>{data.name}</h3>
                <p className='text-xs font-semibold '>{data.price}</p>
              </div>

              <Button className='px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl'>
                Buy
              </Button>
            </Link>
          ))}
        </div>
        <button
          className='embla__prev absolute top-0  left-10 md:right-[6rem] md:left-auto z-20'
          onClick={scrollPrev}
        >
          <IconArrowLeft />
        </button>
        <button
          className='embla__next  absolute top-0 left-20 md:right-[3rem] md:left-auto z-20 '
          onClick={scrollNext}
        >
          <IconArrowRight />
        </button>
      </article>
    </>
  )
}
