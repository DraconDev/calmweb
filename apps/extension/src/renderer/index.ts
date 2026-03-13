/**
 * Renderer Module for CalmWeb
 * 
 * Provides UI rendering for content decisions:
 * - Collapse: Placeholder with expand option
 * - Neutralize: Text replacement with indicator
 * - Blur: Overlay with hover reveal
 */

export {
  createCollapsePlaceholder,
  createCollapseStyles,
  isCollapsed,
  getCollapseInfo,
  type CollapseOptions,
} from './collapse';

export { createNeutralizeIndicator, createNeutralizeStyles, type NeutralizeOptions } from './neutralize';