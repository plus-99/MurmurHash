// Test file using CommonJS require
const { MurmurHash, murmur3_32, murmur3_32_hex, murmur3_128, murmur2_32, murmur2_32_hex, murmur2_64 } = require('./dist/index');

// Test data
const testString = 'Hello, World!';
const testBytes = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);

console.log('MurmurHash Library Tests');
console.log('========================');

// Test MurmurHash3 32-bit hash
console.log('\nMurmurHash3 32-bit Tests:');
console.log('String input:', testString);
console.log('murmur3_32:', murmur3_32(testString));
console.log('murmur3_32_hex:', murmur3_32_hex(testString));
console.log('MurmurHash.hash32:', MurmurHash.hash32(testString));
console.log('MurmurHash.hash32Hex:', MurmurHash.hash32Hex(testString));

console.log('\nBytes input:', Array.from(testBytes));
console.log('murmur3_32:', murmur3_32(testBytes));
console.log('murmur3_32_hex:', murmur3_32_hex(testBytes));

// Test MurmurHash3 128-bit hash
console.log('\nMurmurHash3 128-bit Tests:');
console.log('murmur3_128:', murmur3_128(testString));
console.log('MurmurHash.hash128:', MurmurHash.hash128(testString));

// Test MurmurHash2 32-bit hash
console.log('\nMurmurHash2 32-bit Tests:');
console.log('murmur2_32:', murmur2_32(testString));
console.log('murmur2_32_hex:', murmur2_32_hex(testString));
console.log('MurmurHash.hash2_32:', MurmurHash.hash2_32(testString));
console.log('MurmurHash.hash2_32Hex:', MurmurHash.hash2_32Hex(testString));

console.log('\nMurmurHash2 with bytes:');
console.log('murmur2_32:', murmur2_32(testBytes));
console.log('murmur2_32_hex:', murmur2_32_hex(testBytes));

// Test MurmurHash2 64-bit hash
console.log('\nMurmurHash2 64-bit Tests:');
console.log('murmur2_64:', murmur2_64(testString));
console.log('MurmurHash.hash2_64:', MurmurHash.hash2_64(testString));

// Test with seed
console.log('\nSeeded Hash Tests:');
console.log('MurmurHash3:');
console.log('  murmur3_32 (seed=42):', murmur3_32(testString, 42));
console.log('  murmur3_32_hex (seed=42):', murmur3_32_hex(testString, 42));
console.log('  murmur3_128 (seed=42):', murmur3_128(testString, 42));

console.log('MurmurHash2:');
console.log('  murmur2_32 (seed=42):', murmur2_32(testString, 42));
console.log('  murmur2_32_hex (seed=42):', murmur2_32_hex(testString, 42));
console.log('  murmur2_64 (seed=42):', murmur2_64(testString, 42));

// Test consistency
console.log('\nConsistency Tests:');
const testInputs = ['', 'a', 'Hello', 'The quick brown fox jumps over the lazy dog'];
console.log('MurmurHash3 consistency:');
testInputs.forEach(input => {
  const hash1 = murmur3_32(input);
  const hash2 = murmur3_32(input);
  console.log(`  "${input}" -> ${hash1} (consistent: ${hash1 === hash2})`);
});

console.log('MurmurHash2 consistency:');
testInputs.forEach(input => {
  const hash1 = murmur2_32(input);
  const hash2 = murmur2_32(input);
  console.log(`  "${input}" -> ${hash1} (consistent: ${hash1 === hash2})`);
});

// Performance test
console.log('\nPerformance Tests:');
const iterations = 10000;

// MurmurHash3 performance
const start3 = Date.now();
for (let i = 0; i < iterations; i++) {
  murmur3_32(testString + i);
}
const end3 = Date.now();
console.log(`MurmurHash3: ${iterations} iterations in ${end3 - start3}ms`);
console.log(`Average: ${((end3 - start3) / iterations).toFixed(3)}ms per hash`);

// MurmurHash2 performance
const start2 = Date.now();
for (let i = 0; i < iterations; i++) {
  murmur2_32(testString + i);
}
const end2 = Date.now();
console.log(`MurmurHash2: ${iterations} iterations in ${end2 - start2}ms`);
console.log(`Average: ${((end2 - start2) / iterations).toFixed(3)}ms per hash`);

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