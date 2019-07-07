import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to home</a>
    </Link>

    <p>A Javascript Programmer</p>
    <img src="/static/javascript-logo.png" alt="JavaScript" height="200px"></img>
  </Layout> 
)