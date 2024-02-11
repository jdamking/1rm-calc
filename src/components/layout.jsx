import React from 'react'

export default function Layout(props) {
    const { children } = props;
    return (
        <><div>
            <header>
                <h1>cla</h1>
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
