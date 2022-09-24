
import {getDocs} from "firebase/firestore";


const getItems = async (q) =>{
    const querySnapshot = await getDocs(q);
    const rtaObjet = querySnapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return rtaObjet
}

export default getItems