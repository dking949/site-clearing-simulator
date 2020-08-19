import { ELandType } from "../interfaces";
import { UpdateFuelUsed, UpdatePaintDamage } from "../redux/actions/actions";
import store from "../redux/store/store"

export const calculateFuelUsed = (targetLandType: ELandType): void => {
    let fuel: number = 0;
    let landType: string = targetLandType;

    switch(landType){
        case ELandType.o:
            fuel+=1;
            break;
        case ELandType.r:
        case ELandType.t:
            fuel+=2
            break;
        default:
            throw Error(`Cannot calculate cost of invalid landtype ${landType}`);
    }
    store.dispatch(UpdateFuelUsed(fuel));
}

export const calculatePaintDamage = (): void => {
    store.dispatch(UpdatePaintDamage(1));
}