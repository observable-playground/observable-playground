import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { menu as examplesMenu } from '../../examples';
import style from './MenuComponent.module.scss';

const RXJS_MENU_ROOT = examplesMenu.find(({ handle }) => handle === 'rxjs');

const isLinkActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent
        ? { className: style.Menu__Link_active }
        : { className: style.Menu__Link }
}

const renderLibraryMenu = (menuEntry) => {
    return (
        <ul className={style.Menu__library_contents}>
            {menuEntry.library.groups.map(group => (
                <li key={group.name} className={style.Menu__group}>
                    <span className={style.Menu__group_name}>{group.name}</span>
                    <ul className={style.Menu__group_contents}>
                        {group.items.map(item => (
                            <li key={item}
                                className={style.Menu__item}
                            >
                                <Link
                                    href="/[libId]/[fileId]/"
                                    as={`/${menuEntry.handle}/${item}/`}
                                ><a className={style.Menu__Link}>{item}</a></Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export function MenuComponent() {
    const router = useRouter();

    let activeLib = examplesMenu.find(m => router.asPath.startsWith('/' + m.handle + '/'));
    if (!activeLib) {
        activeLib = RXJS_MENU_ROOT;
    }

    return (
        <nav className={style.Menu}>
            {
                examplesMenu.map(menuEntry => (
                    <div key={menuEntry.handle} className={style.Menu__library_name}>
                        <Link
                            href="/[libId]/"
                            as={ '/' + menuEntry.handle + '/' }
                        >
                            <a className={ style.Menu__Link }>{menuEntry.library.name}
                            <span className={style.Menu__library_version}>v{menuEntry.library.version}</span>
                        </a></Link>

                        { activeLib.handle == menuEntry.handle
                        ? <ul className={style.Menu__examples}>
                            <li key={activeLib.handle} className={style.Menu__library}>
                                { renderLibraryMenu(activeLib) }
                            </li>
                          </ul>
                        : null
                        }
                    </div>
                ))
            }


        </nav>
    );
}