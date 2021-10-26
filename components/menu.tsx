/*==MODULES===================================================================*/
import { FunctionComponent, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/dist/client/router'

/*==COMPONENTS================================================================*/
import NavbarItem from './navbar/wide/navbarItem'

/*==STYLES====================================================================*/
import styles from '../styles/components/menu.module.scss'

/*============================================================================*/

interface Props {

}

const Menu: FunctionComponent<Props> = (props: Props) => {

    let { t } = useTranslation('common')
    let router = useRouter()
    let [activeItem, setActiveItem] = useState(router.route)

    let navItems = [
        { id: "home", text: t('navbar_home'), route: '/' },
        { id: "about", text: t('navbar_about'), route: '/about' },
        { id: "skills", text: t('navbar_skills'), route: '/skills' },
        { id: "projects", text: t('navbar_projects'), route: '/projects' },
        { id: "contact", text: t('navbar_contact'), route: '/contact' }
    ]

    useEffect(() => {
        setActiveItem(router.route)
    })

    return (
        <div className={styles.container}>
            <div className={styles.marker}>
                <div className={styles['icon']} />
                <span>Menu</span>
            </div>


            <nav className={styles.nav}>
                {navItems.map((navItem) =>
                    <NavbarItem
                        key={navItem.id}
                        text={navItem.text}
                        active={navItem.route === activeItem}
                        route={navItem.route}
                    />
                )}
            </nav>
        </div>
    )
}

export default Menu