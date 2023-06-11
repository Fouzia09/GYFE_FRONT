module.exports = {
    collectCoverage: true,
    coverageReporters: ['html', 'lcovonly'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  };
  