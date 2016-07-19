/**
 * @fileoverview Internal module which configurates and creates a
 * singletone connection instance
 * @author Alexander Sychev <shurik.shurik.1993@yandex.ru>
 */
'use strict';

const knex = require('knex');

/**
 * Connection instance
 * @type {knex}
 */
let _instance = null;

/**
 * Connection parameters
 * @type {knex.Config}
 */
let _connectionParams;

/**
 * Set connection params
 * @param {knex.Config} connectionParams
 */
function setConnectionParams(connectionParams) {
    _connectionParams = connectionParams;
}

/**
 * Create connection instance if it's not exists and return it
 * @returns {knex}
 */
function getInstance() {
    if (_instance === null) {
        _instance = knex(_connectionParams);
    }
    return _instance;
}

module.exports = {
    setConnectionParams: setConnectionParams,
    getInstance: getInstance
};