import { Injectable } from '@angular/core';
import { Quest } from './quest'

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  quests: Quest[] = [
      {
        id: 1,
        title: 'Christmas Gift Hunt',
        description: 'Solve puzzles to find hidden gifts around the house.',
        image: './assets/gifts.jpg',
        instructions: 'Each puzzle will give you a clue to the next location. Enter the answer to each puzzle, find the gift in that location and move to the next puzzle. Good luck and have fun!',
        tasks: [
          {
            id: 1,
            title: 'Country Flags',
            description: 'Identify countries based on their flags and take their first letter to form the hint for the gift location. When you figured the location, enter it in the field below, then go there and find the gift.',
            image: './assets/flags.JPG',
            answer: 'pond',
          },
          {
            id: 2,
            title: 'Math Puzzle',
            description: 'Solve the following math puzzle, which will lead you to an item in the house that will help you find the next gift location. Enter the answer (to the puzzle in the black frame) below to proceed to the next task.',
            image: './assets/math.PNG',
            answer: '1984',
          },
          {
            id: 3,
            title: 'Sudoku Challenge',
            description: 'Complete the Sudoku puzzle. There are 9 cells marked with letters, which indicate the next location. Fill those cells with numbers to get the correct order of letters. Enter the answer below and find the gift.',
            image: './assets/sudoku.PNG',
            answer: 'wooden tap',
          },
          {
            id: 4,
            title: 'Words Translation',
            description: 'Translate the words to Italian. The first letters of the translated words will form a hint to the next gift location. Enter the answer below and find the gift.',
            image: './assets/translation.PNG',
            answer: 'hanging tree',
          },
          {
            id: 5,
            title: 'Cipher Decoding',
            description: 'Guess the cipher and decode the message to find the final gift location. Enter the answer below and find the gift.',
            image: './assets/cipher.PNG',
            answer: 'rocks behind the wooden tap',
          }
        ]
      },
    ];

  constructor() {}

  getAllQuests(): Quest[] {
    return this.quests;
  }

  getQuest(): Quest {
    return this.quests[0];
  }
}
