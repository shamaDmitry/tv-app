import Link from 'next/link';

const Breadcrumb = ({data}) => {
  const _data = data.split('/');

  return (
    <nav style={{ backgroundColor: '#ccc', color: '#fff', padding: '25px' }}>
      <Link href="/">
        <a style={{margin: '15px'}}>Home</a>
      </Link>

      {
        _data.map((item, key) => <Link href={item} key={key}><a style={{margin: '15px'}}>{item}</a></Link>)
      }

    </nav>
  )
};

export default Breadcrumb;