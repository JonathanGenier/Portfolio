/*==MODULES===================================================================*/
import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

/*==COMPONENTS================================================================*/
import WideNavbar from './navbar/wide/navbar'

/*==STYLES====================================================================*/
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
        <div>
            <main className="main">
                {props.children}
            </main>
            {renderNavbar()}
        </div>
    )
}

export default Layout
