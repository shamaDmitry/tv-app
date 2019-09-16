import React from 'react';
import _ from 'lodash';

import "./Footer.scss";

const socialList = [
  {
    id: _.uniqueId('id_'),
    href: 'example.com',
    iconClass: 'icon-instagram',
  },
  {
    id: _.uniqueId('id_'),
    href: 'example.com',
    iconClass: 'icon-twitter',
  },
  {
    id: _.uniqueId('id_'),
    href: 'example.com',
    iconClass: 'icon-facebook',
  },
];

const SocialLink = ({props}) => (
  <li>
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <span className={props.iconClass}/>
    </a>
  </li>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="align-items-center row">
        <div className="col-6">
          <p className="footer-copy">
            © 2018 john doe
          </p>
        </div>

        <div className="text-right col-6">
          <ul className="footer-social list-unstyled">
            {socialList.map((item) =>
              <SocialLink props={item} key={item.id}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;