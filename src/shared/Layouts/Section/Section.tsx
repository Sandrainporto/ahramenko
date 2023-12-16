import './Section.scss';
import { forwardRef, LegacyRef } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
  classNames: string;
  children: JSX.Element[] | JSX.Element;
};

const Section = forwardRef(
  ({ classNames, children }: SectionProps, ref: LegacyRef<HTMLElement>) => {
    const classes = 'section ' + classNames;

    return (
      <section className={classes} ref={ref}>
        <div className="container">{children}</div>
      </section>
    );
  }
);

export default Section;
export const MSection = motion(Section);
