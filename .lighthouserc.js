module.exports = {
  ci: {
    collect: {
      staticDistDir: '.',
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
