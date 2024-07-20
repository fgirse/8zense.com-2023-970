import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-800">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/about">{t('pathnames')}</NavigationLink>
          <NavigationLink href="/gallery">{t('pathnames01')}</NavigationLink>
          <NavigationLink href="ycontact">{t('pathnames02')}</NavigationLink>
          <NavigationLink href="/impressum">{t('pathnames03')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
