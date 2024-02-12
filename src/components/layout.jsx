import React from 'react'

export default function Layout(props) {
    const { children } = props;
    return (
        <><div>
            <header>
                <h1>One Rep Max Calculator</h1>
            </header>
            {children}
            <footer>
                Footer
            </footer>
        </div>
        </>
    )
}
