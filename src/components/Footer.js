import React from 'react'
import arabe from '../assets/sy.png'
import francais from '../assets/fr.png'
import { AiFillAmazonCircle, AiFillFacebook, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoPinterest } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' footer pt-24'>
      <div className="contain divide-y divide-dashed divide-gray-700">
      <p className='text-center pb-10  pt-5 font-semibold text-xl'> Besoin d'aide:+212 06 53 53 02 53 | Email :info@VersusImmobilier.ma </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  divide-dashed divide-gray-700 divide-x-[1px] py-8 ">
        <div className="first px-3">
            <p className='font-semibold text-lg my-4 '>Meilleures catégories </p>
            <ul className="grid grid-cols-2 text-xs leading-7">
              <ul>
                <li>Appartement</li>
                <li>Magasin et Commerce</li>
                <li>Terrain et Ferme</li>
              </ul>
              <ul>
                <li>Maison et Villa </li>
                <li>Bureau et Plateau</li>
                <li>Autres</li>
              </ul>
            </ul>
        </div>
        <div className="first px-3">
            <p className='font-semibold text-lg my-4'>Offres par villes  </p>
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
            <p className='font-semibold text-lg my-4'>AIDE ET INFOS </p>
            <ul className="grid grid-cols-2 text-xs leading-7">
              <ul>
              <li>Contactez-nous</li>
              <li>À propos de nous</li>
              <li>Termes & conditions</li>
              </ul>
              <ul>
                <li>Creer un compte </li>
                <li>Publicité</li>
              </ul>
            </ul>
        </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3  gap-10   py-8 ">


        <div className="px-3 first divide-0">
            <p className='font-semibold text-lg my-4'>Besoin d'aide? </p>
            <ul className="grid grid-cols-1 text-xs leading-7">
              <ul>
              <li>Email : info@VersusImmobilier.ma</li>
              <li>Telephone: +212 06 53 53 02 53</li>

              </ul>

            </ul>
        </div>
        <div className="px-3 first  ">
            <p className='font-semibold text-lg my-4'>Choisir une langue </p>
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
        <a href="#">Recherche</a>
        <a href='#' className='pl-4'>Nous Rejoindre</a>
        </div>



      </div>

      </div>
      <div className="px-3 contain pt-2 font-normal text-sm">
          <p>Vous êtes à la recherche d'un bien immobilier Maroc ? Ne cherchez plus ! Bienvenue sur VersusImmobilier, la plateforme immobilière de référence dédiée au marché marocain. Nous sommes fiers de vous offrir un accès privilégié à une vaste sélection d'annonces immobilières dans tout le pays. Que vous cherchiez à acheter, louer ou investir, nous avons tout ce qu'il vous faut pour trouver votre foyer idéal au Royaume du Soleil. Notre mission est de faciliter votre parcours dans le secteur immobilier au Maroc. Grâce à notre interface conviviale, vous pouvez filtrer les annonces selon vos préférences spécifiques : type de bien, localisation, budget, et bien plus encore. Notre technologie avancée assure une expérience de recherche fluide et rapide, vous permettant de découvrir les meilleures opportunités en un rien de temps. Chez VersusImmobilier, nous comprenons que l'achat ou la location d'une propriété est une décision majeure. C'est pourquoi nous nous engageons à vous fournir des informations détaillées et des images de qualité pour chaque annonce, vous donnant ainsi une vision claire des biens qui vous intéressent. Notre plateforme est également un espace pour les professionnels de l'immobilier. Si vous êtes une agence immobilière ou un courtier au Maroc, nous vous invitons à rejoindre notre réseau de partenaires. Profitez de notre visibilité accrue et de notre vaste audience pour augmenter vos chances de conclure des affaires prospères. Chez VersusImmobilier, votre satisfaction est notre priorité. Nous nous efforçons de vous offrir une expérience utilisateur exceptionnelle, que ce soit sur notre site web ou notre application mobile. Restez connecté(e) avec les dernières annonces, les tendances du marché immobilier, et les actualités du secteur, directement depuis votre appareil. Alors, qu'attendez-vous ? Plongez dans le monde de l'immobilier au Maroc avec VersusImmobilier et trouvez votre perle rare. Notre équipe dévouée est prête à vous accompagner dans votre recherche et à vous fournir un service de qualité tout au long de votre parcours. Ne cherchez plus ailleurs, votre avenir immobilier commence ici sur VersusImmobilier, votre partenaire de confiance dans l'immobilier au Maroc. Commencez dès maintenant à explorer les opportunités qui vous attendent !
</p>
        </div>
      <p className='bg-black opacity-80 p-3 text-center font-semibold'>VersusImmobilier.ma © 2023 VersusImmobilier Tous les droits sont réservés.</p>

    </div>
  )
}

export default Footer