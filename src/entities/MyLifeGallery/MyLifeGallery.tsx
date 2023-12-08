import styles from './MyLifeGallery.module.scss';
import image1 from './../../assets/tiles/about-me.webp';
import image2 from './../../assets/tiles/contacts.webp';
import image3 from './../../assets/tiles/home.webp';
import image4 from './../../assets/tiles/testimonials.webp';
interface ImagesTypes {
  path: string;
  title: string;
}

const MyLifeGallery = () => {
  const images: ImagesTypes[] = [
    { path: image1, title: 'gallery-image1' },
    { path: image2, title: 'gallery-image2' },
    { path: image3, title: 'gallery-image3' },
    { path: image4, title: 'gallery-image4' },
  ];

  return (
    <div className={styles.images}>
      {images.map((image) => (
        <div key={image.title} className={styles.image}>
          <img src={image.path} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default MyLifeGallery;
