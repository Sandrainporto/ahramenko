import styles from './Gallery.module.scss';

const Gallery = ({
  images,
}: {
  images?: Array<{ name: string; path: string }>;
}) => {
  return (
    <div className={styles.gallery}>
      {images?.map((image) => (
        <div key={image.name} className={styles.item}>
          <img src={image.path} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
