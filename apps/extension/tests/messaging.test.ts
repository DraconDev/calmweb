import { describe, it, expect } from 'vitest';
import { 
  MESSAGE_TYPES,
  type ClassifyUnitMessage,
  type GetSettingsMessage,
  type UpdateSettingsMessage,
  type ClearCacheMessage,
  type GetStatsMessage,
  type IncrementStatMessage,
  validateMessage,
} from '../src/messaging';

describe('Messaging Constants', () => {
  it('should have CLASSIFY_UNIT message type', () => {
    expect(MESSAGE_TYPES.CLASSIFY_UNIT).toBe('calmweb:classifyUnit');
  });

  it('should have GET_SETTINGS message type', () => {
    expect(MESSAGE_TYPES.GET_SETTINGS).toBe('calmweb:getSettings');
  });

  it('should have UPDATE_SETTINGS message type', () => {
    expect(MESSAGE_TYPES.UPDATE_SETTINGS).toBe('calmweb:updateSettings');
  });

  it('should have CLEAR_CACHE message type', () => {
    expect(MESSAGE_TYPES.CLEAR_CACHE).toBe('calmweb:clearCache');
  });

  it('should have GET_STATS message type', () => {
    expect(MESSAGE_TYPES.GET_STATS).toBe('calmweb:getStats');
  });

  it('should have INCREMENT_STAT message type', () => {
    expect(MESSAGE_TYPES.INCREMENT_STAT).toBe('calmweb:incrementStat');
  });
});

describe('Message Types', () => {
  describe('ClassifyUnitMessage', () => {
    it('should have correct structure', () => {
      const message: ClassifyUnitMessage = {
        type: MESSAGE_TYPES.CLASSIFY_UNIT,
        unit: {
          id: 'test-1',
          site: 'youtube',
          fingerprint: 'fp1',
          title: 'Test Video',
          metadata: [],
          isNew: false,
        },
      };

      expect(message.type).toBe('calmweb:classifyUnit');
      expect(message.unit.id).toBe('test-1');
      expect(message.unit.site).toBe('youtube');
    });
  });

  describe('GetSettingsMessage', () => {
    it('should have correct structure', () => {
      const message: GetSettingsMessage = {
        type: MESSAGE_TYPES.GET_SETTINGS,
      };

      expect(message.type).toBe('calmweb:getSettings');
    });
  });

  describe('UpdateSettingsMessage', () => {
    it('should have correct structure', () => {
      const message: UpdateSettingsMessage = {
        type: MESSAGE_TYPES.UPDATE_SETTINGS,
        settings: {
          enabled: false,
          strictness: 50,
        },
      };

      expect(message.type).toBe('calmweb:updateSettings');
      expect(message.settings.enabled).toBe(false);
    });
  });

  describe('ClearCacheMessage', () => {
    it('should have correct structure', () => {
      const message: ClearCacheMessage = {
        type: MESSAGE_TYPES.CLEAR_CACHE,
      };

      expect(message.type).toBe('calmweb:clearCache');
    });
  });

  describe('GetStatsMessage', () => {
    it('should have correct structure', () => {
      const message: GetStatsMessage = {
        type: MESSAGE_TYPES.GET_STATS,
      };

      expect(message.type).toBe('calmweb:getStats');
    });
  });

  describe('IncrementStatMessage', () => {
    it('should have correct structure', () => {
      const message: IncrementStatMessage = {
        type: MESSAGE_TYPES.INCREMENT_STAT,
        key: 'totalFiltered',
        amount: 1,
      };

      expect(message.type).toBe('calmweb:incrementStat');
      expect(message.key).toBe('totalFiltered');
    });
  });
});

describe('validateMessage', () => {
  it('should validate ClassifyUnitMessage', () => {
    const message = {
      type: MESSAGE_TYPES.CLASSIFY_UNIT,
      unit: {
        id: 'test',
        site: 'youtube',
        fingerprint: 'fp1',
        title: 'Test',
        metadata: [],
        isNew: false,
      },
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.CLASSIFY_UNIT);
  });

  it('should validate GetSettingsMessage', () => {
    const message = {
      type: MESSAGE_TYPES.GET_SETTINGS,
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.GET_SETTINGS);
  });

  it('should validate UpdateSettingsMessage', () => {
    const message = {
      type: MESSAGE_TYPES.UPDATE_SETTINGS,
      settings: { enabled: true },
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.UPDATE_SETTINGS);
  });

  it('should validate ClearCacheMessage', () => {
    const message = {
      type: MESSAGE_TYPES.CLEAR_CACHE,
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.CLEAR_CACHE);
  });

  it('should validate GetStatsMessage', () => {
    const message = {
      type: MESSAGE_TYPES.GET_STATS,
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.GET_STATS);
  });

  it('should validate IncrementStatMessage', () => {
    const message = {
      type: MESSAGE_TYPES.INCREMENT_STAT,
      key: 'totalFiltered',
    };

    const result = validateMessage(message);
    expect(result.type).toBe(MESSAGE_TYPES.INCREMENT_STAT);
  });
});
