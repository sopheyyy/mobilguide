import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMemo } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ScrollViewProps,
  type StyleProp,
  type TextProps,
  type ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppPreferences } from "@/lib/app-context";
import type { GuideCategoryId, MaterialIconName, MobileGuide } from "@/lib/mobile-guides";

export const COLORS = {
  navy: "#173F5F",
  ice: "#E8F1F5",
  canvas: "#F7FAFC",
  white: "#FFFFFF",
  ink: "#132E40",
  secondaryText: "#496274",
  muted: "#607786",
  border: "#CADAE4",
  borderSoft: "#DDE7ED",
  teal: "#17695F",
  paleTeal: "#E7F3F1",
  gold: "#E4B644",
  paleGold: "#FFF4D8",
  red: "#9C372D",
  paleRed: "#FAE8E6",
};

const FONT_FAMILY: Record<"regular" | "medium" | "semiBold" | "bold", string> = {
  regular: "IBMPlexSans_400Regular",
  medium: "IBMPlexSans_500Medium",
  semiBold: "IBMPlexSans_600SemiBold",
  bold: "IBMPlexSans_700Bold",
};

export function AppText({
  children,
  size = 16,
  weight = "regular",
  color = COLORS.ink,
  style,
  ...props
}: TextProps & {
  size?: number;
  weight?: "regular" | "medium" | "semiBold" | "bold";
  color?: string;
}) {
  const { textSize } = useAppPreferences();
  const compact = size < 12;
  const effectiveSize = compact ? Math.max(size, 9) : size;
  const scale = textSize === 2 ? (compact ? 1.6 : 1.28) : textSize === 1 ? (compact ? 1.25 : 1.13) : 1;
  const styles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          color,
          fontFamily: FONT_FAMILY[weight],
          fontSize: effectiveSize * scale,
          lineHeight: effectiveSize * scale * 1.34,
        },
        style,
      ]),
    [color, effectiveSize, scale, style, weight],
  );
  return (
    <Text allowFontScaling {...props} style={styles}>
      {children}
    </Text>
  );
}

export function Screen({ children, style, ...props }: ScrollViewProps) {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={[styles.safe, style]}>
      <ScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerCopy}>
        {eyebrow ? <AppText size={13} weight="bold" color={COLORS.teal}>{eyebrow}</AppText> : null}
        <AppText size={30} weight="bold" style={styles.pageTitle}>{title}</AppText>
        {subtitle ? <AppText size={16} color={COLORS.secondaryText}>{subtitle}</AppText> : null}
      </View>
      {right}
    </View>
  );
}

export function PrimaryButton({
  label,
  onPress,
  icon,
  accessibilityLabel,
  disabled = false,
  style,
}: {
  label: string;
  onPress: () => void;
  icon?: MaterialIconName;
  accessibilityLabel?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.78}
      style={[styles.primaryButton, disabled && styles.disabledButton, style]}
    >
      {icon ? <MaterialIcons name={icon} size={22} color={COLORS.white} /> : null}
      <AppText size={17} weight="bold" color={COLORS.white}>{label}</AppText>
    </TouchableOpacity>
  );
}

export function OutlineButton({
  label,
  onPress,
  icon,
  selected = false,
  style,
}: {
  label: string;
  onPress: () => void;
  icon?: MaterialIconName;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      activeOpacity={0.78}
      style={[styles.outlineButton, selected && styles.outlineSelected, style]}
    >
      {icon ? <MaterialIcons name={icon} size={22} color={selected ? COLORS.navy : COLORS.secondaryText} /> : null}
      <AppText size={16} weight={selected ? "bold" : "medium"} color={selected ? COLORS.navy : COLORS.ink}>{label}</AppText>
    </TouchableOpacity>
  );
}

export function IconButton({
  icon,
  onPress,
  label,
  active = false,
  size = 48,
}: {
  icon: MaterialIconName;
  onPress: () => void;
  label: string;
  active?: boolean;
  size?: number;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: active }}
      onPress={onPress}
      activeOpacity={0.75}
      style={[styles.iconButton, { width: size, height: size, borderRadius: size / 2 }, active && styles.iconButtonActive]}
    >
      <MaterialIcons name={icon} size={24} color={active ? COLORS.navy : COLORS.secondaryText} />
    </TouchableOpacity>
  );
}

export function SectionTitle({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  return (
    <View style={styles.sectionTitle}>
      <AppText size={21} weight="bold">{title}</AppText>
      {action && onAction ? (
        <Pressable accessibilityRole="button" onPress={onAction} hitSlop={8}>
          <AppText size={15} weight="bold" color={COLORS.navy}>{action}</AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

export function CategoryChip({
  title,
  icon,
  selected = false,
  onPress,
}: {
  title: string;
  icon: MaterialIconName;
  selected?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      activeOpacity={0.78}
      style={[styles.categoryChip, selected && styles.categoryChipSelected]}
    >
      <MaterialIcons name={icon} size={19} color={selected ? COLORS.white : COLORS.navy} />
      <AppText size={15} weight="semiBold" color={selected ? COLORS.white : COLORS.navy}>{title}</AppText>
    </TouchableOpacity>
  );
}

export function CategoryRow({
  title,
  icon,
  description,
  onPress,
}: {
  title: string;
  icon: MaterialIconName;
  description: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} activeOpacity={0.78} style={styles.categoryRow}>
      <View style={styles.categoryIcon}>
        <MaterialIcons name={icon} size={26} color={COLORS.navy} />
      </View>
      <View style={styles.categoryRowText}>
        <AppText size={18} weight="bold">{title}</AppText>
        <AppText size={14} color={COLORS.secondaryText}>{description}</AppText>
      </View>
      <MaterialIcons name="chevron-right" size={26} color={COLORS.muted} />
    </TouchableOpacity>
  );
}

export function GuideCard({ guide, onPress, favorite = false, onFavorite }: {
  guide: MobileGuide;
  onPress: () => void;
  favorite?: boolean;
  onFavorite?: () => void;
}) {
  return (
    <View style={styles.guideCard}>
      <TouchableOpacity accessibilityRole="button" onPress={onPress} activeOpacity={0.78} style={styles.guideMain}>
        <View style={styles.guideIcon}>
          <MaterialIcons name={guide.icon} size={24} color={COLORS.navy} />
        </View>
        <View style={styles.guideCopy}>
          <AppText size={18} weight="bold" numberOfLines={2}>{guide.title}</AppText>
          <AppText size={14} color={COLORS.secondaryText} numberOfLines={2}>{guide.summary}</AppText>
          <AppText size={13} color={COLORS.muted}>{guide.minutes} min. · {guide.steps.iphone.length} trin</AppText>
        </View>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.muted} />
      </TouchableOpacity>
      {onFavorite ? (
        <IconButton
          icon={favorite ? "bookmark" : "bookmark-border"}
          label={favorite ? "Fjern fra favoritter" : "Gem som favorit"}
          onPress={onFavorite}
          active={favorite}
          size={46}
        />
      ) : null}
    </View>
  );
}

export function PreferenceTag({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} style={styles.preferenceTag} activeOpacity={0.8}>
      <MaterialIcons name="phone-iphone" size={17} color={COLORS.navy} />
      <AppText size={14} weight="semiBold" color={COLORS.navy}>{label}</AppText>
      <MaterialIcons name="expand-more" size={19} color={COLORS.navy} />
    </TouchableOpacity>
  );
}

export function EmptyState({
  icon,
  title,
  message,
  action,
  onAction,
}: {
  icon: MaterialIconName;
  title: string;
  message: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.emptyState}>
      <View style={styles.emptyIcon}><MaterialIcons name={icon} size={36} color={COLORS.navy} /></View>
      <AppText size={21} weight="bold" style={{ textAlign: "center" }}>{title}</AppText>
      <AppText size={16} color={COLORS.secondaryText} style={{ textAlign: "center" }}>{message}</AppText>
      {action && onAction ? <PrimaryButton label={action} onPress={onAction} style={styles.emptyAction} /> : null}
    </View>
  );
}

export function categoryTitle(id: GuideCategoryId): string {
  const labels: Record<GuideCategoryId, string> = {
    opkald: "Opkald",
    beskeder: "Beskeder",
    billeder: "Billeder",
    internet: "Internet",
    apps: "Apps",
    sikkerhed: "Sikkerhed",
    indstillinger: "Indstillinger",
  };
  return labels[id];
}

export function guideHref(id: string): `/guide/${string}` {
  return `/guide/${id}`;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.canvas },
  page: { paddingHorizontal: 22, paddingTop: 14, paddingBottom: 34, gap: 22 },
  header: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 12 },
  headerCopy: { flex: 1, gap: 5 },
  pageTitle: { letterSpacing: -0.5 },
  primaryButton: { minHeight: 58, paddingHorizontal: 20, paddingVertical: 14, backgroundColor: COLORS.navy, borderRadius: 16, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 10 },
  disabledButton: { opacity: 0.5 },
  outlineButton: { minHeight: 56, flexGrow: 1, paddingHorizontal: 18, borderRadius: 16, borderWidth: 2, borderColor: COLORS.border, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 9 },
  outlineSelected: { borderColor: COLORS.navy, backgroundColor: COLORS.ice },
  iconButton: { alignItems: "center", justifyContent: "center", backgroundColor: COLORS.canvas, borderWidth: 1, borderColor: COLORS.borderSoft },
  iconButtonActive: { backgroundColor: COLORS.ice, borderColor: COLORS.navy },
  sectionTitle: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 },
  categoryChip: { minHeight: 48, flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: COLORS.white, borderColor: COLORS.border, borderWidth: 1, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 10 },
  categoryChipSelected: { backgroundColor: COLORS.navy, borderColor: COLORS.navy },
  categoryRow: { minHeight: 84, paddingHorizontal: 14, paddingVertical: 12, borderRadius: 18, backgroundColor: COLORS.white, borderColor: COLORS.borderSoft, borderWidth: 1, flexDirection: "row", alignItems: "center", gap: 14 },
  categoryIcon: { width: 52, height: 52, borderRadius: 16, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  categoryRowText: { flex: 1, gap: 1 },
  guideCard: { minHeight: 112, padding: 14, backgroundColor: COLORS.white, borderRadius: 18, borderColor: COLORS.borderSoft, borderWidth: 1, flexDirection: "row", alignItems: "center", gap: 12 },
  guideMain: { flex: 1, minHeight: 78, flexDirection: "row", alignItems: "center", gap: 12 },
  guideIcon: { width: 48, height: 48, borderRadius: 15, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  guideCopy: { flex: 1, gap: 2 },
  preferenceTag: { minHeight: 44, paddingHorizontal: 12, flexDirection: "row", alignItems: "center", gap: 5, borderRadius: 22, borderColor: COLORS.border, borderWidth: 1, backgroundColor: COLORS.white },
  emptyState: { alignItems: "center", gap: 12, paddingHorizontal: 14, paddingVertical: 35, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.borderSoft, borderRadius: 20 },
  emptyIcon: { width: 68, height: 68, borderRadius: 34, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  emptyAction: { alignSelf: "stretch", marginTop: 8 },
});
