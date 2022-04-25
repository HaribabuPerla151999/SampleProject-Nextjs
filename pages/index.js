import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import UsersList from "../components/usersList"

export default function Home({users}) {
  console.log(users)
  return (
    
    <div>
         <Head>
           <title>UserProfileApplication</title>
           <meta name="keywords" content="user,user-application,userprofile"></meta>
          <meta name="description" content="its user profile application"></meta>
         </Head>
   
       
        <div className={styles.container}>
           <h3 className={styles.title}>User Profile <a href="/">Application</a></h3>
         </div>
         <UsersList users={users}/>
      </div>

      
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}
