
import React from 'react';
import '../main/index.css';
import image1 from '../img/img1.svg';
import karamimg from '../img/karam img.svg';
import sabziimg from '../img/sabzi img.png';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='main'>
      <div className="mainone">
        <h1>{t('Let your groceries come to you')}</h1>
        <p>{t('Get fresh groceries online without stepping out to make delicious food with the freshest ingredients')}</p>
        <form>
          <input type="text" placeholder='Search here' />
          <button></button>
        </form>
        <div className="mainonep">
          <p>{t('Fresh Vegetables')}</p>
          <p>{t('100% Guarantee')}</p>
        </div>
        <div className="mainonep">
          <p>{t('Cash on Delivery')}</p>
          <p>{t('Fast Delivery')}</p>
        </div>
      </div>
      <div className="miantwo">
        <img src={image1} alt="Grocery Illustration" />
      </div>
      <div className="mainthree"> 
        <div className="card">
          <img src={karamimg} alt="" />
          <p>{t('Fresh Spinach')}</p>
          <span>$12.00</span>
        </div>
        <div className="card">
          <img src={sabziimg} alt="" />
          <p>{t('Fresh Spinach')}</p>
          <span>$12.00</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
