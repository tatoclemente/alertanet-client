// import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ROUTES from './helpers/Routes'
import Navbar from './components/NavBar/Navbar'

// Server Hook Intl
import { useTranslations, useLocale } from 'next-intl'


export default function Home() {
  const locale = useLocale()
  const t = useTranslations('Landing')
  return (
    <div>
      <Navbar locale={locale} />
      <h1>{t('title')}</h1>
      <br />
     <Link href={`${locale}/${ROUTES.ADMIN.ADMIN_DASHBOARD}`}>IR AL DASHBOARD ADMIN</Link>  
    </div>
  )
}
