/**
 * Renderer Module for CalmWeb
 *
 * Provides UI rendering for content decisions:
 * - Collapse: Placeholder with expand option
 * - Neutralize: Text replacement with indicator
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
