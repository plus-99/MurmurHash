/**
 * MurmurHash3 implementation in TypeScript
 * Based on the original C++ implementation by Austin Appleby
 */
/**
 * MurmurHash3 32-bit hash function
 */
export declare function murmur3_32(data: string | Uint8Array, seed?: number): number;
/**
 * MurmurHash3 32-bit hash as hex string
 */
export declare function murmur3_32_hex(data: string | Uint8Array, seed?: number): string;
/**
 * Simple 128-bit hash simulation using two 32-bit hashes with different seeds
 */
export declare function murmur3_128(data: string | Uint8Array, seed?: number): string;
/**
 * MurmurHash2 32-bit hash function
 * Based on the original implementation by Austin Appleby
 */
export declare function murmur2_32(data: string | Uint8Array, seed?: number): number;
/**
 * MurmurHash2 32-bit hash as hex string
 */
export declare function murmur2_32_hex(data: string | Uint8Array, seed?: number): string;
/**
 * MurmurHash2 64-bit hash function
 * Returns as hex string since JavaScript numbers can't reliably represent 64-bit integers
 */
export declare function murmur2_64(data: string | Uint8Array, seed?: number): string;
//# sourceMappingURL=murmur3.d.ts.map