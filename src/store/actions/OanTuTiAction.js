import * as onTuTiConstans from '../constants/OanTuTiConstans'
export const actChooseHand = idx => ({
    type: onTuTiConstans.CHOOSE_HAND,
    payload: idx
})
export const actPlayGame = () => ({
    type: onTuTiConstans.PLAY_GAME,
    payload: null
})