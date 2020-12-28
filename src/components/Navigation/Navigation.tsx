import React from 'react'
import { NavLink } from 'react-router-dom'
import { IRedirectRoute, IRoute } from './Navigation.interface'
import styles from './Navigation.module.scss'

export const routes: (IRedirectRoute | IRoute)[] = [
    {
        redirect: true,
        from: '/',
        to: '/journal',
    },
    {
        label: 'Дневник',
        path: '/journal',
    },
    {
        label: 'Админ',
        path: '/admin',
    },
]

export function Navigation(): JSX.Element {
    return (
        <nav>
            <ul className={styles.list}>
                {
                    routes.map((route: IRedirectRoute | IRoute) => {
                        if ('redirect' in route) {
                            return null
                        }
                        return (
                            <li key={route.path}
                                className={styles.listItem}>
                                <NavLink to={route.path}
                                         activeClassName={styles.listItemIsActive}>
                                    {route.label}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}