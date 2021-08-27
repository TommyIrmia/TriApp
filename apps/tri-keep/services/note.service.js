import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const NoteService = {
    query,
    getNoteById,
    saveTxt,
    removeNote,
    setColor,
    setNotePin,

}

const KEY = 'notesDB';
const DELETED_KEY = 'deletedNotesDB';

var gNotes = []
var gdeletedNotes = []


// function removeNote(noteId) {
//     gNotes = gNotes.filter(note => note.id !== noteId)
//     _saveNotesToStorage()
//     return Promise.resolve(gNotes)
// }

function removeNote(noteId) {
    var noteIdx = gNotes.findIndex(function(note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function saveTxt(noteId, val) {
    getNoteById(noteId)
        .then(note => {
            if (note.type === 'note-txt') note.info.txt = val;
            else if (note.type === 'note-img') note.info.title = val;

            _saveNotesToStorage()
        })
}




function getNoteById(noteId) {
    var note = gNotes.find(note => {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

function setColor(noteId, color) {
    getNoteById(noteId)
        .then(note => {
            note.style.backgroundColor = color;
            _saveNotesToStorage()
        })

}

function setNotePin(noteId) {
    getNoteById(noteId)
        .then(note => {
            note.isPinned = !note.isPinned;
            _saveNotesToStorage()
        })
    return Promise.resolve();
}

_createNotes()

function _createNotes() {
    var notes = storageService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        notes = [{
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "rgb(229 227 74)"
                }
            },
            {
                id: "n102",
                isPinned: false,
                type: "note-img",
                info: {
                    url: "https://i.picsum.photos/id/933/200/300.jpg?hmac=8zdipGWKGkHz8wyA9J63P3fzghuUL9wqV5Y34b8mLTI",
                    title: "smoke on ground",
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                isPinned: false,
                type: "note-todos",
                info: {
                    label: "Get my shit together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null, id: utilService.makeId() },
                        { txt: "Coding power", doneAt: 187111111, id: utilService.makeId() }
                    ]
                },
                style: {
                    backgroundColor: "rgb(75 168 88)"
                }
            },
            {
                id: "n104",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "tommyyyyyyy stommmmmmm"
                },
                style: {
                    backgroundColor: "rgb(75 168 88)"
                }
            },
            {
                id: "n105",
                isPinned: false,
                type: "note-img",
                info: {
                    url: "https://i.picsum.photos/id/565/200/300.jpg?hmac=Ho0T-TCTMRX_uDDGzaLhGzTmukSZdDjpGZJTbL0NY3k",
                    title: "smoke on ground",
                },
                style: {
                    backgroundColor: "rgb(98 98 192)"
                }
            },
            {
                id: "n106",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "im txt"
                },
                style: {
                    backgroundColor: "rgb(98 98 192)"
                }
            },
            {
                id: "n107",
                isPinned: false,
                type: "note-img",
                info: {
                    url: "https://i.picsum.photos/id/615/200/300.jpg?hmac=ehJCfeXO1-ZbwBXgbYKroA97kTtoPKNoyEbCxnzsYfU",
                    title: "smoke on ground",
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
        ]
    }
    gNotes = [...notes];
    _saveNotesToStorage();
}



function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
}

function query(filterBy) {
    if (!filterBy) {
        const notes = gNotes.filter(note => !note.isPinned)
        return Promise.resolve(notes)
    } else {
        const pinnedNotes = gNotes.filter(note => note.isPinned);
        return Promise.resolve(pinnedNotes)
    }
}