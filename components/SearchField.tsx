import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { StyleSheet, TextInput, View, type TextInputProps } from "react-native";

import { AppText, COLORS } from "@/components/app-ui";

export function SearchField({
  value,
  onChangeText,
  onSubmit,
  placeholder = "Søg efter en funktion eller et problem",
}: {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const inputProps: TextInputProps = {
    value,
    onChangeText,
    placeholder,
    placeholderTextColor: COLORS.muted,
    accessibilityLabel: "Søg i vejledninger",
    returnKeyType: "search",
    onSubmitEditing: onSubmit,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: styles.input,
  };
  return (
    <View style={[styles.container, focused && styles.focused]}>
      <MaterialIcons name="search" size={25} color={COLORS.navy} />
      <TextInput {...inputProps} />
      {value.length > 0 ? (
        <AppText accessibilityRole="button" onPress={() => onChangeText("")} size={20} weight="bold" color={COLORS.navy} style={styles.clear}>
          ×
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { minHeight: 60, paddingHorizontal: 15, flexDirection: "row", alignItems: "center", gap: 11, backgroundColor: COLORS.white, borderWidth: 1.5, borderColor: COLORS.border, borderRadius: 16 },
  focused: { borderColor: COLORS.navy, borderWidth: 2 },
  input: { flex: 1, minWidth: 0, minHeight: 54, padding: 0, fontFamily: "IBMPlexSans_400Regular", fontSize: 16, color: COLORS.ink },
  clear: { paddingHorizontal: 5, paddingVertical: 4 },
});
