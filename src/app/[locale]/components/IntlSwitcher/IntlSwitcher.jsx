'use client'

// import { Link } from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from './IntlSwitcher.module.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { usePathname, useRouter, Link } from '../../../../navigation'
import Image from 'next/image'

import imgArgentina from '../../../../../public/images/argentina.png'
import imgBrasil from '../../../../../public/images/brasil.png'

const IntlSwitcher = ({ locale }) => {
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <AiOutlineGlobal onClick={() => setShow(!show)} className={styles.global} />
      <div ref={ref} style={show === false ? { display: 'none' } : {}} className={styles.linksContainer}>
        <Link 
          className={locale === 'es' ? styles.active : styles.inactive} 
          href={pathname} locale='es'
        >
          <div className={styles.selectLocale}>
            <Image width={20} height={20} alt='argentina flag' className={styles.flag} src={imgArgentina}/> <span>Epañol</span>
          </div>
        </Link>
        <Link 
          className={locale === 'pt' ? styles.active : styles.inactive} 
          href={pathname} locale='pt'
        >
          <div className={styles.selectLocale}>
            <Image width={20} height={20} alt='argentina flag' className={styles.flag} src={imgBrasil}/> <span>Portugés</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default IntlSwitcher