import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('welcome')}</h2>
      <p>{t('priority')}</p>
    </div>
  );
};

export default HomePage;