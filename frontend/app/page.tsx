
import axios from "axios"
import { use } from "react";



export   async function get_users():Promise<string[]> {

   const response = await axios.get('http://backend:3001/users') ;
   return (await response.data).user ;
   
  
  
}

 export  default async function page() {

    const users:string[] =   await get_users(); 
   return  (

    <div>
      {
        users.map((user:string)=>
          user
        )
      }
    </div>
    
   )

  
 }

 export const dynamic = "force-dynamic";
