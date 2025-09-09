"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Test data
const testString = 'Hello, World!';
const testBytes = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
console.log('MurmurHash TypeScript Tests');
console.log('============================');
// Test MurmurHash3 32-bit
console.log('\nMurmurHash3 32-bit Tests:');
console.log('String input:', testString);
console.log('murmur3_32:', (0, index_1.murmur3_32)(testString));
console.log('murmur3_32_hex:', (0, index_1.murmur3_32_hex)(testString));
console.log('MurmurHash.hash32:', index_1.MurmurHash.hash32(testString));
console.log('MurmurHash.hash32Hex:', index_1.MurmurHash.hash32Hex(testString));
// Test MurmurHash3 128-bit
console.log('\nMurmurHash3 128-bit Tests:');
console.log('murmur3_128:', (0, index_1.murmur3_128)(testString));
console.log('MurmurHash.hash128:', index_1.MurmurHash.hash128(testString));
// Test MurmurHash2 32-bit
console.log('\nMurmurHash2 32-bit Tests:');
console.log('murmur2_32:', (0, index_1.murmur2_32)(testString));
console.log('murmur2_32_hex:', (0, index_1.murmur2_32_hex)(testString));
console.log('MurmurHash.hash2_32:', index_1.MurmurHash.hash2_32(testString));
console.log('MurmurHash.hash2_32Hex:', index_1.MurmurHash.hash2_32Hex(testString));
// Test MurmurHash2 64-bit
console.log('\nMurmurHash2 64-bit Tests:');
console.log('murmur2_64:', (0, index_1.murmur2_64)(testString));
console.log('MurmurHash.hash2_64:', index_1.MurmurHash.hash2_64(testString));
// Test with seeds
console.log('\nSeeded Hash Tests:');
console.log('MurmurHash3 with seed 42:', (0, index_1.murmur3_32)(testString, 42));
console.log('MurmurHash2 with seed 42:', (0, index_1.murmur2_32)(testString, 42));
// Type checking tests
const seed = 42;
const data = testString;
const byteData = testBytes;
// These should all compile without TypeScript errors
const hashNumber = (0, index_1.murmur3_32)(data, seed);
const hashHex = (0, index_1.murmur3_32_hex)(data, seed);
const hash128 = (0, index_1.murmur3_128)(data, seed);
const hash2Number = (0, index_1.murmur2_32)(data, seed);
const hash2Hex = (0, index_1.murmur2_32_hex)(data, seed);
const hash2_64bit = (0, index_1.murmur2_64)(data, seed);
// Test with bytes
const byteHash3 = (0, index_1.murmur3_32)(byteData);
const byteHash2 = (0, index_1.murmur2_32)(byteData);
console.log('\nType Tests Passed:');
console.log('Hash from string:', hashNumber);
console.log('Hash from bytes:', byteHash3);
console.log('MurmurHash2 from bytes:', byteHash2);
console.log('\nAll TypeScript tests completed successfully!');
//# sourceMappingURL=test.js.map