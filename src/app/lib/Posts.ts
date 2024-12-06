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
    description: `Zustand or Redux? 🤔
If you're in the world of frontend development, you've probably heard about Redux, but... have you tried Zustand? 🐻 Here's a comparison that can help you decide which one to use in your next project. 🚀

1. Setup
-Redux: Requires more complex initial setup. You need to create reducers, actions, and a store. With tools like Redux Toolkit, this process is simplified, but still requires some effort.

-Zustand: Super simple! You only need one file for your store, and there are no mandatory actions or reducers. It's more straightforward and less ceremonial.

2. Size
-Redux: About 12 KB compressed.

-Zustand: About 2 KB compressed, perfect for projects where weight matters.

3. API
-Redux: Follows an approach based on solid principles like immutability and strict (one-way) data flow. However, its API can be intimidating for beginners.

-Zustand: Offers a minimalist API that is easy to understand. You can work directly with state mutations without worrying about strict immutability (although you can force it if you want).

4. Scalability
-Redux: Designed for large, complex applications. Scaling is easier thanks to its mature ecosystem and tooling.

-Zustand: Ideal for small to medium-sized applications. Although it supports larger projects, its flexibility can lead to less consistency on large teams.

5. DevTools
-Redux: Includes a robust ecosystem with Redux DevTools, which is perfect for debugging.

-Zustand: Also supports Redux DevTools, but it is not as complete as Redux's native support.

6. Selector and Re-rendering
-Redux: You can optimize with reselect or memoization, but it requires additional configuration.

-Zustand: Use selectors natively and efficiently to avoid unnecessary re-rendering.

Conclusion
Use Redux if... you are building a complex application, have a large team, or need a standardized solution.

Use Zustand if... you are looking for speed, simplicity or are working on a small to medium-sized application.`,
    href: 'zustand-vs-redux',
    resume:
      'Redux or Zustand? Compare configuration, API, performance, and scalability to choose the best tool for your next app.',
    image: '/assets/zustand-vs-redux.webp',
    new: true,
  },
];
