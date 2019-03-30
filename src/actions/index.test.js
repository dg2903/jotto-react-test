import {correctGuess, actionTypes} from './';

describe("correct Guess", () => {
  test('returns an action with type CORRECT_GUESS', ()=> {
    const action = correctGuess();
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS
    });
  });
});
