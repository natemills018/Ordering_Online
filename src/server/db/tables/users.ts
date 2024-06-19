import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MysqlResponse } from '../models'
import { OrdersTableRowData } from "../models";

export function find (column: string, value: string) {
    return SelectQuery<OrdersTableRowData>('SELECT * FROM authors WHERE ?? = ?', [column, value]);
} 