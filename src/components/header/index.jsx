import React, { useState, useEffect } from 'react';
import '../header/index.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  function handleLanguageChange(e) {
    i18n.changeLanguage(e.target.value);
  }

  function handleDarkModeChange(e) {
    const isDark = e.target.value === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  useEffect(() => {
    // Dark mode holatini saqlash
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
      if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
      }
    }
  }, []);

  useEffect(() => {
    // Dark mode holatini saqlash
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

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
      <select onChange={handleDarkModeChange} defaultValue={darkMode ? "dark" : "light"}>
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
    </div>
  );
};

export default Header;
