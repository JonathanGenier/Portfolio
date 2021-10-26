/*==MODULES===================================================================*/
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import LanguageToggler from './languageToggler'

/*==COMPONENTS================================================================*/
import WideNavbar from './navbar/wide/navbar'
import Menu from './menu'
import Footer from './footer'

/*==STYLES====================================================================*/
import styles from '../styles/components/layout.module.scss'

/*============================================================================*/

interface Props {
    children: ReactNode
}

const Layout: FunctionComponent<Props> = (props: Props) => {

    const [viewport, setViewport] = useState({
        width: 0
    })

    const updateViewport = () => {
        setViewport({ ...viewport, width: window.innerWidth })
    }

    useEffect(() => {
        updateViewport();
        window.addEventListener('resize', updateViewport)
    }, [])

    const renderNavbar = () => {

        if (viewport.width < 992) {
            //return (<NewCompactNavbar />)
            // return (<CompactNavbar />)
        }

        return (<WideNavbar />)
        //return (<WideNavbar />)
    }

    return (
        <div className={styles.pageWrapper}>
            <header className="exp-c">
                <div className={styles.content + " res-c"}>
                    <Menu/>
                    <LanguageToggler/> 
                </div>
            </header>

            <main className="exp-c">
                <div className="res-c">
                    {props.children}
                </div>
            </main>
            
            <footer className="exp-c">
                <div className={styles.content + " res-c"}>
                    <Footer/>
                </div>
            </footer>
            {/* {renderNavbar()}
            <LanguageToggler/> */}
        </div>
    )
}

export default Layout
