import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>HealthBridge Platform</h1>
        <nav>
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/records">{t('records')}</Link></li>
            <li><Link to="/about">{t('about')}</Link></li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;