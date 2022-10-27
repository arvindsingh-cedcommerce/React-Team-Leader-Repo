import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  tempCount: 0,
  count: 0,
  array1: ['question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg', 'question-mark.jpg'],

  array2: ['image1.webp', 'image2.webp', 'image3.webp', 'image8.jpg', 'image4.webp', 'image10.webp', 'image5.webp', 'image6.webp', 'image7.webp', 'image9.jpg', 'image7.webp', 'image10.webp', 'image5.webp', 'image8.jpg', 'image4.webp', 'image6.webp', 'image9.jpg', 'image2.webp', 'image3.webp', 'image1.webp',],
  memoryIndex: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    flip: (state, action) => {
      if (state.tempCount < 2) {
        state.count += 1;
        state.tempCount += 1;
        state.memoryIndex.push(action.payload)
        state.array1[action.payload] = state.array2[action.payload];
      }
    },
    flipBack: (state) => {
      if (state.tempCount > 1) {
        let flag = true;
        if (state.array2[state.memoryIndex[0]] === state.array2[state.memoryIndex[1]]) {
          flag = false
        }

        if (flag) {
          state.memoryIndex.map((item, i) => {
            state.array1[item] = 'question-mark.jpg'
          });
          state.tempCount = 0
          state.memoryIndex = [];
        }
        else {
          state.memoryIndex.map((item, index) => {
            state.array1[item] = ''
          });
          state.tempCount = 0
          state.memoryIndex = [];
        }
      }
    },
    won_Game: (state) => {
      let flag = false;
      state.array1.map((item, index) => {
        if (item !== '') {
          flag = true;
        }
      })
      if (!flag) {
        state.array1 = []
      }
    }
  }
})

export const { flip, flipBack, won_Game } = gameSlice.actions
export default gameSlice.reducer