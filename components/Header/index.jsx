import Link from 'next/link';

const MenuLink = (props) => (
    <>
      <style jsx>{`
        a {
          color: #20232a;
          margin:  15px 0;
          font-size: 18px;
          text-decoration: none;
          display: inline-block;
          text-transform: capitalize;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        }

        a + a {
          margin-left: 15px;
        }
    `}</style>

      <Link href={`${props.href}`}>
        <a>
          {props.title}
        </a>
      </Link>
    </>
);

const Header = () => (
    <>
      <style jsx>{`
        header {
          margin: 0 0 15px;
        }

        nav {
          margin: 0 auto;
          max-width: 1200px;
        }
    `}</style>

      <header>
        <nav>
          <MenuLink href="/" title="home"/>

          <MenuLink href="/shows" title="shows"/>

          <MenuLink href="/about" title="about"/>
        </nav>
      </header>
    </>
);

export default Header;