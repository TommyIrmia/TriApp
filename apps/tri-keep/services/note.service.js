// import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storage.service.js'

export const NoteService = {
    deleteNote,
    query,
    getNoteById,

}

const KEY = 'notesDB';
var gNotes = []



function deleteNote(noteId) {
    gNotes = gNotes.filter(note => note.id !== noteId)
    _saveNotesToStorage()
    return Promise.resolve()
}

function getNoteById(noteId) {
    var note = gNotes.find(note => {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

_createNotes()

function _createNotes() {
    var notes = storageService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        notes = [{
                id: "n101",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "https://i.picsum.photos/id/933/200/280.jpg?hmac=8zdipGWKGkHz8wyA9J63P3fzghuUL9wqV5Y34b8mLTI",
                    title: "smoke on ground",
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            // {
            //     id: "n103",
            //     type: "note-todos",
            //     info: {
            //         label: "Get my stuff together",
            //         todos: [
            //             { txt: "Driving liscence", doneAt: null },
            //             { txt: "Coding power", doneAt: 187111111 }
            //         ]
            //     }
            // }
        ]
    }
    gNotes = [...notes];
    _saveNotesToStorage();
}



function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
}

function query() {
    return Promise.resolve(gNotes);
}