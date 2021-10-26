/*==MODULES===================================================================*/
import { FunctionComponent } from 'react'
import Link from 'next/link'

/*==COMPONENTS================================================================*/
/*==STYLES====================================================================*/
import styles from '../styles/components/footerItem.module.scss'

/*============================================================================*/

interface Props {
    route: string,
    icon: string
}

const Footer: FunctionComponent<Props> = (props: Props) => {
    console.log(props.icon)
    return (
        <Link href="/">
            <a className={styles.container}>
                <section>
                    <img className={styles.top} src={`/images/icons/socialMedia/${props.icon}.png`} />
                    <img className={styles.bottom} src={`/images/icons/socialMedia/${props.icon}_hover.png`} />
                </section>
            </a>
        </Link>
    )
}

export default Footer