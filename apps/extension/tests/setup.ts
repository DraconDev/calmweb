import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup React DOM after each test
afterEach(() => {
  cleanup();
});
