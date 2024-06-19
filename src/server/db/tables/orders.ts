import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MysqlResponse } from '../models'
import { OrdersTableRowData } from "../models";

export function find (column: string, value: string) {
    return SelectQuery<OrdersTableRowData>('SELECT * FROM orders WHERE ?? = ?', [column, value]);
} 

export function getOne (id: number) {
    return SelectQuery<OrdersTableRowData>('SELECT * FROM orders WHERE id = ?;', [id])
}