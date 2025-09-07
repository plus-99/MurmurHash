# Overview

This is a TypeScript library that implements the MurmurHash3 hashing algorithm. The library provides a pure TypeScript implementation with zero dependencies that works across Node.js and browser environments, offering both 32-bit and 128-bit hashing capabilities. It's designed as a reusable npm package with multiple module format exports (CommonJS, ES modules, and UMD) to ensure broad compatibility.

## Package Details
- **Package Name**: @plus99/murmur-hash
- **Version**: 1.0.0
- **Zero Dependencies**: Pure TypeScript implementation with no external dependencies
- **Universal Compatibility**: Works in Node.js, browsers, TypeScript, CommonJS, and ES module environments

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Build System
The project uses a multi-format build approach to maximize compatibility:
- **TypeScript Compilation**: Primary source compilation using TypeScript compiler for CommonJS and ES module outputs
- **Rollup Bundling**: Creates UMD builds for browser environments using Rollup with TypeScript plugin
- **Multiple Export Formats**: Provides CommonJS (`dist/index.js`), ES modules (`dist/index.esm.js`), and UMD (`dist/index.umd.js`) builds

## Library Design Pattern
- **Functional API**: Provides standalone functions (`murmur3_32`, `murmur3_32_hex`, `murmur3_128`) for direct usage
- **Class-based API**: Offers a `MurmurHash` utility class with static methods for object-oriented usage patterns
- **Default Export**: Includes a default export for convenience in different import scenarios

## Algorithm Implementation
- **Pure TypeScript**: No native dependencies, ensuring cross-platform compatibility
- **UTF-8 Encoding**: Handles string-to-bytes conversion with fallback for environments without TextEncoder
- **Bit Manipulation**: Implements proper 32-bit integer operations with overflow handling for JavaScript number limitations
- **Input Flexibility**: Accepts both string and Uint8Array inputs

## Module Structure
- **Core Implementation**: Hash algorithm logic isolated in `src/murmur3.ts`
- **Public API**: Clean interface exposed through `src/index.ts`
- **Type Safety**: Full TypeScript support with generated declaration files

## Testing Strategy
- **Consistency Testing**: Verifies hash output consistency across multiple calls
- **Performance Benchmarking**: Includes timing tests for performance validation
- **Multiple Input Types**: Tests both string and byte array inputs
- **Seed Parameter Testing**: Validates seeded hash generation

# External Dependencies

## Runtime Dependencies
- **tslib**: TypeScript runtime library for compiled output compatibility

## Development Dependencies
- **TypeScript**: Core compiler for source code compilation and type checking
- **Rollup**: Module bundler for creating UMD browser builds
- **@rollup/plugin-typescript**: Rollup plugin for TypeScript compilation during bundling

## Browser Compatibility
- **TextEncoder API**: Uses native browser TextEncoder when available, with manual UTF-8 encoding fallback
- **Math.imul Polyfill**: Implements custom 32-bit integer multiplication for consistent behavior across environments

## Node.js Requirements
- **Minimum Version**: Node.js 14.0.0 or higher for modern JavaScript feature support