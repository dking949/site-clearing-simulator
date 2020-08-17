import * as actions from "../../redux/actions/actions";
import * as types from "../../redux/constants/action-types";
import { IUserCommand, EUserCommand, IMapBorders, EBulldozerDirection, IBulldozerPosition, ELandType } from "../../interfaces";

describe('actions', () => {
  it('should create an action to add a user command', () => {
      const cmd: IUserCommand = {
          command: EUserCommand.advance,
          value: 3
      }
        const expectedAction = {
        type: types.ADD_USER_COMMAND,
        payload: cmd
        }
        expect(actions.AddUserCommand(cmd)).toEqual(expectedAction);
});

  it('should create an action to update map borders', () => {
        const newBorders: IMapBorders = {
            eastBorder: 5,
            southBorder: 5
        }
        const expectedAction = {
            type: types.UPDATE_MAP_BORDERS,
            payload: newBorders
        }
        expect(actions.UpdateMapBorders(newBorders)).toEqual(expectedAction);
    });

    it('should create an action to update simulation in progress', () => {
        const simulationInProgress: boolean = false;
        const expectedAction = {
            type: types.UPDATE_SIMULATION_IN_PROGRESS,
            payload: simulationInProgress
        }
        expect(actions.UpdateSimulationInProgress(simulationInProgress)).toEqual(expectedAction);
    });

    it('should create an action to update bulldozer direction', () => {
        const newDirection: EBulldozerDirection = EBulldozerDirection.south;
        const expectedAction = {
            type: types.UPDATE_BULLDOZER_DIRECTION,
            payload: newDirection
        }
        expect(actions.UpdateBulldozerDirection(newDirection)).toEqual(expectedAction);
    });

    it('should create an action to update bulldozer position', () => {
        const newPosition: IBulldozerPosition = {
            xPos: 2,
            yPos: 2
        }
        const expectedAction = {
            type: types.UPDATE_BULLDOZER_POSITION,
            payload: newPosition
        }
        expect(actions.UpdateBulldozerPosition(newPosition)).toEqual(expectedAction);
    });

    it('should create an action to update bulldozer direction', () => {
        const newDirection: EBulldozerDirection = EBulldozerDirection.south;
        const expectedAction = {
            type: types.UPDATE_BULLDOZER_DIRECTION,
            payload: newDirection
        }
        expect(actions.UpdateBulldozerDirection(newDirection)).toEqual(expectedAction);
    });

    it('should create an action to update square land type', () => {
        const newLandType: ELandType = ELandType.o;
        const expectedAction = {
            type: types.UPDATE_LAND_TYPE,
            payload: newLandType
        }
        expect(actions.UpdateLandType(newLandType)).toEqual(expectedAction);
    });

    it('should create an action to update fuel used', () => {
        const fuelUsed: number = 1;
        const expectedAction = {
            type: types.UPDATE_FUEL_USED,
            payload: fuelUsed
        }
        expect(actions.UpdateFuelUsed(fuelUsed)).toEqual(expectedAction);
    });

    it('should create an action to update paint damage', () => {
        const paintDamage: number = 1;
        const expectedAction = {
            type: types.UPDATE_PAINT_DAMAGE,
            payload: paintDamage
        }
        expect(actions.UpdatePaintDamage(paintDamage)).toEqual(expectedAction);
    });
});
