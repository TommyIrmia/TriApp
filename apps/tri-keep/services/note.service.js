import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storageService.js'

export const keepService = {
    deleteNote,
    query,
    getNoteById,

}

const KEY = 'notesDB';
var gNotes = [];


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

_createnotes

function _createnotes() {
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
                    url: "http://some-img/me",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            }
        ]
    }
    gBooks = [...books];
    _saveNotesToStorage();
}



function _saveNotesToStorage() {
    storageService.save(KEY, gNotes);
}

function query() {
    return Promise.resolve(gNotes);
}