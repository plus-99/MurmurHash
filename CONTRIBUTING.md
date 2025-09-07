# Contributing to @plus99/murmur-hash

Thank you for your interest in contributing to this project! This guide will help you get started with development and explain how to release new versions to npm.

## Development Setup

### Prerequisites

- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Getting Started

1. **Clone and setup the project:**
   ```bash
   git clone git@github.com:plus-99/MurmurHash.git
   cd murmur-hash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Run tests:**
   ```bash
   npm test
   # or
   node test.js
   ```

## Project Structure

```
.
├── src/                    # Source TypeScript files
│   ├── index.ts           # Main entry point and exports
│   └── murmur3.ts         # Core MurmurHash implementation
├── dist/                  # Built files (generated)
│   ├── index.js           # CommonJS build
│   ├── index.esm.js       # ES Module build
│   ├── index.umd.js       # UMD build for browsers
│   └── *.d.ts             # TypeScript declarations
├── test.js                # Test file
├── example.js             # Usage examples
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── rollup.config.js       # Rollup configuration for UMD build
└── README.md              # Documentation
```

## Build System

The project uses a multi-format build system to ensure compatibility across different environments:

### Build Commands

- `npm run build` - Build all formats (CommonJS, ES Modules, UMD)
- `npm run build:cjs` - Build CommonJS format only
- `npm run build:esm` - Build ES Modules format only
- `npm run build:umd` - Build UMD format only
- `npm run dev` - Watch mode for development

### Build Outputs

- **CommonJS** (`dist/index.js`): For Node.js and older bundlers
- **ES Modules** (`dist/index.esm.js`): For modern bundlers and native ES modules
- **UMD** (`dist/index.umd.js`): For browser script tags and AMD loaders
- **TypeScript Declarations** (`dist/*.d.ts`): For TypeScript support

## Development Workflow

1. **Make changes** to source files in `src/`
2. **Build the project** with `npm run build`
3. **Test your changes** with `npm test`
4. **Run examples** with `node example.js`
5. **Commit your changes** following conventional commit format

## Testing

### Running Tests

```bash
# Run the main test suite
npm test

# Run example file
node example.js

# Manual testing in Node.js REPL
node
> const { murmur3_32 } = require('./dist/index');
> murmur3_32('test');
```

### Test Coverage

The test suite covers:
- ✅ Basic hash functionality
- ✅ Consistency across multiple calls
- ✅ String and byte array inputs
- ✅ Seeded hashing
- ✅ Performance benchmarks
- ✅ Export format validation

### Adding Tests

When adding new features, ensure you add corresponding tests to `test.js`.

## Release Process

### Prerequisites for Publishing

1. **npm account**: You need an npm account with publish permissions
2. **Authentication**: Login to npm locally
   ```bash
   npm login
   ```

### Version Management

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

### Step-by-Step Release Process

#### 1. Prepare the Release

```bash
# Ensure you're on the main branch and up to date
git checkout main
git pull origin main

# Make sure all tests pass
npm test

# Make sure the build is clean
npm run build
```

#### 2. Update Version

Choose the appropriate version bump:

```bash
# For bug fixes (1.0.0 → 1.0.1)
npm version patch

# For new features (1.0.0 → 1.1.0)
npm version minor

# For breaking changes (1.0.0 → 2.0.0)
npm version major
```

This will:
- Update the version in `package.json`
- Create a git commit with the version change
- Create a git tag for the release

#### 3. Build for Production

```bash
# Clean build for production
rm -rf dist
npm run build

# Verify the build
npm test
```

#### 4. Publish to npm

```bash
# Publish to npm
npm publish

# If this is the first time publishing or if you're publishing a scoped package
npm publish --access public
```

#### 5. Push to Git

```bash
# Push the version commit and tags
git push origin main
git push origin --tags
```

### Pre-release Versions

For beta or alpha releases:

```bash
# Create a pre-release version
npm version prerelease --preid=beta

# Publish with a tag
npm publish --tag beta
```

Users can then install with:
```bash
npm install @plus99/murmur-hash@beta
```

### Publishing Checklist

Before publishing, ensure:

- [ ] All tests pass (`npm test`)
- [ ] Code builds successfully (`npm run build`)
- [ ] Version number is updated appropriately
- [ ] CHANGELOG.md is updated (if you maintain one)
- [ ] README.md reflects any API changes
- [ ] No sensitive information in the package
- [ ] The `files` field in package.json includes all necessary files

### Rollback a Release

If you need to rollback a release:

```bash
# Deprecate a specific version
npm deprecate @plus99/murmur-hash@1.2.3 "This version has issues, please use 1.2.2"

# Unpublish (only allowed within 72 hours)
npm unpublish @plus99/murmur-hash@1.2.3
```

### Package Configuration

The `package.json` is configured for optimal npm publishing:

```json
{
  "files": [
    "dist"
  ],
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  }
}
```

This ensures:
- Only the `dist` folder is published
- Multiple module formats are supported
- TypeScript types are properly exposed
- Modern bundlers can use the ES module version

## Troubleshooting

### Build Issues

If builds fail:
1. Delete `node_modules` and `dist` directories
2. Run `npm install`
3. Run `npm run build`

### Publishing Issues

- **Authentication errors**: Run `npm login` and verify your credentials
- **Permission errors**: Ensure you have publish rights to the `@plus99` scope
- **Version conflicts**: Ensure you've bumped the version number

### Testing Issues

- **Module not found**: Ensure you've built the project with `npm run build`
- **TypeScript errors**: Check `tsconfig.json` and ensure all dependencies are installed

## Code Style

- Use TypeScript for all source code
- Follow existing code formatting
- Add JSDoc comments for public APIs
- Use meaningful variable and function names
- Keep functions focused and small

## Questions?

If you have questions about contributing or releasing, please:
1. Check this documentation first
2. Look at existing issues in the repository
3. Create a new issue with your question

Thank you for contributing! 🎉