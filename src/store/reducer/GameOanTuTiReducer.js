import * as onTuTiConstans from '../constants/OanTuTiConstans'
const initialState = {
    player: 0,
    computerPlayer: 0,
    soBanThang: 0,
    soLanChoi: 0
}
const gameOanTuTiReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case onTuTiConstans.CHOOSE_HAND:

            return {...state, player: payload }
        case onTuTiConstans.PLAY_GAME:
            const computerPlayerUpdate = Math.floor(Math.random() * 3);;
            const soLanChoiUpdate = state.soLanChoi + 1;
            let soBanThangUpdate = state.soBanThang;
            if ((computerPlayerUpdate + 1) % 3 == state.player) {
                soBanThangUpdate += 1;
            }
            return {...state, computerPlayer: computerPlayerUpdate, soBanThang: soBanThangUpdate, soLanChoi: soLanChoiUpdate }
        default:
            return state
    }

}
export default gameOanTuTiReducer