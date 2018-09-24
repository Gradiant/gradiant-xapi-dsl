/**
 * Internationalized Resource Identifiers, or IRIs, are unique identifiers which could also be resolvable.
 * Because resolving is not a requirement, IRIs/URIs are used instead of IRLs/URLs. In order to allow the greatest flexibility in the
 * characters used in an identifier, IRIs are used instead of URIs as IRIs can contain some characters outside of the ASCII character set
 */
export type IRI = string;
