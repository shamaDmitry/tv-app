import React from 'react';
import Link from 'next/link';
import _ from 'lodash';

import './Header.scss';

const menuList = [
  {
    id: _.uniqueId('id_'),
    href: '/shows',
    title: 'shows',
  },
  {
    id: _.uniqueId('id_'),
    href: '/about',
    title: 'about',
  },
];

const MenuLink = ({props}) => (
  <Link href={props.href}>
    <a className="b-nav-link">
      {props.title}
    </a>
  </Link>
);

const Header = () => (
  <header className="w-nav">
    <div className="container">
      <div className="w-nav-logo">
        <Link href="/">
          <a className="icon-display" />
        </Link>
      </div>

      <nav className="b-nav">
        {menuList.map((menuItem) => (
          <MenuLink props={menuItem} key={menuItem.id}/>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;