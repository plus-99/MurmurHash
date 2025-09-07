/**
 * @plus99/murmur-hash - Pure TypeScript MurmurHash3 implementation
 * Compatible with Node.js, browsers, CommonJS, ES modules, and TypeScript
 */
export { murmur3_32, murmur3_32_hex, murmur3_128 } from './murmur3.js';
/**
 * MurmurHash utility class with static methods
 */
export declare class MurmurHash {
    /**
     * Generate 32-bit hash as number
     */
    static hash32(data: string | Uint8Array, seed?: number): number;
    /**
     * Generate 32-bit hash as hex string
     */
    static hash32Hex(data: string | Uint8Array, seed?: number): string;
    /**
     * Generate 128-bit hash as hex string
     */
    static hash128(data: string | Uint8Array, seed?: number): string;
}
export default MurmurHash;
//# sourceMappingURL=index.d.ts.map