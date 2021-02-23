import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'wc-stencil',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
  ],
  testing: {
    moduleNameMapper: {
      // support the same @ -> src alias mapping in source code
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  },
};
