/**
 * Filter List Module for CalmWeb
 *
 * Downloads, parses, and applies community filter lists (EasyList, EasyPrivacy, etc.)
 */

export {
  fetchAllLists,
  getCachedLists,
  needsRefresh,
  clearCachedLists,
  DEFAULT_FILTER_LISTS,
  type FilterListConfig,
  type CachedFilterList,
} from './fetcher';

export {
  parseFilterLists,
  parseCachedLists,
  getFilterListStats,
  type ParsedFilterLists,
} from './parser';

export {
  generateFilterListCss,
  injectFilterListCss,
  isFilterListCssInjected,
  removeFilterListCss,
  createNetworkRules,
  applyNetworkRules,
  clearNetworkRules,
} from './applier';
