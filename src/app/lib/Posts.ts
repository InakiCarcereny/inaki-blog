import { ReactIcon } from '../icons/React';
import { Redux } from '../icons/Redux';
import { Zustand } from '../icons/Zustand';

type Tag = 'REACT' | 'ZUSTAND' | 'REDUX';

interface TagProps {
  label: string;
  icon: JSX.Element;
  bg: string;
  text: string;
}

export const POSTS_BY_TAG: Record<Tag, TagProps> = {
  REACT: {
    label: 'React',
    icon: ReactIcon({ className: 'w-5 h-5' }),
    bg: 'bg-cyan-950',
    text: 'text-cyan-500',
  },
  ZUSTAND: {
    label: 'Zustand',
    icon: Zustand({ className: 'w-5 h-5' }),
    bg: 'bg-yellow-950',
    text: 'text-yellow-500',
  },
  REDUX: {
    label: 'Redux',
    icon: Redux({ className: 'w-5 h-5' }),
    bg: 'bg-[#362A4C]',
    text: 'text-violet-500',
  },
};

export const POSTS = [
  {
    id: 1,
    title: 'Zustand VS Redux',
    date: 'Dec 5 - 2024',
    tags: [POSTS_BY_TAG.ZUSTAND, POSTS_BY_TAG.REDUX],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!.',
    href: 'zustand-vs-redux',
    resume:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6lf4AZFexY1dKZm9ovT3m0R7AuioL5O4gA&s',
    new: true,
  },
];
