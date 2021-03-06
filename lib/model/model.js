/**
 * @fileoverview The parent model class, only extend, don't call directly.
 */

var kRedis = require('../utility/kredis');
var kconfig   = require('../utility/config');

var noop = function(){};

var Model = module.exports = function() {
  /** @type {redis.CreateClient} redis client */
  this.client = kRedis.client();

  /** @type {redis.CreateClient} redis client to use for pubsub */
  this.clientSub = kRedis.clientSub();

  /** @type {string} The base namespace to use for storing to redis */
  this.NS = kconfig.get('redisNamespace');

};

Model.prototype.dispose = noop;
