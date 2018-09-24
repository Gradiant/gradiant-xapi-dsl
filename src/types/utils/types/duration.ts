/**
 * Durations are strings representing the amount of time something took.
 * - A Duration MUST be expressed using the format for Duration in ISO 8601:2004(E) section 4.4.3.2. The alternative format (in
 *   conformity with the format used for time points and described in ISO 8601:2004(E) section 4.4.3.3) MUST NOT be used.
 * - Learning Record Providers SHOULD provide a maximum precision of 0.01 seconds.
 * - Learning Record Providers MAY provide less precision, for example in the case of reading a University Degree precision might be in
 *   months or years.
 * - On receiving a Duration with more than 0.01 second precision, the LRS SHOULD* NOT reject the request but MAY truncate the
 *   "duration" property to 0.01 second precision.
 * - When comparing Durations, any precision beyond 0.01 second precision SHOULD* NOT be included in the comparison.
 *
 * | Example              | Explanation
 * | PT4H35M59.14S        | Four hours, thirty five minutes and 59.14 seconds.
 * | P16559.14S           | The same time period as above represented in seconds. (Note: if the time period in question contained a leap
 *                          second,this conversion would be inaccurate)
 * | P3Y1M29DT4H35M59.14S | A Duration also including years, months and days.
 * | P3Y                  | Approximately three years e.g. completion of a qualification.
 * | P4W                  | Four weeks. Note that weeks cannot be combined with other time periods. 'P4W1D' is not valid.
 */
export type Duration = string;
