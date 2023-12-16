export const textAnimationUpDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.3 },
  }),
};
export const textAnimationRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
};

export const textAnimationLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.5 },
  }),
};

export const tilesAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

export const lifeGalleryAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: custom * 1.5, delay: custom * 0.3 },
  }),
};

export const contactIconsAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.3 },
  }),
};

export const imageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: custom * 1.5 },
  }),
};
