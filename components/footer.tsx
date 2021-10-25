/*==MODULES===================================================================*/
import { FunctionComponent } from 'react'
import Link from 'next/link'

/*==COMPONENTS================================================================*/
/*==STYLES====================================================================*/
import styles from '../styles/components/navbar.module.scss'

/*============================================================================*/

interface Props {
    
}

const Footer: FunctionComponent<Props> = (props: Props) => {
    return (
        <nav className={styles.container}>
            <ul>
                <li>
                    <div>
                        <img/>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        
                    </div>
                </li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </ul>
        </nav>
    )
}

export default Footer