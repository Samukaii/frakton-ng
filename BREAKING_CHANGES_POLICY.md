# Breaking Changes Policy

## Overview

Frakton-ng follows a structured and predictable approach to breaking changes, heavily inspired by Angular's own breaking changes philosophy. Our goal is to provide stability for production applications while enabling continuous innovation and improvement.

## Versioning Strategy

### Semantic Versioning
We follow [Semantic Versioning (SemVer)](https://semver.org/) with the following interpretation:

- **PATCH** (x.x.X): Bug fixes, no breaking changes
- **MINOR** (x.X.x): New features, no breaking changes
- **MAJOR** (X.x.x): Breaking changes allowed

### Release Schedule
- **Major releases**: Synchronized with Angular major versions (every 6 months)
- **Minor releases**: Every 3 months
- **Patch releases**: As needed for critical bug fixes

## Breaking Changes Process

### 1. Experimental Phase
New APIs and features may be introduced as **experimental**:
- Marked with `@experimental` in documentation
- Can change rapidly without notice
- Not recommended for production use
- Feedback and iteration encouraged

### 2. Developer Preview
Promising experimental features move to **developer preview**:
- More stable API design
- Breaking changes still possible but less frequent
- Community feedback actively sought
- Early adopters can begin testing

### 3. Next Version
Features preparing for stable release enter **next version**:
- API largely finalized
- Only critical breaking changes allowed
- Documentation and migration guides prepared
- Release candidate testing

### 4. Stable Release
Features become part of the stable API:
- Full backward compatibility commitment
- Follows deprecation policy before removal
- Complete documentation and examples
- Production-ready

## Deprecation Timeline

### Standard Deprecation Process
1. **Deprecation Announcement** (Major Version N)
   - Feature marked as deprecated
   - Warning messages in development builds
   - Migration guide published
   - Alternative approaches documented

2. **Deprecation Period** (Major Versions N+1 to N+2)
   - Deprecated feature remains functional
   - Continued warning messages
   - Support for migration questions
   - No new features added to deprecated APIs

3. **Removal** (Major Version N+3 or later)
   - Feature completely removed
   - Breaking change in major release
   - Migration required for affected applications

### Extended Deprecation
For widely-used features, we may extend the deprecation period:
- High-usage APIs may be deprecated for 3+ major versions
- Community input influences deprecation timeline
- Critical infrastructure components receive longer support

## Types of Breaking Changes

### API Changes
- **Method signatures**: Parameter changes, return type modifications
- **Property names**: Renaming or removing component properties
- **Interface changes**: Adding required properties, changing types

### Behavioral Changes
- **Default values**: Changes to component default behavior
- **Event handling**: Modifications to event emission patterns
- **Styling**: Changes to default CSS classes or design tokens

### Dependency Changes
- **Angular version**: Updates to minimum Angular version requirements
- **Peer dependencies**: Changes to required external libraries
- **Build requirements**: Updates to build tools or processes

## Migration Support

### Migration Guides
For each breaking change, we provide:
- **Detailed migration guide** with before/after examples
- **Automated migration tools** where possible (ng update schematics)
- **Timeline** for completing migration
- **Support resources** for common migration issues

### Automated Migrations
When possible, we provide Angular schematics for:
- Property name changes
- Import path updates
- Configuration migrations
- Template syntax updates

### Community Support
- **GitHub Issues**: Dedicated migration support labels
- **Documentation**: Comprehensive migration examples
- **Community Forum**: Peer support for migration questions

## Communication Strategy

### Advance Notice
- **6 months minimum** before any breaking change
- **Release notes** with detailed impact analysis
- **Blog posts** for major architectural changes
- **Community updates** through official channels

### Documentation
- **CHANGELOG.md**: Complete record of all changes
- **Migration guides**: Step-by-step instructions
- **API documentation**: Clear deprecation markers
- **Examples**: Updated sample code for new patterns

## Exception Handling

### Security Issues
Security-related breaking changes may bypass standard timelines:
- Immediate patches for critical vulnerabilities
- Accelerated deprecation for insecure patterns
- Priority migration support for security updates

### Critical Bug Fixes
Serious bugs may require breaking changes in minor releases:
- Clear justification in release notes
- Migration path provided
- Community notification before release

### Angular Compatibility
Breaking changes required for Angular compatibility:
- Follow Angular's own breaking change schedule
- Maintain compatibility with supported Angular versions
- Provide migration tools aligned with Angular updates

## Version Support Policy

### Long-Term Support (LTS)
- **Current major version**: Full feature development and bug fixes
- **Previous major version**: Bug fixes and security updates for 12 months
- **LTS versions**: Extended support aligned with Angular LTS releases

### End of Life (EOL)
- **18 months** of support for major versions
- **6 months** advance notice before EOL
- **Final security updates** before EOL
- **Migration resources** remain available indefinitely

## Developer Responsibilities

### Staying Updated
Developers using Frakton-ng should:
- Monitor deprecation warnings in development builds
- Review release notes for each update
- Plan migration timelines for deprecated features
- Test applications with new versions before production deployment

### Feedback and Input
We encourage community input on:
- Proposed breaking changes
- Migration difficulty assessment
- Alternative solution suggestions
- Timeline adjustment requests

## Commitment to Stability

Frakton-ng is committed to providing a stable foundation for Angular applications while enabling continuous improvement. Our breaking changes policy balances innovation with reliability, ensuring that teams can confidently build long-term applications while benefiting from library evolution.

For questions about specific breaking changes or migration support, please:
- Check our [migration guides](./docs/migrations/)
- Search [existing issues](https://github.com/frakton/frakton-ng/issues)
- Open a [new issue](https://github.com/frakton/frakton-ng/issues/new) with the `migration-support` label