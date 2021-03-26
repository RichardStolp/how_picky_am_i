import {INCREASE_COUNT, GET_RANDOM_NUMBER} from '../constants/action-types'

export function increaseCount() {
    return { type: INCREASE_COUNT }
  };

export function getRandomNumber() {
    return { type: GET_RANDOM_NUMBER}
}