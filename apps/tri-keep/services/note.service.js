import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const NoteService = {
    query,
    getNoteById,
    saveTxt,
    removeNote,
    setColor,
    setNotePin,
    todoDone,
    allTodosDone,
    _createNote: _createNoteTxt,
    addNote,

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

function _getNoteIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
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


function allTodosDone(noteId) {
    getNoteById(noteId)
        .then(note => {
            note.isDone = !note.isDone;
            _saveNotesToStorage()
        })
}

function todoDone(noteId, todos, todoIdx) {
    getNoteById(noteId)
        .then(note => {
            note.info.todos[todoIdx].doneAt = todos[todoIdx].doneAt
            _saveNotesToStorage()
        })
}


// function todoDone(noteId,todos) {
//     const noteIdx = _getNoteIdxById(noteId)
//     const notes = [...gNotes]
//     notes[noteIdx].info.todos = todos
//     let todosToTxt = '';
//     todos.forEach(todo => {
//         todosToTxt += todo.txt + ', '
//     })
//     notes[noteIdx].info.txt = todosToTxt
//     gNotes = notes
//     _saveNotesToStorage()
//     return Promise.resolve()
// }
// function getNoteById(noteId) {
//     const note = gNotes.find(note => note.id === noteId)
//     return Promise.resolve(note)
// }


function addNote(inputInfo) {
    const { txt } = inputInfo;
    let note;
    if (inputInfo.type === 'note-txt') note = _createNoteTxt(txt)
    else if (inputInfo.type === 'note-img') note = _createNoteImg(txt)
    else note = _createNoteTodos(txt)
    gNotes.unshift(note);
    _saveNotesToStorage();
    return Promise.resolve(gNotes)
}

function _createNoteTxt(txt) {
    return {
        id: utilService.makeId(),
        type: 'note-txt',
        isPinned: false,
        info: {
            txt,
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
}

function _createNoteImg(url) {
    return {
        id: utilService.makeId(),
        isPinned: false,
        type: "note-img",
        info: {
            url,
            title: "",
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
}

// function _createNoteTodos(txt) {
//     const noteToUpdateIdx = getNoteIdxById(noteId)
//     const notes = [...gNotes]
//     notes[noteToUpdateIdx].info.todos = todos
//     let todosToTxt = '';
//     todos.forEach(todo => {
//         todosToTxt += todo.txt + ', '
//     })
//     notes[noteToUpdateIdx].info.txt = todosToTxt
//     gNotes = notes
//     _saveNotesToStorage()
//     return Promise.resolve()
// }

function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function getNoteIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}


function _createNoteTodos(txt) {


    const notesTodos = {
        type: 'note-todos',
        id: utilService.makeId(),
        isPinned: false,
        isDone: false,
        info: {},
        style: {
            backgroundColor: utilService.getRandomColor(),
        }

    }


    const todos = []
    console.log(txt);
    notesTodos.info.txt = txt
    const userTodos = txt.split(',')
    userTodos.forEach(todo => {
        todos.push({
            txt: todo,
            doneAt: null,
            id: utilService.makeId()
        })
    })

    notesTodos.info.todos = todos
    return notesTodos;
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
                isDone: 'false',
                info: {
                    txt: "Get my shit together",
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