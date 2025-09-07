"use strict";
/**
 * @plus99/murmur-hash - Pure TypeScript MurmurHash3 implementation
 * Compatible with Node.js, browsers, CommonJS, ES modules, and TypeScript
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MurmurHash = exports.murmur3_128 = exports.murmur3_32_hex = exports.murmur3_32 = void 0;
var murmur3_js_1 = require("./murmur3.js");
Object.defineProperty(exports, "murmur3_32", { enumerable: true, get: function () { return murmur3_js_1.murmur3_32; } });
Object.defineProperty(exports, "murmur3_32_hex", { enumerable: true, get: function () { return murmur3_js_1.murmur3_32_hex; } });
Object.defineProperty(exports, "murmur3_128", { enumerable: true, get: function () { return murmur3_js_1.murmur3_128; } });
// Default export for convenience
const murmur3_js_2 = require("./murmur3.js");
/**
 * MurmurHash utility class with static methods
 */
class MurmurHash {
    /**
     * Generate 32-bit hash as number
     */
    static hash32(data, seed = 0) {
        return (0, murmur3_js_2.murmur3_32)(data, seed);
    }
    /**
     * Generate 32-bit hash as hex string
     */
    static hash32Hex(data, seed = 0) {
        return (0, murmur3_js_2.murmur3_32_hex)(data, seed);
    }
    /**
     * Generate 128-bit hash as hex string
     */
    static hash128(data, seed = 0) {
        return (0, murmur3_js_2.murmur3_128)(data, seed);
    }
}
exports.MurmurHash = MurmurHash;
// Default export
exports.default = MurmurHash;
//# sourceMappingURL=index.js.map