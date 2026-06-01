// next.config.js
const { execSync } = require('child_process');

const lastCommitDate = execSync('git log -1 --format=%cI').toString().trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_LAST_COMMIT_DATE: lastCommitDate,
  },
};

module.exports = nextConfig;