var assert = require('assert'),
    cryptograph = require('../index'),
    encode = cryptograph.encode,
    decode = cryptograph.decode;

// Encodes and decodes text

assert.equal( encode('no one will know what we are saying to each other'), 'mh hmd ezxx tmhe erfn ed fid jfczmu nh dfwr hnrdi' );

assert.equal( decode('mh hmd ezxx tmhe erfn ed fid jfczmu nh dfwr hnrdi'), 'no one will know what we are saying to each other' );

// Strips non-letter characters

assert.equal( encode("this is great!!! isn't it???"), "nrzj zj uidfn zjmn zn");

assert.equal( decode("nrzj zj uidfn zjmn zn"), "this is great isnt it");