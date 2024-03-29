import classNames from 'classnames/bind';
import styles from 'src/components/loading/loading.module.scss';
import RadarLoader from '../radar-loader/radar-loader';

const cx = classNames.bind(styles);

const LoadingComponent = () => {
  return (
    <div className={styles['wrapper']}>
      <RadarLoader />
    </div>
  );
};
export default LoadingComponent;
