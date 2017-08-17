/**
 * This serves as the common definition accross all modules
 */
export class CoreDefinition {
  public static DESKTOP_SIZE = 970;

  /** RegEx Patterns */
  public static REGEX_EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  public static REGEX_IP_PATTERN = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/;
  public static REGEX_ALPHANUMERIC_PATTERN = /^[a-zA-Z0-9]+$/;
  public static REGEX_NUMERIC_PATTERN = /^[\d]+$/;
}
