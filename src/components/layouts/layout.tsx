import React from "react";

const Layout = ({children, className=""}: {children: JSX.Element, className?: string}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 pt-0 laptop:p-0 sm-desktop:py-6 sm-desktop:p-6 ${className}`}>
            {children}
        </div>
    )
}

export default Layout;