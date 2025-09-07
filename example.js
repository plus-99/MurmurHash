// Example usage of @plus99/murmur-hash library
const { MurmurHash, murmur3_32, murmur3_32_hex, murmur3_128 } = require('./dist/index');

console.log('📦 @plus99/murmur-hash - Example Usage');
console.log('=====================================\n');

// Example 1: Simple string hashing
const text = 'Hello, World!';
console.log('1. Simple String Hashing:');
console.log(`   Input: "${text}"`);
console.log(`   Hash (32-bit): ${murmur3_32(text)}`);
console.log(`   Hash (hex): ${murmur3_32_hex(text)}`);
console.log(`   Hash (128-bit): ${murmur3_128(text)}`);

// Example 2: Using the class interface
console.log('\n2. Class Interface:');
console.log(`   MurmurHash.hash32("${text}"): ${MurmurHash.hash32(text)}`);
console.log(`   MurmurHash.hash32Hex("${text}"): ${MurmurHash.hash32Hex(text)}`);
console.log(`   MurmurHash.hash128("${text}"): ${MurmurHash.hash128(text)}`);

// Example 3: Hashing with seeds
console.log('\n3. Seeded Hashing:');
console.log(`   With seed 0: ${murmur3_32(text, 0)}`);
console.log(`   With seed 42: ${murmur3_32(text, 42)}`);
console.log(`   With seed 123: ${murmur3_32(text, 123)}`);

// Example 4: Hashing byte arrays
console.log('\n4. Byte Array Hashing:');
const bytes = new Uint8Array([72, 101, 108, 108, 111]);
console.log(`   Bytes [${Array.from(bytes)}]: ${murmur3_32(bytes)}`);

// Example 5: Performance demonstration
console.log('\n5. Performance Example:');
const start = Date.now();
const iterations = 100000;
for (let i = 0; i < iterations; i++) {
  murmur3_32(`test-string-${i}`);
}
const duration = Date.now() - start;
console.log(`   ${iterations} hashes in ${duration}ms (${(iterations/duration).toFixed(0)} hashes/ms)`);

console.log('\n✅ Examples completed!');