import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus, dolorem excepturi, est quas iste rem velit consequuntur tempore perferendis pariatur magnam porro deleniti que'
        },
        {
          id: 2,
          content: 'this is the second comment'
        },
        {
          id: 3,
          content: 'THIRD comment right here folks!'
        }
      ]
    };
  },
  getters: {
    getNote: (state) => {
      return (id) => {
        // console.log(id);
        return state.notes.filter((note) => note.id === id)[0];
      };
    },
    totalNoteCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    }
  },
  actions: {
    addNote(content) {
      let id = new Date().getTime();

      let note = {
        id,
        content
      };

      this.notes.unshift(note);
    },
    updateNote(id, content) {
      // console.log(`note with id: ${id} and content: '${content}' updated.`);
      // eslint-disable-next-line prettier/prettier
      let index = this.notes.findIndex(note => note.id === id);
      this.notes[index].content = content;
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    }
  }
});
