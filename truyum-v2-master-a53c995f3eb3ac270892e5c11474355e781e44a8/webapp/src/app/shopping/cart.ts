import { fooditem } from "../fooditem";

export interface cart
{
    menuItemList:fooditem[];
    total:number;
}