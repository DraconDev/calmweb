/**
 * Renderer Module for CalmWeb
 *
 * Provides UI rendering for content decisions:
 * - Collapse: Placeholder with expand option
 * - Neutralize: Text replacement with indicator
 * - Blur: Overlay with hover reveal
 * - Reader: Super Reader mode
 */

export {
  createCollapsePlaceholder,
  createCollapseStyles,
  isCollapsed,
  getCollapseInfo,
  type CollapseOptions,
} from './collapse';

export {
  createNeutralizeIndicator,
  createNeutralizeStyles,
  toggleNeutralizedView,
  isNeutralized,
  getNeutralizedInfo,
  type NeutralizeOptions,
} from './neutralize';

export { extractArticle, type ExtractedArticle } from './extractor';

export {
  getLayout,
  allLayouts,
  autoDetectLayout,
  adaptiveLayout,
  type ReaderLayout,
} from './layouts';

export {
  getTheme,
  allThemes,
  defaultTheme,
  darkTheme,
  sepiaTheme,
  midnightTheme,
  applyTheme,
  type ReaderTheme,
} from './themes';

export {
  openReader,
  closeReader,
  toggleReader,
  isReaderOpen,
  type ReaderOptions,
} from './reader';