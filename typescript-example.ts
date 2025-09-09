// TypeScript usage example for @plus99/murmur-hash
import { murmur3_32, murmur2_32, murmur2_32_hex, MurmurHash } from './dist/index';

// Example usage with proper TypeScript types
const testData: string = 'Hello, World!';
const seed: number = 42;

// MurmurHash3 functions
const hash3: number = murmur3_32(testData);
const hash3Seeded: number = murmur3_32(testData, seed);

// MurmurHash2 functions  
const hash2: number = murmur2_32(testData);
const hash2Hex: string = murmur2_32_hex(testData);
const hash2Seeded: number = murmur2_32(testData, seed);

// Class methods
const classHash2: number = MurmurHash.hash2_32(testData);
const classHash2Hex: string = MurmurHash.hash2_32Hex(testData, seed);

// Byte array support
const bytes: Uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const byteHash: number = murmur2_32(bytes);

console.log('TypeScript example results:');
console.log({ hash3, hash2, hash2Hex, classHash2, byteHash });

export { hash3, hash2, hash2Hex, classHash2, byteHash };