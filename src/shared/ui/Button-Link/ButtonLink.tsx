import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import './ButtonLink.scss';
type Props = {
  path: string;
  text: string;
};

const MyButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ({ path, text }, ref) => {
    return (
      <Link className="button-link" to={path} ref={ref}>
        {text}
      </Link>
    );
  }
);

export default MyButtonLink;
export const MButtonLink = motion(MyButtonLink);
