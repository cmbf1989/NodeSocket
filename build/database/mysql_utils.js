"use strict";
exports.__esModule = true;
var mysql_1 = require("mysql");
var util_1 = require("util");
var DataSource = /** @class */ (function () {
    function DataSource() {
    }
    DataSource.prototype.init = function (config) {
        var connection = mysql_1.createConnection(config);
        return {
            query: function (sql, args) {
                return util_1.promisify(connection.query).call(connection, sql, args);
            },
            close: function () {
                return util_1.promisify(connection.end).call(connection);
            },
            beginTransaction: function () {
                return util_1.promisify(connection.beginTransaction).call(connection);
            },
            commit: function () {
                return util_1.promisify(connection.commit).call(connection);
            },
            rollback: function () {
                return util_1.promisify(connection.rollback).call(connection);
            }
        };
    };
    return DataSource;
}());
exports.DataSource = DataSource;
