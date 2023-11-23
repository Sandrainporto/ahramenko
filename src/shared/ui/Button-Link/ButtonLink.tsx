import { Link } from 'react-router-dom';
import './ButtonLink.scss';
type Props = {
  path: string;
  text: string;
};

const MyButtonLink = ({ path, text }: Props) => {
  return (
    <Link className="button-link" to={path}>
      {text}
    </Link>
  );
};

export default MyButtonLink;
