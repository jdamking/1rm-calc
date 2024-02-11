import React from 'react'

export default function Layout(props) {
    const { children } = props;
    return (
        <><div>
            <header>
                Header
            </header>
            {children}
            <footer>
                Footer
            </footer>
        </div>
        </>
    )
}
