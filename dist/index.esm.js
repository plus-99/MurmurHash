/**
 * @plus99/murmur-hash - Pure TypeScript MurmurHash3 implementation
 * Compatible with Node.js, browsers, CommonJS, ES modules, and TypeScript
 */
export { murmur3_32, murmur3_32_hex, murmur3_128, murmur2_32, murmur2_32_hex, murmur2_64 } from './murmur3.js';
// Default export for convenience
import { murmur3_32, murmur3_32_hex, murmur3_128, murmur2_32, murmur2_32_hex, murmur2_64 } from './murmur3.js';
/**
 * MurmurHash utility class with static methods
 */
export class MurmurHash {
    // MurmurHash3 methods
    /**
     * Generate 32-bit MurmurHash3 as number
     */
    static hash32(data, seed = 0) {
        return murmur3_32(data, seed);
    }
    /**
     * Generate 32-bit MurmurHash3 as hex string
     */
    static hash32Hex(data, seed = 0) {
        return murmur3_32_hex(data, seed);
    }
    /**
     * Generate 128-bit MurmurHash3 as hex string
     */
    static hash128(data, seed = 0) {
        return murmur3_128(data, seed);
    }
    // MurmurHash2 methods
    /**
     * Generate 32-bit MurmurHash2 as number
     */
    static hash2_32(data, seed = 0) {
        return murmur2_32(data, seed);
    }
    /**
     * Generate 32-bit MurmurHash2 as hex string
     */
    static hash2_32Hex(data, seed = 0) {
        return murmur2_32_hex(data, seed);
    }
    /**
     * Generate 64-bit MurmurHash2 as hex string
     */
    static hash2_64(data, seed = 0) {
        return murmur2_64(data, seed);
    }
}
// Default export
export default MurmurHash;
//# sourceMappingURL=index.js.map