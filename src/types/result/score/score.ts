/**
 * An optional property that represents the outcome of a graded Activity achieved by an Agent
 */
export interface Score {
  /**
   * The score related to the experience as modified by scaling and/or normalization.
   *
   * Decimal number between -1 and 1, inclusive
   */
  scaled?: number;

  /**
   * The score achieved by the Actor in the experience described by the Statement. This is not modified by any scaling or normalization.
   *
   * Decimal number between min and max (if present, otherwise unrestricted), inclusive
   */
  raw?: number;

  /**
   * The lowest possible score for the experience described by the Statement.
   *
   * Decimal number less than max (if present)
   */
  min?: number;

  /**
   * The highest possible score for the experience described by the Statement.
   *
   * Decimal number greater than min (if present)
   */
  max?: number;
}
