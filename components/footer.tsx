/*==MODULES===================================================================*/
import { FunctionComponent } from 'react'
import Link from 'next/link'

/*==COMPONENTS================================================================*/
import FooterItem from './footerItem'

/*==STYLES====================================================================*/
import styles from '../styles/components/footer.module.scss'

/*============================================================================*/

interface Props {

}

const Footer: FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.rightContainer}>
                <span>Follow me</span>
                <hr/>
                <FooterItem route="/" icon="facebook" />
                <FooterItem route="/" icon="linkedin" />
                <FooterItem route="/" icon="indeed" />
                <FooterItem route="/" icon="github" />
                <FooterItem route="/" icon="stackoverflow" />
            </div>

        </div>
    )
}

export default Footer