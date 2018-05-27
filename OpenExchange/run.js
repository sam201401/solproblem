/*
 * Name:            OpenExchange
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Bootstraps the OpenExchange system.
 *
 */

// Create all of the namespaces.
OpenExchange = {
    API: {},
    Auth: {},
    Banks: {},
    DB: {},
    Pages: {},
    Session: {},
    Trade: {},
    Wallets: {}
};

// Include all required libraries.


var requireConfig = require('./require-config');

global.appRequire = function(alias){
    return require(__dirname +requireConfig[alias.toLowerCase()]);
};
var apimanager = appRequire('apimanager');
var authmanager = appRequire('authmanager');

var bankmanager= appRequire('bankmanager');
var dbmanager= appRequire('dbmanager')
var pagesmanager= appRequire('pagesmanager')
var sessionmanager = appRequire('sessionmanager');
var trademanager= appRequire('trademanager')
var walletmanager= appRequire('walletmanager');


apimanager.apimanager();
  //  this.AuthManager = new OpenExchange.Auth.Manager(this);
    authmanager.authmanager();
    //this.BanksManager = new OpenExchange.Banks.Manager(this);
    bankmanager.bankmanager();
  //  this.SessionManager = new OpenExchange.Session.Manager(this);
  sessionmanager.sessionmanager();
  //  this.TradeManager = new OpenExchange.Trade.Manager(this);
    trademanager.trademanager();
    //this.WalletsManager = new OpenExchange.Wallets.Manager(this);
walletmanager.walletmanager();
    // Connect to the database.
    //this.DBManager = new OpenExchange.DB.Manager(this);
dbmanager.dbmanager();
    // Start handling pages.
    //this.PagesManager = new OpenExchange.Pages.Manager(this);
    pagesmanager.pagesmanager();



console.log('Server running at http://127.0.0.1:1337/');
