/**
 * Version information in Statements helps Learning Record Consumers get their bearings. Since the Statement data model is guaranteed
 * consistent through all 1.0.x versions, in order to support data flow among such LRSs, the LRS is given some flexibility on Statement
 * versions that are accepted.
 */
export type Version = string;
