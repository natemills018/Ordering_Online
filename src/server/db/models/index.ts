import { Request } from "express";
import { RowDataPacket } from "mysql2";

export interface UsersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
}

export interface OrdersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
}

export interface OrdersTableRowData extends RowDataPacket {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
}

export interface UserTableRowData extends RowDataPacket {
    id?: number;
    name: string;
    email?: string;
    password?: string;
}

export interface ReqUser extends Request {
    user?: UsersTable
}


export interface Payload {
    userid: number;
    email: string;
    role: number;
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
}