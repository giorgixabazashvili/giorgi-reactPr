import {getAllUsers} from './user'

export const checkIfUserExists = async (user) => {
    try {
        const data = await getAllUsers()

const foundeUser =  data.find(u => u.email === user.email && u.password === user.password && u.firstname === user.firstname && u.lastname === user.lastname);
        if(foundeUser){
            return {exists: true , id: foundeUser }
        } else {
            return  {exists: false , id: null }

        }
      } catch (err) {
        console.log(err);
      }

}