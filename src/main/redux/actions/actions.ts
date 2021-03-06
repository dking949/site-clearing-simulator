import * as constants from "../constants/action-types"
import { IUserCommand, IMapBorders, EBulldozerDirection, IBulldozerPosition, ESimulationStatus } from "../../interfaces"

const AddUserCommand = (payload: IUserCommand) => {
    return { type: constants.ADD_USER_COMMAND, payload }
}

const UpdateMapBorders = (payload: IMapBorders) => {
    return { type: constants.UPDATE_MAP_BORDERS, payload }
}

const UpdateSimulationStatus = (payload: ESimulationStatus) => {
    return { type: constants.UPDATE_SIMULATION_STATUS, payload }
}

const UpdateBulldozerDirection = (payload: EBulldozerDirection) => {
    return { type: constants.UPDATE_BULLDOZER_DIRECTION, payload }
}

const UpdateBulldozerPosition = (payload: IBulldozerPosition) => {
    return { type: constants.UPDATE_BULLDOZER_POSITION, payload }
}

const UpdateLandType = (payload: IBulldozerPosition) => {
    return { type: constants.UPDATE_LAND_TYPE, payload }
}

const UpdateFuelUsed = (payload: number) => {
    return { type: constants.UPDATE_FUEL_USED, payload }
}

const UpdatePaintDamage = (payload: number) => {
    return { type: constants.UPDATE_PAINT_DAMAGE, payload }
}

const UpdateSiteMap = (payload: string[][]) => {
    return { type: constants.UPDATE_SITE_MAP, payload }
}

const UpdateMapWidth = (payload: number) => {
    return { type: constants.UPDATE_MAP_WIDTH, payload }
}

const UpdateMapHeight = (payload: number) => {
    return { type: constants.UPDATE_MAP_HEIGHT, payload }
}

export {
    AddUserCommand,
    UpdateMapBorders,
    UpdateSimulationStatus,
    UpdateBulldozerDirection,
    UpdateBulldozerPosition,
    UpdateLandType,
    UpdateFuelUsed,
    UpdatePaintDamage,
    UpdateSiteMap,
    UpdateMapWidth,
    UpdateMapHeight
}