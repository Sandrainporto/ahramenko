import styles from './Gallery.module.scss';

const Gallery = ({
  images,
}: {
  images?: Array<{ name: string; path: string }>;
}) => {
  return (
    <div className={styles.gallery}>
      {images?.map((image, index) => (
        <div
          key={index + `${Math.random() * 10000}`.slice(2)}
          className={
            image.name == 'Girl'
              ? styles.item + ' ' + styles.item_big
              : styles.item
          }
        >
          <img src={image.path} alt={image.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
