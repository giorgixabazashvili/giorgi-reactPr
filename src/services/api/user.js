import axios from "axios"

const API = 'https://davits-api.vercel.app/api/users'

export const getAllUsers  = async () => {
    try{
        const response = await axios.get(API)
        const res = response.data
        // console.log(response)
        // console.log(result)

        if(response.status === 200){
            return res.result
        }
        
    }catch(err){
        console.error(err)
    }
    return null

}

// getAllUsers();


export const getById = async (id) => {

    try{
    
        const response = await axios.get(`https://davits-api.vercel.app/api/users/${id}`)
        const res = response.data
        
        if(response.status === 200){
            return res.result
        }



    } catch(err){
        console.log(err)
    }    return null


  


}
// getById()

export const deleteUser = async (id) => {

    try{
        const response = await axios.delete(`https://davits-api.vercel.app/api/users/${id}`)
        const res = response.data
            return res.status

    } catch(err){
        console.log(err)
    }
    return null




}
