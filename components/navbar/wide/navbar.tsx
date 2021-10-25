/*==MODULES===================================================================*/
import { FunctionComponent, useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/dist/client/router'

/*==COMPONENTS================================================================*/
import NavbarItem from './navbarItem'

/*==STYLES====================================================================*/
import styles from '../../../styles/components/navbar/wide/navbar.module.scss'

/*============================================================================*/

interface Props {

}

const Navbar: FunctionComponent<Props> = (props: Props) => {

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
        <nav className={styles.container}>
            {navItems.map((navItem) =>
                <NavbarItem
                    key={navItem.id}
                    text={navItem.text}
                    active={navItem.route === activeItem}
                    route={navItem.route}
                />
            )}
        </nav>
    )
}

export default Navbar