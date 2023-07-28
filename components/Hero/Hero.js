import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['container-hero']}>
      <div className={styles.txt_wrapper}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://multimedia.maimonides.edu/">the machine</a>
        </h1>
        <p>Choose your favorite shows</p>
      </div>

      <div className={styles['overlay']}></div>
    </div>
  );
};

export default Hero;
