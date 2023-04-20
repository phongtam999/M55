import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/footer';
//controller
// Phương thức getStaticProps có thể được sử dụng bên trong một Page để lấy dữ liệu ngay tại thời điểm xây dựng
export function getServerSideProps(context) {
  return {
    props: {
      name:'NVA',
      age:18
    },
  }
  };
function index(props) {
  console.log(props);
  return (
    <div>
      <Header/>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Footer/>

    </div>
  );
}

export default index;