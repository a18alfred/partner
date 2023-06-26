import {Variants} from 'framer-motion';

export const slideFromLeft: Variants = {
    offscreen: {
        x: '-100px',
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut', duration: 0.6,
        }
    }
};

export const slideFromRight: Variants = {
    offscreen: {
        x: '100px',
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut', duration: 0.6
        }
    }
};

export const slideFromBottom: Variants = {
    offscreen: {
        y: '75px',
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut', duration: 0.5
        }
    }
};