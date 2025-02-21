import React from 'react';
import { useTranslation } from 'react-i18next';

const RecordPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('medicalRecords')}</h2>
      <p>{t('viewManageRecords')}</p>
    </div>
  );
};

export default RecordPage;