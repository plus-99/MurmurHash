"use strict";
/**
 * MurmurHash3 implementation in TypeScript
 * Based on the original C++ implementation by Austin Appleby
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.murmur3_32 = murmur3_32;
exports.murmur3_32_hex = murmur3_32_hex;
exports.murmur3_128 = murmur3_128;
/**
 * 32-bit integer multiplication with proper overflow handling
 */
function imul(a, b) {
    const ah = (a >>> 16) & 0xffff;
    const al = a & 0xffff;
    const bh = (b >>> 16) & 0xffff;
    const bl = b & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)) | 0;
}
/**
 * Left rotate a 32-bit integer
 */
function rotateLeft(value, amount) {
    return (value << amount) | (value >>> (32 - amount));
}
/**
 * Convert string to UTF-8 byte array
 */
function stringToUtf8Bytes(str) {
    if (typeof TextEncoder !== 'undefined') {
        return new TextEncoder().encode(str);
    }
    // Fallback for environments without TextEncoder
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code < 0x80) {
            bytes.push(code);
        }
        else if (code < 0x800) {
            bytes.push(0xc0 | (code >> 6));
            bytes.push(0x80 | (code & 0x3f));
        }
        else if (code < 0xd800 || code >= 0xe000) {
            bytes.push(0xe0 | (code >> 12));
            bytes.push(0x80 | ((code >> 6) & 0x3f));
            bytes.push(0x80 | (code & 0x3f));
        }
        else {
            i++; // Surrogate pair
            const hi = code;
            const lo = str.charCodeAt(i);
            const codePoint = 0x10000 + (((hi & 0x3ff) << 10) | (lo & 0x3ff));
            bytes.push(0xf0 | (codePoint >> 18));
            bytes.push(0x80 | ((codePoint >> 12) & 0x3f));
            bytes.push(0x80 | ((codePoint >> 6) & 0x3f));
            bytes.push(0x80 | (codePoint & 0x3f));
        }
    }
    return new Uint8Array(bytes);
}
/**
 * MurmurHash3 32-bit hash function
 */
function murmur3_32(data, seed = 0) {
    const bytes = typeof data === 'string' ? stringToUtf8Bytes(data) : data;
    const len = bytes.length;
    const c1 = 0xcc9e2d51;
    const c2 = 0x1b873593;
    const r1 = 15;
    const r2 = 13;
    const m = 5;
    const n = 0xe6546b64;
    let hash = seed;
    // Process 4-byte chunks
    const numBlocks = Math.floor(len / 4);
    for (let i = 0; i < numBlocks; i++) {
        const k = (bytes[i * 4] |
            (bytes[i * 4 + 1] << 8) |
            (bytes[i * 4 + 2] << 16) |
            (bytes[i * 4 + 3] << 24)) >>> 0;
        let k1 = imul(k, c1);
        k1 = rotateLeft(k1, r1);
        k1 = imul(k1, c2);
        hash ^= k1;
        hash = rotateLeft(hash, r2);
        hash = (imul(hash, m) + n) >>> 0;
    }
    // Process remaining bytes
    const remainingBytes = len % 4;
    if (remainingBytes > 0) {
        let k1 = 0;
        const offset = numBlocks * 4;
        if (remainingBytes >= 3) {
            k1 ^= bytes[offset + 2] << 16;
        }
        if (remainingBytes >= 2) {
            k1 ^= bytes[offset + 1] << 8;
        }
        if (remainingBytes >= 1) {
            k1 ^= bytes[offset];
        }
        k1 = imul(k1, c1);
        k1 = rotateLeft(k1, r1);
        k1 = imul(k1, c2);
        hash ^= k1;
    }
    // Finalization
    hash ^= len;
    hash ^= hash >>> 16;
    hash = imul(hash, 0x85ebca6b);
    hash ^= hash >>> 13;
    hash = imul(hash, 0xc2b2ae35);
    hash ^= hash >>> 16;
    return hash >>> 0; // Ensure unsigned 32-bit integer
}
/**
 * MurmurHash3 32-bit hash as hex string
 */
function murmur3_32_hex(data, seed = 0) {
    const hash = murmur3_32(data, seed);
    return hash.toString(16).padStart(8, '0');
}
/**
 * Simple 128-bit hash simulation using two 32-bit hashes with different seeds
 */
function murmur3_128(data, seed = 0) {
    const hash1 = murmur3_32(data, seed);
    const hash2 = murmur3_32(data, seed + 1);
    const hash3 = murmur3_32(data, seed + 2);
    const hash4 = murmur3_32(data, seed + 3);
    return hash1.toString(16).padStart(8, '0') +
        hash2.toString(16).padStart(8, '0') +
        hash3.toString(16).padStart(8, '0') +
        hash4.toString(16).padStart(8, '0');
}
//# sourceMappingURL=murmur3.js.map