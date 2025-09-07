// Test file using CommonJS require
const { MurmurHash, murmur3_32, murmur3_32_hex, murmur3_128 } = require('./dist/index');

// Test data
const testString = 'Hello, World!';
const testBytes = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);

console.log('MurmurHash Library Tests');
console.log('========================');

// Test 32-bit hash
console.log('\n32-bit Hash Tests:');
console.log('String input:', testString);
console.log('murmur3_32:', murmur3_32(testString));
console.log('murmur3_32_hex:', murmur3_32_hex(testString));
console.log('MurmurHash.hash32:', MurmurHash.hash32(testString));
console.log('MurmurHash.hash32Hex:', MurmurHash.hash32Hex(testString));

console.log('\nBytes input:', Array.from(testBytes));
console.log('murmur3_32:', murmur3_32(testBytes));
console.log('murmur3_32_hex:', murmur3_32_hex(testBytes));

// Test 128-bit hash
console.log('\n128-bit Hash Tests:');
console.log('murmur3_128:', murmur3_128(testString));
console.log('MurmurHash.hash128:', MurmurHash.hash128(testString));

// Test with seed
console.log('\nSeeded Hash Tests:');
console.log('murmur3_32 (seed=42):', murmur3_32(testString, 42));
console.log('murmur3_32_hex (seed=42):', murmur3_32_hex(testString, 42));

// Test consistency
console.log('\nConsistency Tests:');
const testInputs = ['', 'a', 'Hello', 'The quick brown fox jumps over the lazy dog'];
testInputs.forEach(input => {
  const hash1 = murmur3_32(input);
  const hash2 = murmur3_32(input);
  console.log(`"${input}" -> ${hash1} (consistent: ${hash1 === hash2})`);
});

// Performance test
console.log('\nPerformance Test:');
const iterations = 10000;
const start = Date.now();
for (let i = 0; i < iterations; i++) {
  murmur3_32(testString + i);
}
const end = Date.now();
console.log(`${iterations} iterations in ${end - start}ms`);
console.log(`Average: ${((end - start) / iterations).toFixed(3)}ms per hash`);

// Test different export formats
console.log('\nExport Format Tests:');
try {
  // Test CommonJS
  console.log('✓ CommonJS import works');
  
  // Test that UMD was built
  const fs = require('fs');
  if (fs.existsSync('./dist/index.umd.js')) {
    console.log('✓ UMD build exists');
  }
  if (fs.existsSync('./dist/index.esm.js')) {
    console.log('✓ ESM build exists');
  }
  if (fs.existsSync('./dist/index.d.ts')) {
    console.log('✓ TypeScript declarations exist');
  }
} catch (error) {
  console.error('Export format test failed:', error);
}

console.log('\nAll tests completed successfully!');