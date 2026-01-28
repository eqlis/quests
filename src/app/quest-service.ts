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
        instructions: 'Each puzzle will give you a clue to the next location. After finding each gift, enter the confirmation code to prove you found it and move to the next puzzle. Good luck and have fun!',
        tasks: [
          {
            id: 1,
            title: 'Country Flags',
            description: 'Identify countries based on their flags and take their first letter to form the hint for the gift location. When you figured the location, go there, find the gift and enter the confirmation code below.',
            image: './assets/flags.JPG',
            confirmationCode: 'te453hdk',
          },
          {
            id: 2,
            title: 'Math Puzzle',
            description: 'Solve the following math puzzle, which will lead you to an item in the house that will help you find the next gift location. Once you find the gift, enter the confirmation code below.',
            image: './assets/math.PNG',
            confirmationCode: 'fh83js7d',
          },
          {
            id: 3,
            title: 'Sudoku Challenge',
            description: 'Complete the Sudoku puzzle. There are 9 cells marked with letters, which indicate the next location. Fill those cells with numbers to get the correct order of letters. Find the gift and enter the confirmation code below.',
            image: './assets/sudoku.PNG',
            confirmationCode: 'kd90lrl2',
          },
          {
            id: 4,
            title: 'Words Translation',
            description: 'Translate the words to Italian. The first letters of the translated words will form a hint to the next gift location. Find the gift and enter the confirmation code below.',
            image: './assets/translation.PNG',
            confirmationCode: '5nyu3b7k',
          },
          {
            id: 5,
            title: 'Cipher Decoding',
            description: 'Guess the cipher and decode the message to find the final gift location. Once you find the gift, enter the confirmation code below to complete the quest.',
            image: './assets/cipher.PNG',
            confirmationCode: 'dc44ksl8',
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
