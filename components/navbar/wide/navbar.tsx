import { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import NavbarItem from './navbarItem'

import styles from '../../../styles/components/navbar/wide/navbar.module.scss'
import { HtmlProps } from 'next/dist/shared/lib/utils'

interface Props {

}

const Navbar: FunctionComponent<Props> = (props: Props) => {

    let router = useRouter()
    let [activeItem, setActiveItem] = useState(router.route)

    let navItems = [
        { id: "home", text: "Home", route: '/' },
        { id: "about", text: "About", route: '/about' },
        { id: "skills", text: "Skills", route: '/skills' },
        { id: "projects", text: "Projects", route: '/projects' },
        { id: "contact", text: "Contact", route: '/contact' }
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