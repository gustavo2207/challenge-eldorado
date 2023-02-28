import { Category } from "./Category"

export interface Device {
    id?: Number
    color: String,
    part_number: number,
    category?: Category
}