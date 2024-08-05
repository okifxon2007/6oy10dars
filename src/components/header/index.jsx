import React from 'react';
import '../header/index.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(e) {
    i18n.changeLanguage(e.target.value);
  }

  
  return (
    <div className="header">
      <h1>Fines <span>Mart</span></h1>
      <ul>
        <li>{t('home')}</li>
        <li>{t('categories')}</li>
        <li>{t('sales')}</li>
        <li>{t('faq')}</li>
        <li>{t('about')}</li>
        <li>{t('contact')}</li>
      </ul>
      
      <select onChange={handleLanguageChange} defaultValue="uz">
        <option value="en">English</option>
        <option value="uz">Uzbek</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default Header;
