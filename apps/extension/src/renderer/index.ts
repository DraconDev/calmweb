/**
 * Renderer Module for CalmWeb
 *
 * Provides UI rendering for content decisions:
 * - Collapse: Placeholder with expand option
 * - Neutralize: Text replacement with indicator
 * - Text Overlay: Full-page text-only transformation
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

export {
  createTextOverlay,
  createTextOverlayWithSettings,
  removeTextOverlay,
  isTextOverlayActive,
  getLayoutSettings,
  type TextOverlayContent,
  type TextLayoutSettings,
} from './text-overlay';
