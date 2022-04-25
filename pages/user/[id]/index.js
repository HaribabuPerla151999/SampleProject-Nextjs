import react from "react";
import HomeStyles from "../../../styles/Home.module.css";


const index = ({user}) =>{
    console.log(user)
    return(
       <div>
            <main className={HomeStyles.main}>
                <div className={HomeStyles.grid}>
                   {user&&
                       
                            <div className={HomeStyles.card}>
                                <p>Name:{user.name}</p>
                                <p>Email:{user.email}</p>
                                <p>Company:{user.company.name}</p>
                                <p>Website:{user.website}</p>
                                <p>Phone:{user.phone}</p>
                                <p>Address:{user.address.street}</p>
                                

                            </div>
                            
                            
                    }
                </div>

      
            </main>

       </div> 
    )
}

export async function getServerSideProps(context) {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await res.json()
  
    
    return { props: { user } }
  }



export default index