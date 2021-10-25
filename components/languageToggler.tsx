/*==MODULES===================================================================*/
import { FunctionComponent } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

/*==COMPONENTS================================================================*/
/*==STYLES====================================================================*/
import styles from '../styles/components/languageToggler.module.scss'

/*============================================================================*/

interface Props {
    
}

const LanguageToggler: FunctionComponent<Props> = (props: Props) => {

    let router = useRouter()

    return (
        <Link href={router.asPath} locale={(router.locale == "en" ? 'fr' : 'en')}>
            <a className={styles.container}>
                <div className={styles.icon} />
                <span>{(router.locale == "en" ? "Français" : "English")}</span>
            </a>
        </Link>
    )
}

export default LanguageToggler