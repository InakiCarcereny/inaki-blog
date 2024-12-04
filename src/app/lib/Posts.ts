import { ReactIcon } from '../icons/React';
import { Zustand } from '../icons/Zustand';

type Tag = 'REACT' | 'ZUSTAND';

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
};

export const POSTS = [
  {
    id: 4,
    title: 'Titulo del articulo',
    date: 'Dec 3 - 2024',
    tags: [POSTS_BY_TAG.REACT, POSTS_BY_TAG.ZUSTAND],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!',
    href: 'react-zustand-ts',
    new: true,
  },
  {
    id: 3,
    title: 'Titulo del articulo',
    date: 'Dec 3 - 2024',
    tags: [POSTS_BY_TAG.REACT, POSTS_BY_TAG.ZUSTAND],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!',
    href: 'react-zustand-ts',
    new: false,
  },
  {
    id: 2,
    title: 'Titulo del articulo',
    date: 'Dec 3 - 2024',
    tags: [POSTS_BY_TAG.REACT, POSTS_BY_TAG.ZUSTAND],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!',
    href: 'react-zustand-ts',
    new: false,
  },
  {
    id: 1,
    title: 'Titulo del articulo',
    date: 'Dec 3 - 2024',
    tags: [POSTS_BY_TAG.REACT, POSTS_BY_TAG.ZUSTAND],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure voluptatum blanditiis doloribus laborum cum aperiam, magnam quasi ratione, inventore totam quae odit voluptatibus fuga. Nostrum distinctio ipsam ducimus animi!',
    href: 'react-zustand',
    new: false,
  },
];
