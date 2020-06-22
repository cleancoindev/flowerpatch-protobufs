/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protobuf.RedemptionInfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protobuf.RedemptionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protobuf.RedemptionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protobuf.RedemptionInfo.displayName = 'proto.protobuf.RedemptionInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protobuf.RedemptionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.protobuf.RedemptionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protobuf.RedemptionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.RedemptionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateflowerid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    account: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    partneraffiliate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dateredeemed: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expirydate: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protobuf.RedemptionInfo}
 */
proto.protobuf.RedemptionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protobuf.RedemptionInfo;
  return proto.protobuf.RedemptionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protobuf.RedemptionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protobuf.RedemptionInfo}
 */
proto.protobuf.RedemptionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTemplateflowerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartneraffiliate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDateredeemed(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirydate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protobuf.RedemptionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protobuf.RedemptionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protobuf.RedemptionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protobuf.RedemptionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateflowerid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPartneraffiliate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDateredeemed();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getExpirydate();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 templateFlowerID = 1;
 * @return {number}
 */
proto.protobuf.RedemptionInfo.prototype.getTemplateflowerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.protobuf.RedemptionInfo.prototype.setTemplateflowerid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.protobuf.RedemptionInfo.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.protobuf.RedemptionInfo.prototype.setAccount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.protobuf.RedemptionInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.protobuf.RedemptionInfo.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string partnerAffiliate = 4;
 * @return {string}
 */
proto.protobuf.RedemptionInfo.prototype.getPartneraffiliate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.protobuf.RedemptionInfo.prototype.setPartneraffiliate = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 dateRedeemed = 5;
 * @return {number}
 */
proto.protobuf.RedemptionInfo.prototype.getDateredeemed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.protobuf.RedemptionInfo.prototype.setDateredeemed = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 expiryDate = 6;
 * @return {number}
 */
proto.protobuf.RedemptionInfo.prototype.getExpirydate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.protobuf.RedemptionInfo.prototype.setExpirydate = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.protobuf);