import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/content/Content'
import Sidebar from '../components/sidebar/Sidebar'
import style from './main.module.css'
import Dashboard from '../components/dashboard/Dashboard'

export default function Home() {
  return (
    <main >
      <div className={style.first}>
          <Sidebar />
        <div className={style.second}>
        <Navbar />
        <Dashboard/>
          <Content />
        </div >
      </div>
    </main>
  )
}
