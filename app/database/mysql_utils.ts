
import { createConnection } from 'mysql';
import { promisify } from 'util';

export class DataSource {
    constructor() {

    }

    init(config : any) {
        const connection = createConnection( config );
        return {
            query( sql: any, args: any ) {
                return promisify( connection.query ).call( connection, sql, args );
            },
            close() {
                return promisify( connection.end ).call( connection );
            },
            beginTransaction() {
                return promisify( connection.beginTransaction ).call( connection );
            },
            commit() {
                return promisify( connection.commit ).call( connection );
            },
            rollback() {
                return promisify( connection.rollback ).call( connection );
            }
        };
    }
}

