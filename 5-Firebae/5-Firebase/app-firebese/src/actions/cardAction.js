import { db } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'
import {types} from '../types/types'
import Swal from 'sweetalert2'
import {fileUpload} from '../helpers/fileUpload'

export const CardNew = (card,file) => {
    return async (dispatch, getSate) => {
        let fileUrl=[]
        const uid = getSate().auth.uid
      
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl = []
        }

        const newCard = {
            title: card.title,
            responsible: card.responsible,
            description: card.description,
            priority: card.priority,
            url: fileUrl
        }

        const docRef = await db.collection(`${uid}/Card/data`).add(newCard)
        dispatch(addNewCard(docRef.id, newCard))

    }
}

export const ListarCard = (uid) => {
    return async (dispatch) => {
        const cards = await loadNotes(uid)
        dispatch(setNote(cards))
    }
}

//FUNCIÓN SINCRÓNICA 

export const addNewCard = ( id, card ) => ({
    type: types.cardAddNew,
    payload: {
        id, ...card
    }
})

//activar cards para editar o eliminar
export const activeCard = (id, card) => {
    return {
        type: types.cardActive,
        payload: {
            id,
            ...card
        }
    }
}

export const clearCard = () => {
    return {
        type: types.cardLogoutClean,
    }
}

export const setNote = (cards) => {
    return {
        type: types.cardLoad,
        payload: cards
    }
}

export const Edit = (card,file) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        let fileUrl =[]
        
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl= card.url
        }
      

        console.log(fileUrl);

        if (!card.url) {
            delete card.url;
        }

        const EditCard = {
            title: card.title,
            responsible: card.responsible,
            description: card.description,
            priority: card.priority,
            url: fileUrl
        }

        const cardFire = { ...EditCard  }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

           await db.doc(`${uid}/Card/data/${card.id}`).update(EditCard)
           console.log(EditCard)

        dispatch(refreshNote(card.id, EditCard));
        Swal.fire('Saved', card.title, 'success');
        dispatch(ListarCard(uid))
    }
}

export const refreshNote = (id, card) => ({
    type: types.cardUpdate,
    payload: {
        id,
        card: {
            id,
            ...card
        }
    }
});

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        const card = getState().auth.card;

        await db.doc(`${uid}/Card/data/${id}`).delete();

        dispatch(deleteNote(id));
        dispatch(refreshNote(id, card));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarCard(uid))
    }
}

export const deleteNote = (id) => ({
    type: types.cardDelete,
    payload: id
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active: activeNote } = getState().card;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl
        dispatch(Edit(activeNote))

        Swal.close()
    }
}