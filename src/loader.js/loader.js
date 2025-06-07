import { redirect,defer} from "react-router-dom"
// esari iseti ragaca maglitad tu araa useri registrirebuli
//  ar gadaushvebs xolo tu aris sheudzlia userma isaregeblos
import { getAllUsers} from '../services/api/user'
import { getById } from "../services/api/user"





// da  naxos tavisi informacia
export const UsersLoader = async() => {
        try{
            const dataPromise =  getAllUsers()
            return  defer( { data: dataPromise })

        } catch(err){
            console.log(err)
        }
        return null
}


export const userDetailLoader = async ({ params }) => {

    // const authResult = await requireAuth()

    // if(authResult){
    //     return authResult

    // } else {
    //     redirect('/login')
    // }


    try{

        const dataPromise =  getById(params.id)
        return defer ( { user: dataPromise } )

    } catch (err)  {
        console.log(err)

    }
    return null

}


export const requireAuth =  async ({isLoggedIn}) => {

     

    if(!isLoggedIn) {
      return  redirect('/login')

    } 

    return null;
    
}



