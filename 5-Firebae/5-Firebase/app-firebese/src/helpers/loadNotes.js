import { db } from '../firebase/firebase-config'

export const loadNotes = async (uid) => {

    const cardStore = await db.collection(`${uid}/Card/data`).get()
    const cardsList = [];

    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return cardsList
}

