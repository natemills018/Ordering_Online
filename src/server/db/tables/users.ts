import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MysqlResponse } from '../models'
import { UserTableRowData } from "../models";

export function find (column: string, value: string) {
    return SelectQuery<UserTableRowData>('SELECT * FROM users WHERE ?? = ?;', [column, value]);
}

export function getOne(id: number) {
    return SelectQuery<UserTableRowData>('SELECT * from users WHERE id= ?;', [id])
}


export function getAll() {
    return SelectQuery<UserTableRowData>('SELCT * FROM users;')
}