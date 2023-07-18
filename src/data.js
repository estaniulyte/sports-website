// images
import Logo from '../src/assets/img/header/rai-white.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import VarzybosImg from '../src/assets/img/workouts/varzybos.jpg';
import VaikaiImg from '../src/assets/img/workouts/vaikai.jpg';
import LankstumasImg from '../src/assets/img/workouts/lankstumas2.jpg';
import PrivaciosImg from '../src/assets/img/workouts/privacios.jpg';
import LaisvasLaikasImg from '../src/assets/img/workouts/laisvasLaikas.jpg';
import SuaugusiejiImg from '../src/assets/img/workouts/suaugusieji.jpg';
import MergvakariaiImg from '../src/assets/img/workouts/mergvakariai.jpg';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Suaugusiems', href: '/' },
  { name: 'Vaikams', href: '/' },
  { name: 'Tvarkaraštis', href: '/' },
  { name: 'Kainos', href: '/' },
  { name: 'Stovykla', href: '/' },
  { name: 'Treneriai', href: '/' },
  { name: 'Kitos paslaugos', href: '/' },
  { name: 'Kontaktai', href: '/' },
];

export const banner = {
  titlePart1: 'Suteik sau galimybę',
  titlePart2: 'pakilti auksčiau.',
  subtitle: 
    'Naujos patirtis ir smagus laikas kartu su PoleSport!',
  textBtn: 'Prisijunk',
  img: '',
};

export const about = {
  icon: UsersIcn,
  title: 'Misija',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Treniruotės',
  programs: [
    {
      image: VaikaiImg,
      name: 'Vaikų Sportas',
    },
    {
      image: SuaugusiejiImg,
      name: 'Suaugusiujų sportas',
    },
    {
      image: LankstumasImg,
      name: 'Lankstumas',
    },
    {
      image: MergvakariaiImg,
      name: 'Mergvakariai',
    },
    {
      image: PrivaciosImg,
      name: 'Privačios',
    },
    {
      image: VarzybosImg,
      name: 'Varžybinės grupės',
    },
    {
      image: LaisvasLaikasImg,
      name: 'Laisvas laikas tobulėjimui',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 100,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 400,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 600,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Treneriai',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Ilona',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'What age do I need to be to join?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Are there any lockers?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Gymme 2022.',
};
