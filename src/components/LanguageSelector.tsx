import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className={`language-selector ${className}`}>
      <label htmlFor="language-select" className="sr-only">
        {t('common.language')}
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-gray-800/90 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 xs:px-3 xs:py-2 text-white text-xs xs:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus:border-transparent transition-all duration-200 hover:border-white/40 min-w-0 w-auto min-h-[36px]"
        aria-label={t('common.language')}
      >
        {languages.map((lang) => (
          <option 
            key={lang.code} 
            value={lang.code}
            className="bg-gray-900 text-white"
          >
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;