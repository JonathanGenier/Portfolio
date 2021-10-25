import { FunctionComponent } from 'react'
import NavbarItem from './navbarItem'

import styles from '../../../styles/components/navbar/wide/navbar.module.scss'

interface Props {
    
}

const Navbar: FunctionComponent<Props> = (props: Props) => {
    return (
        <nav className={styles.container}>
            <NavbarItem text={"Home"} active={true} page=''/>
            <NavbarItem text={"About"} active={false} page='about'/>
            <NavbarItem text={"Skills"} active={false} page='skills'/>
            <NavbarItem text={"Projects"} active={false} page='projects'/>
            <NavbarItem text={"Contact"} active={false} page='contact'/>
        </nav>
    )
}

export default Navbar