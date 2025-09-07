# @plus99/murmur-hash

A fast, pure TypeScript implementation of the MurmurHash3 algorithm with zero dependencies. Works seamlessly across Node.js, browsers, CommonJS, ES modules, and TypeScript environments.

## Features

- ✅ **Zero dependencies** - Pure TypeScript implementation
- ✅ **Universal compatibility** - Works in Node.js, browsers, and all module systems
- ✅ **Multiple hash formats** - 32-bit and 128-bit hashing
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
const { murmur3_32, MurmurHash } = require('@plus99/murmur-hash');

// Simple 32-bit hash
const hash = murmur3_32('Hello, World!');
console.log(hash); // 592631239

// Using the class interface
const hexHash = MurmurHash.hash32Hex('Hello, World!');
console.log(hexHash); // "2352d5c7"
```

## Usage Examples

### 1. Function API

```javascript
const { murmur3_32, murmur3_32_hex, murmur3_128 } = require('@plus99/murmur-hash');

// 32-bit hash as number
const hash32 = murmur3_32('Hello, World!');
console.log(hash32); // 592631239

// 32-bit hash as hex string
const hash32Hex = murmur3_32_hex('Hello, World!');
console.log(hash32Hex); // "2352d5c7"

// 128-bit hash as hex string
const hash128 = murmur3_128('Hello, World!');
console.log(hash128); // "2352d5c72e493a0e746fca945714038f"
```

### 2. Class API

```javascript
const { MurmurHash } = require('@plus99/murmur-hash');

const text = 'Hello, World!';

// All methods are static
const hash32 = MurmurHash.hash32(text);
const hash32Hex = MurmurHash.hash32Hex(text);
const hash128 = MurmurHash.hash128(text);

console.log({ hash32, hash32Hex, hash128 });
```

### 3. ES Modules

```javascript
import { murmur3_32, MurmurHash } from '@plus99/murmur-hash';

const hash = murmur3_32('Hello, World!');
const classHash = MurmurHash.hash32('Hello, World!');
```

### 4. TypeScript

```typescript
import { murmur3_32, murmur3_32_hex, murmur3_128, MurmurHash } from '@plus99/murmur-hash';

// All functions are fully typed
const data: string = 'Hello, World!';
const seed: number = 42;

const hash32: number = murmur3_32(data, seed);
const hash32Hex: string = murmur3_32_hex(data, seed);
const hash128: string = murmur3_128(data, seed);

// Class methods are also typed
const classHash: number = MurmurHash.hash32(data, seed);
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
const { murmur3_32 } = require('@plus99/murmur-hash');

const text = 'Hello, World!';

// Different seeds produce different hashes
const hash1 = murmur3_32(text, 0);    // Default seed
const hash2 = murmur3_32(text, 42);   // Custom seed
const hash3 = murmur3_32(text, 123);  // Another seed

console.log({ hash1, hash2, hash3 });
// All different values
```

## API Reference

### Functions

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

### MurmurHash Class

#### `MurmurHash.hash32(data, seed?): number`
Same as `murmur3_32()`

#### `MurmurHash.hash32Hex(data, seed?): string`
Same as `murmur3_32_hex()`

#### `MurmurHash.hash128(data, seed?): string`
Same as `murmur3_128()`

## Performance

The library is highly optimized and can process over 100,000 hashes per second:

```javascript
const { murmur3_32 } = require('@plus99/murmur-hash');

console.time('100k hashes');
for (let i = 0; i < 100000; i++) {
  murmur3_32(`test-string-${i}`);
}
console.timeEnd('100k hashes');
// Typically: 100k hashes: 50-100ms
```

## Compatibility

- **Node.js**: 14.0.0 or higher
- **Browsers**: All modern browsers (ES2020 support)
- **Module Systems**: CommonJS, ES Modules, UMD
- **TypeScript**: Full type support included

## Common Use Cases

### 1. Hash Tables and Caching
```javascript
const cache = new Map();

function getCachedData(key) {
  const hashKey = murmur3_32_hex(key);
  return cache.get(hashKey);
}
```

### 2. Data Fingerprinting
```javascript
function getFileFingerprint(fileContent) {
  return murmur3_128(fileContent);
}
```

### 3. Distributed Systems
```javascript
function getShardId(userId, numShards) {
  const hash = murmur3_32(userId);
  return hash % numShards;
}
```

### 4. Checksums
```javascript
function validateData(data, expectedHash) {
  return murmur3_32_hex(data) === expectedHash;
}
```

## License

MIT

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project, including how to release new versions to npm.