// import images
import Logo from './img/header/hoca.svg'
import GalleryImg1 from '../src/img/gallery/1.webp';
import GalleryImg2 from '../src/img/gallery/2.webp';
import GalleryImg3 from '../src/img/gallery/3.webp';
import GalleryImg4 from '../src/img/gallery/4.webp';
import GalleryImg5 from '../src/img/gallery/5.webp';
import GalleryImg6 from '../src/img/gallery/6.webp';
import GalleryImg7 from '../src/img/gallery/7.webp';
import GalleryImg8 from '../src/img/gallery/8.webp';
import QuoteImg from '../src/img/gallery/3.webp';
// import icons
// import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
// import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  // IoLogoPinterest,
  // IoLogoTwitter,
  // IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Ana Sayfa' },
    { href: 'about', name: 'Hakkımda' },
    { href: 'gallery', name: 'Galeri' },
    { href: 'icerik', name: 'İçerik' },
    { href: 'contact', name: 'İletişim' },
  ],
};

export const socialData = [
  // { href: '/', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/bahadir.hocaa/', icon: <IoLogoInstagram /> },
  // { href: '/', icon: <IoLogoPinterest /> },
  // { href: '/', icon: <IoLogoTwitter /> },
  // { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Merhaba ben Bahadır',
  subtitle:
    'Sekreterim buraya kendinle ilgili bir şeyler yazman gerekiyor.',
  btnText: '',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Hakkımda:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Öğrencilerim',
  btnText: 'Hepsini gör',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Enstrüman çalmak için bana  ulaşıp aşağıdan öğrencilerimle videomu izleyebilirsiniz.”',
  btnText: 'Şimdi İzle',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      'Bahadır sahip olduğum en iyi öğretmen birlikte çok eğleniyoruz',
    name: 'Ali Deniz',
    occupation: 'Öğrenci',
  },
];

export const contactData = {
  title: 'Bana Ulaşın:',
  info: [

    {
      title: 'Ankara',
      subtitle:
        'Batıkent',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
    },
  ],
  form: {
    name: 'İsminiz',
    email: 'e posta adresiniz',
    message: 'Mesajınızı buraya yazınız',
    btnText: 'Gönder',
  },
};

