# @plus99/murmur-hash

A fast, pure TypeScript implementation of both MurmurHash2 and MurmurHash3 algorithms with zero dependencies. Works seamlessly across Node.js, browsers, CommonJS, ES modules, and TypeScript environments.

## Features

- ✅ **Zero dependencies** - Pure TypeScript implementation
- ✅ **Universal compatibility** - Works in Node.js, browsers, and all module systems
- ✅ **Multiple algorithms** - MurmurHash2 (32-bit, 64-bit) and MurmurHash3 (32-bit, 128-bit)
- ✅ **Multiple hash formats** - Support for both integer and hex string outputs
- ✅ **High performance** - 100,000+ hashes per second
- ✅ **TypeScript support** - Full type definitions included
- ✅ **Flexible inputs** - Supports strings and byte arrays
- ✅ **Seeded hashing** - Optional seed parameter for all functions

## Installation

```bash
npm install @plus99/murmur-hash
```

## Quick Start

```javascript
const { murmur3_32, murmur2_32, MurmurHash } = require('@plus99/murmur-hash');

// MurmurHash3 32-bit hash
const hash3 = murmur3_32('Hello, World!');
console.log(hash3); // 592631239

// MurmurHash2 32-bit hash (faster)
const hash2 = murmur2_32('Hello, World!');
console.log(hash2); // 765620163

// With custom seed
const seededHash = murmur3_32('Hello, World!', 42);
console.log(seededHash); // 1236340197

// Using the class interface
const hexHash = MurmurHash.hash32Hex('Hello, World!');
console.log(hexHash); // "2352d5c7"
```

## Usage Examples

### 1. Function API

```javascript
const { 
  murmur3_32, murmur3_32_hex, murmur3_128,
  murmur2_32, murmur2_32_hex, murmur2_64 
} = require('@plus99/murmur-hash');

// MurmurHash3 functions
const hash3_32 = murmur3_32('Hello, World!');
console.log(hash3_32); // 592631239

const hash3_32Hex = murmur3_32_hex('Hello, World!');
console.log(hash3_32Hex); // "2352d5c7"

const hash3_128 = murmur3_128('Hello, World!');
console.log(hash3_128); // "2352d5c72e493a0e746fca945714038f"

// MurmurHash2 functions (faster performance)
const hash2_32 = murmur2_32('Hello, World!');
console.log(hash2_32); // 765620163

const hash2_32Hex = murmur2_32_hex('Hello, World!');
console.log(hash2_32Hex); // "2da26fc3"

const hash2_64 = murmur2_64('Hello, World!');
console.log(hash2_64); // "3874f08551a9e19a"

// All functions support optional seed parameter
const seeded3_32 = murmur3_32('Hello, World!', 42);
const seeded2_32 = murmur2_32('Hello, World!', 42);
console.log({ seeded3_32, seeded2_32 });
```

### 2. Class API

```javascript
const { MurmurHash } = require('@plus99/murmur-hash');

const text = 'Hello, World!';

// MurmurHash3 methods (default, backwards compatible)
const hash3_32 = MurmurHash.hash32(text);
const hash3_32Hex = MurmurHash.hash32Hex(text);
const hash3_128 = MurmurHash.hash128(text);

// MurmurHash2 methods (faster performance)
const hash2_32 = MurmurHash.hash2_32(text);
const hash2_32Hex = MurmurHash.hash2_32Hex(text);
const hash2_64 = MurmurHash.hash2_64(text);

// With custom seed
const seededHash3 = MurmurHash.hash32(text, 42);
const seededHash2 = MurmurHash.hash2_32(text, 42);

console.log('MurmurHash3:', { hash3_32, hash3_32Hex, hash3_128 });
console.log('MurmurHash2:', { hash2_32, hash2_32Hex, hash2_64 });
console.log('Seeded:', { seededHash3, seededHash2 });
```

### 3. ES Modules

```javascript
import { murmur3_32, MurmurHash } from '@plus99/murmur-hash';

const hash = murmur3_32('Hello, World!');
const classHash = MurmurHash.hash32('Hello, World!');
```

### 4. TypeScript

```typescript
import { 
  murmur3_32, murmur3_32_hex, murmur3_128,
  murmur2_32, murmur2_32_hex, murmur2_64,
  MurmurHash 
} from '@plus99/murmur-hash';

// All functions are fully typed with optional seed
const data: string = 'Hello, World!';
const seed: number = 42;

// MurmurHash3 API with optional seed (defaults to 0 if not provided)
const hash3_32: number = murmur3_32(data);           // No seed
const seededHash3_32: number = murmur3_32(data, seed); // With seed
const hash3_32Hex: string = murmur3_32_hex(data, seed);
const hash3_128: string = murmur3_128(data, seed);

// MurmurHash2 API with optional seed
const hash2_32: number = murmur2_32(data);
const seededHash2_32: number = murmur2_32(data, seed);
const hash2_32Hex: string = murmur2_32_hex(data, seed);
const hash2_64: string = murmur2_64(data, seed);

// Class methods are also fully typed with optional seed
const classHash3: number = MurmurHash.hash32(data);
const classHash2: number = MurmurHash.hash2_32(data, seed);
```

### 5. Browser (UMD)

```html
<script src="https://unpkg.com/@plus99/murmur-hash/dist/index.umd.js"></script>
<script>
  const hash = MurmurHash.murmur3_32('Hello, World!');
  console.log(hash);
  
  // Or use the class
  const classHash = MurmurHash.MurmurHash.hash32('Hello, World!');
  console.log(classHash);
</script>
```

### 6. Byte Array Input

```javascript
const { murmur3_32 } = require('@plus99/murmur-hash');

// Hash raw bytes
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // "Hello"
const hash = murmur3_32(bytes);
console.log(hash);

// Same hash as string input
const stringHash = murmur3_32('Hello');
console.log(hash === stringHash); // true
```

### 7. Seeded Hashing

```javascript
const { murmur3_32, murmur2_32 } = require('@plus99/murmur-hash');

const text = 'Hello, World!';

// Different seeds produce different hashes for both algorithms
const hash3_seed0 = murmur3_32(text, 0);    // MurmurHash3 with seed 0
const hash3_seed42 = murmur3_32(text, 42);  // MurmurHash3 with seed 42
const hash2_seed0 = murmur2_32(text, 0);    // MurmurHash2 with seed 0
const hash2_seed42 = murmur2_32(text, 42);  // MurmurHash2 with seed 42

console.log('MurmurHash3:', { hash3_seed0, hash3_seed42 });
console.log('MurmurHash2:', { hash2_seed0, hash2_seed42 });
// All different values
```

### 8. Algorithm Comparison

```javascript
const { murmur3_32, murmur2_32, murmur2_64 } = require('@plus99/murmur-hash');

const data = 'Hello, World!';

// Compare outputs from different algorithms
const results = {
  murmur3_32: murmur3_32(data),           // 592631239
  murmur2_32: murmur2_32(data),           // 765620163  
  murmur2_64: murmur2_64(data)            // "3874f08551a9e19a"
};

console.log(results);
```

## API Reference

### MurmurHash3 Functions

#### `murmur3_32(data, seed?): number`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `number` - 32-bit hash as unsigned integer

#### `murmur3_32_hex(data, seed?): string`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `string` - 32-bit hash as 8-character hex string

#### `murmur3_128(data, seed?): string`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `string` - 128-bit hash as 32-character hex string

### MurmurHash2 Functions

#### `murmur2_32(data, seed?): number`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `number` - 32-bit hash as unsigned integer

#### `murmur2_32_hex(data, seed?): string`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `string` - 32-bit hash as 8-character hex string

#### `murmur2_64(data, seed?): string`
- **data**: `string | Uint8Array` - The data to hash
- **seed**: `number` (optional, default: 0) - Seed value for the hash
- **Returns**: `string` - 64-bit hash as 16-character hex string

### MurmurHash Class

#### MurmurHash3 Methods
- `MurmurHash.hash32(data, seed?): number` - Same as `murmur3_32()`
- `MurmurHash.hash32Hex(data, seed?): string` - Same as `murmur3_32_hex()`
- `MurmurHash.hash128(data, seed?): string` - Same as `murmur3_128()`

#### MurmurHash2 Methods
- `MurmurHash.hash2_32(data, seed?): number` - Same as `murmur2_32()`
- `MurmurHash.hash2_32Hex(data, seed?): string` - Same as `murmur2_32_hex()`
- `MurmurHash.hash2_64(data, seed?): string` - Same as `murmur2_64()`

## Performance

The library is highly optimized and can process over 100,000 hashes per second. MurmurHash2 is generally faster than MurmurHash3:

```javascript
const { murmur3_32, murmur2_32 } = require('@plus99/murmur-hash');

// MurmurHash3 performance
console.time('MurmurHash3 - 100k hashes');
for (let i = 0; i < 100000; i++) {
  murmur3_32(`test-string-${i}`);
}
console.timeEnd('MurmurHash3 - 100k hashes');
// Typically: 50-100ms

// MurmurHash2 performance (faster)
console.time('MurmurHash2 - 100k hashes');
for (let i = 0; i < 100000; i++) {
  murmur2_32(`test-string-${i}`);
}
console.timeEnd('MurmurHash2 - 100k hashes');
// Typically: 30-70ms
```

### Choosing Between MurmurHash2 and MurmurHash3

**Use MurmurHash2 when:**
- You need maximum performance
- Working with smaller datasets
- Compatibility with existing MurmurHash2 implementations

**Use MurmurHash3 when:**
- You need better hash distribution quality
- Working with larger datasets or high-collision scenarios
- Want the latest algorithm improvements

## Compatibility

- **Node.js**: 14.0.0 or higher
- **Browsers**: All modern browsers (ES2020 support)
- **Module Systems**: CommonJS, ES Modules, UMD
- **TypeScript**: Full type support included

## Common Use Cases

### 1. Hash Tables and Caching
```javascript
const { murmur2_32_hex } = require('@plus99/murmur-hash');
const cache = new Map();

function getCachedData(key) {
  // Use MurmurHash2 for speed in caching scenarios
  const hashKey = murmur2_32_hex(key);
  return cache.get(hashKey);
}
```

### 2. Data Fingerprinting
```javascript
const { murmur3_128 } = require('@plus99/murmur-hash');

function getFileFingerprint(fileContent) {
  // Use MurmurHash3 for better collision resistance
  return murmur3_128(fileContent);
}
```

### 3. Distributed Systems
```javascript
const { murmur3_32, murmur2_32 } = require('@plus99/murmur-hash');

function getShardId(userId, numShards) {
  // Use MurmurHash3 for better distribution across shards
  const hash = murmur3_32(userId);
  return hash % numShards;
}

function getFastShardId(userId, numShards) {
  // Use MurmurHash2 when speed is more important than distribution
  const hash = murmur2_32(userId);
  return hash % numShards;
}
```

### 4. Checksums and Validation
```javascript
const { murmur2_32_hex, murmur3_32_hex } = require('@plus99/murmur-hash');

function validateData(data, expectedHash) {
  // Fast validation with MurmurHash2
  return murmur2_32_hex(data) === expectedHash;
}

function secureValidateData(data, expectedHash) {
  // More secure validation with MurmurHash3
  return murmur3_32_hex(data) === expectedHash;
}
```

## License

MIT

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project, including how to release new versions to npm.