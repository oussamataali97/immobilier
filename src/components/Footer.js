import React from 'react'
import arabe from '../assets/sy.png'
import francais from '../assets/fr.png'
import { AiFillAmazonCircle, AiFillFacebook, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoPinterest } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' footer pt-24'>
      <div className="contain divide-y divide-dashed divide-gray-700">
      <p className='text-center pb-10  pt-5 font-semibold text-xl'>Need help:+212 06 53 53 02 53 | Email :info@VersusImmobilier.ma </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  divide-dashed divide-gray-700 divide-x-[1px] py-8 ">
        <div className="first px-3">
            <p className='font-semibold text-lg my-4 '>Best catégories </p>
            <ul className="grid grid-cols-2 text-xs leading-7">
              <ul>
                <li>Apartement</li>
                <li>Stores & Commerce</li>
                <li>Land & Farmes</li>
              </ul>
              <ul>
                <li>Houses & Villa </li>
                <li>Bureau & Plateau</li>
                <li>Others</li>
              </ul>
            </ul>
        </div>
        <div className="first px-3">
            <p className='font-semibold text-lg my-4'>Offers by city </p>
            <ul className="grid grid-cols-2 text-xs leading-7">
              <ul>
                <li>Casablanca</li>
                <li>Err rich</li>
                <li>Errachidia</li>
                <li>Goulmima</li>
              </ul>
              <ul>
          <li>Rabat-Salé-Zemmour-Zaër</li>
          <li>Tanger-Tétouan</li>
          <li>Chaouia-Ouardigha</li>
          <li>Meknès-Tafilalet</li>
              </ul>
            </ul>
        </div>
        <div className="px-3 first border-r-0">
            <p className='font-semibold text-lg my-4'>HELP AND INFORMATION  </p>
            <ul className="grid grid-cols-2 text-xs leading-7">
              <ul>
              <li>Contact-us</li>
              <li>About Us</li>
              <li>Terms & conditions</li>
              </ul>
              <ul>
                <li>Create an account </li>
                <li>Advertisement</li>
              </ul>
            </ul>
        </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3  gap-10   py-8 ">


        <div className="px-3 first divide-0">
            <p className='font-semibold text-lg my-4'>Need help? </p>
            <ul className="grid grid-cols-1 text-xs leading-7">
              <ul>
              <li>Email : info@VersusImmobilier.ma</li>
              <li>Telephone: +212 06 53 53 02 53</li>

              </ul>

            </ul>
        </div>
        <div className="px-3 first  ">
            <p className='font-semibold text-lg my-4'>Choose a language </p>
            <ul className="grid grid-cols-2 text-xs leading-7">

              <li className='flex items-center gap-3 cursor-pointer lang'><img src={arabe} alt="" className='w-8 ' />Arabe</li>
              <li className='flex items-center gap-3 cursor-pointer lang'><img src={francais} alt="" className='w-8 ' />Français</li>


            </ul>
        </div>
        <div className="px-3 first">
            <p className='font-semibold text-lg my-4'>SOCIAL MEDIA </p>
            <ul className=" flex space-x-4 text-xl leading-7">

              <li className='bg-blue-800 rounded-full cursor-pointer hover:scale-125 ease-linear duration-200 p-2'><AiFillFacebook/></li>
              <li  className='bg-blue-500 rounded-full cursor-pointer hover:scale-125 ease-linear duration-200 p-2'><BiLogoLinkedin/></li>
              <li className='bg-green-500 rounded-full cursor-pointer hover:scale-125 ease-linear duration-200 p-2'><AiOutlineWhatsApp/>  </li>
              <li className='bg-red-500 rounded-full cursor-pointer hover:scale-125 ease-linear duration-200 p-2'><BiLogoPinterest/>  </li>
              <li className='bg-cyan-600 rounded-full cursor-pointer hover:scale-125 ease-linear duration-200 p-2'><AiFillTwitterCircle/>  </li>
            </ul>
        </div>


      </div>


      <div className="py-10 font-bold recherche  ">
        <div className="flex divide-x-[3px] divide-blue-900 justify-center space-x-3">
        <a href="#">Research</a>
        <a href='#' className='pl-4'>Join us</a>
        </div>



      </div>

      </div>
      <div className="px-3 contain pt-2 font-normal text-sm">
          <p>VersusImmobilier: Your Real Estate Portal of Reference in Morocco Are you looking for real estate in Morocco? Do not look any further. Welcome to VersusImmobilier, the first real estate site in Morocco. We are proud to be your trusted partner in finding the best properties nationwide, whether you want to buy, rent or invest. Our Vast Selection of Apartments in Morocco At VersusImmobilier, we provide you with a vast selection of apartments across the kingdom, including apartments in Casablanca, apartments in Rabat, apartments in Marrakech, and apartments in Tangier. Whether you're looking for a modern city center apartment or a quaint pied-à-terre, we have what you need to meet your needs. Exceptional Villas in Morocco If you prefer a villa, we also offer a variety of villas in Casablanca, villas in Marrakech, villas in Rabat and villas in Tangier. Discover luxurious residences with exceptional amenities for a dream life. Offices for Your Business For professionals, VersusImmobilier also offers a selection of offices in Casablanca, offices in Rabat and offices in Tangier. Find the perfect space for your business and reach new heights. Whether you are a buyer, renter or investor, our user-friendly platform allows you to browse and filter listings according to your specific needs. VersusImmobilier offers you a transparent and efficient real estate search experience. Join thousands of people who have found their ideal home thanks to VersusImmobilier, the undisputed leader in real estate in Morocco. Start your search today and make your real estate dreams come true with us.
</p>
        </div>
      <p className='bg-black opacity-80 p-3 text-center font-semibold'>NB: This website is not official it's clone website of VersusImmobilier</p>

    </div>
  )
}

export default Footer