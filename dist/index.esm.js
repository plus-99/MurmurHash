/**
 * @plus99/murmur-hash - Pure TypeScript MurmurHash3 implementation
 * Compatible with Node.js, browsers, CommonJS, ES modules, and TypeScript
 */
export { murmur3_32, murmur3_32_hex, murmur3_128 } from './murmur3.js';
// Default export for convenience
import { murmur3_32, murmur3_32_hex, murmur3_128 } from './murmur3.js';
/**
 * MurmurHash utility class with static methods
 */
export class MurmurHash {
    /**
     * Generate 32-bit hash as number
     */
    static hash32(data, seed = 0) {
        return murmur3_32(data, seed);
    }
    /**
     * Generate 32-bit hash as hex string
     */
    static hash32Hex(data, seed = 0) {
        return murmur3_32_hex(data, seed);
    }
    /**
     * Generate 128-bit hash as hex string
     */
    static hash128(data, seed = 0) {
        return murmur3_128(data, seed);
    }
}
// Default export
export default MurmurHash;
//# sourceMappingURL=index.js.map