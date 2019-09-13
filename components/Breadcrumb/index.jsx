import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const _Breadcrumb = ({data}) => {
  // const _data = data.split('/');

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
    </>
  )
};

export default _Breadcrumb;