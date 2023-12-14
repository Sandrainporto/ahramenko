import './loader.scss';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f5b561"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="container"
        visible={true}
      />
    </div>
  );
};

export default Loader;
