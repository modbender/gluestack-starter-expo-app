/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "@/hooks/useColorScheme";

import { Colors } from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "dark";
  const colorFromProps = props[theme.colorScheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme.colorScheme][colorName];
  }
}
