
import React from 'react';
import '../footer/footer.css';
import imgmilk from '../img/Dairy.svg';
import imgveget from '../img/fruits.png';
import condi from '../img/Condiments.svg';
import honey from '../img/honey.svg';
import flour from '../img/flour.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='fifecard'>
      <div className="caard">
        <img src={imgmilk} alt="" />
        <h3>{t('Dairy Products')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="caard">
        <img src={imgveget} alt="" />
        <h3>{t('Vegetables & Fruits')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="caard">
        <img src={condi} alt="" />
        <h3>{t('Spices & Seasonings')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="caard">
        <img src={honey} alt="" />
        <h3>{t('Honey')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="caard">
        <img src={flour} alt="" />
        <h3>{t('Flour')}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Footer;
