import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, COLORS, PageHeader, PrimaryButton, Screen } from "@/components/app-ui";
import { useAppPreferences, type TextSize } from "@/lib/app-context";
import { GUIDES, type PhoneType } from "@/lib/mobile-guides";

const TEXT_OPTIONS: { value: TextSize; label: string; preview: string }[] = [
  { value: 0, label: "Almindelig", preview: "Aa" },
  { value: 1, label: "Større", preview: "Aa" },
  { value: 2, label: "Størst", preview: "Aa" },
];

export default function HelpScreen() {
  const { phoneType, setPhoneType, textSize, setTextSize, resetPreferences } = useAppPreferences();
  const [confirmReset, setConfirmReset] = useState(false);
  const phoneLabel = phoneType === "iphone" ? "iPhone" : phoneType === "android" ? "Android" : "Ikke valgt endnu";

  return (
    <Screen>
      <PageHeader eyebrow="GODT AT VIDE" title="Hjælp" subtitle="Guideo tager det i dit tempo." />

      <View style={styles.explainerCard}>
        <View style={styles.helpIcon}><MaterialIcons name="menu-book" size={29} color={COLORS.navy} /></View>
        <AppText size={20} weight="bold">Sådan bruger du appen</AppText>
        <AppText size={16} color={COLORS.secondaryText}>Vælg et emne eller søg efter det, du vil gøre. Følg så ét trin ad gangen. Tryk på “Næste trin”, når du er klar. Du kan altid gå tilbage.</AppText>
        <AppText size={15} color={COLORS.secondaryText}>Du kan søge blandt {GUIDES.length} trin-for-trin-guider og gemme dem, du bruger ofte.</AppText>
        <AppText size={15} color={COLORS.secondaryText}>Telefoner kan se lidt forskellige ud. Hvis du ikke kan finde det nævnte sted, så gå tilbage eller spørg en, du stoler på. Du behøver ikke gætte eller trykke, hvis du er i tvivl.</AppText>
        <View style={styles.tipRow}><View style={styles.number}><AppText size={15} weight="bold" color={COLORS.white}>1</AppText></View><AppText size={15} color={COLORS.secondaryText}>Vælg en guide, der passer til dig.</AppText></View>
        <View style={styles.tipRow}><View style={styles.number}><AppText size={15} weight="bold" color={COLORS.white}>2</AppText></View><AppText size={15} color={COLORS.secondaryText}>Læs og følg et enkelt trin ad gangen.</AppText></View>
        <View style={styles.tipRow}><View style={styles.number}><AppText size={15} weight="bold" color={COLORS.white}>3</AppText></View><AppText size={15} color={COLORS.secondaryText}>Gem et bogmærke, hvis du vil finde guiden igen.</AppText></View>
      </View>

      <View style={styles.settingCard}>
        <View style={styles.settingHeader}>
          <View style={styles.settingIcon}><MaterialIcons name="format-size" size={23} color={COLORS.navy} /></View>
          <View style={{ flex: 1 }}><AppText size={19} weight="bold">Tekststørrelse</AppText><AppText size={14} color={COLORS.secondaryText}>Vælg den tekst, der er lettest at læse.</AppText></View>
        </View>
        <View style={styles.textChoices}>
          {TEXT_OPTIONS.map((option) => (
            <TouchableOpacity key={option.value} accessibilityRole="button" accessibilityState={{ selected: textSize === option.value }} onPress={() => setTextSize(option.value)} style={[styles.textChoice, textSize === option.value && styles.textChoiceSelected]}>
              <AppText size={option.value === 0 ? 17 : option.value === 1 ? 21 : 26} weight="bold" color={COLORS.navy}>{option.preview}</AppText>
              <AppText size={13} weight="semiBold" color={COLORS.navy}>{option.label}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.settingCard}>
        <View style={styles.settingHeader}>
          <View style={styles.settingIcon}><MaterialIcons name="phone-iphone" size={22} color={COLORS.navy} /></View>
          <View style={{ flex: 1 }}><AppText size={19} weight="bold">Din mobil</AppText><AppText size={14} color={COLORS.secondaryText}>Du bruger: {phoneLabel}</AppText></View>
        </View>
        <View style={styles.phoneChoices}>
          <ChoiceButton label="iPhone" icon="phone-iphone" value="iphone" selected={phoneType} onSelect={setPhoneType} />
          <ChoiceButton label="Android" icon="android" value="android" selected={phoneType} onSelect={setPhoneType} />
        </View>
      </View>

      <View style={styles.resetCard}>
        <AppText size={18} weight="bold">Start forfra</AppText>
        <AppText size={15} color={COLORS.secondaryText}>Nulstil valg af mobil, tekststørrelse og dine gemte favoritter.</AppText>
        <TouchableOpacity accessibilityRole="button" onPress={() => setConfirmReset(true)} style={styles.resetButton} activeOpacity={0.75}>
          <MaterialIcons name="restart-alt" size={21} color={COLORS.red} />
          <AppText size={16} weight="bold" color={COLORS.red}>Nulstil appen</AppText>
        </TouchableOpacity>
      </View>

      <Modal visible={confirmReset} transparent animationType="fade" onRequestClose={() => setConfirmReset(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalIcon}><MaterialIcons name="restart-alt" size={29} color={COLORS.navy} /></View>
            <AppText size={21} weight="bold" style={{ textAlign: "center" }}>Vil du starte forfra?</AppText>
            <AppText size={16} color={COLORS.secondaryText} style={{ textAlign: "center" }}>Dine favoritter, tekststørrelse og valg af mobil bliver nulstillet.</AppText>
            <PrimaryButton label="Ja, start forfra" onPress={() => { resetPreferences(); setConfirmReset(false); }} icon="restart-alt" />
            <TouchableOpacity accessibilityRole="button" onPress={() => setConfirmReset(false)} style={styles.cancelButton}>
              <AppText size={16} weight="bold" color={COLORS.navy}>Behold mine valg</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

function ChoiceButton({
  label, icon, value, selected, onSelect,
}: {
  label: string;
  icon: "phone-iphone" | "android";
  value: Exclude<PhoneType, "unknown">;
  selected: PhoneType;
  onSelect: (phoneType: PhoneType) => void;
}) {
  return (
    <TouchableOpacity accessibilityRole="button" accessibilityState={{ selected: selected === value }} onPress={() => onSelect(value)} style={[styles.phoneChoice, selected === value && styles.phoneChoiceSelected]}>
      <MaterialIcons name={icon} size={23} color={COLORS.navy} />
      <AppText size={16} weight="bold" color={COLORS.navy}>{label}</AppText>
      {selected === value ? <MaterialIcons name="check-circle" size={17} color={COLORS.teal} /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  explainerCard: { padding: 18, gap: 11, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.borderSoft, borderRadius: 20 },
  helpIcon: { width: 54, height: 54, borderRadius: 17, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  tipRow: { minHeight: 37, flexDirection: "row", alignItems: "center", gap: 10 },
  number: { width: 28, height: 28, borderRadius: 14, backgroundColor: COLORS.navy, alignItems: "center", justifyContent: "center" },
  settingCard: { padding: 17, gap: 14, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.borderSoft, borderRadius: 20 },
  settingHeader: { flexDirection: "row", alignItems: "center", gap: 12 },
  settingIcon: { width: 46, height: 46, borderRadius: 15, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  textChoices: { flexDirection: "row", gap: 9 },
  textChoice: { flex: 1, minHeight: 76, paddingVertical: 8, alignItems: "center", justifyContent: "center", gap: 3, borderRadius: 13, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.canvas },
  textChoiceSelected: { borderColor: COLORS.navy, backgroundColor: COLORS.ice },
  phoneChoices: { flexDirection: "row", gap: 9 },
  phoneChoice: { flex: 1, minHeight: 54, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 7, borderRadius: 14, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.canvas },
  phoneChoiceSelected: { borderColor: COLORS.navy, backgroundColor: COLORS.ice },
  resetCard: { padding: 18, gap: 10, backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 1, borderColor: COLORS.borderSoft },
  resetButton: { minHeight: 53, paddingHorizontal: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, borderRadius: 14, borderWidth: 1.5, borderColor: "#E5C9C5", backgroundColor: COLORS.paleRed },
  modalBackdrop: { flex: 1, padding: 23, backgroundColor: "rgba(14, 35, 48, 0.48)", alignItems: "center", justifyContent: "center" },
  modalCard: { width: "100%", maxWidth: 420, padding: 23, gap: 15, backgroundColor: COLORS.white, borderRadius: 22, alignItems: "stretch" },
  modalIcon: { width: 58, height: 58, alignSelf: "center", borderRadius: 29, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  cancelButton: { minHeight: 51, alignItems: "center", justifyContent: "center", borderRadius: 14, backgroundColor: COLORS.ice },
});
