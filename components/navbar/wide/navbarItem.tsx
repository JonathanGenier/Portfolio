import { MouseEvent, FunctionComponent } from 'react'
import Link from 'next/link'

import styles from '../../../styles/components/navbar/wide/navbarItem.module.scss'

interface Props {
    text: string,
    active: boolean,
    page: string
}

const Navbar: FunctionComponent<Props> = (props: Props) => {

    return (
        <Link href={`/${props.page}`}>
            <a className={styles.container}>
                <div className={styles['point' + (props.active ? '_active' : '')]} />
                <span>{props.text}</span>
            </a>
        </Link>
    )
}

export default Navbar