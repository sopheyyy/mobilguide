import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, COLORS, GuideCard, PrimaryButton, SectionTitle, Screen } from "@/components/app-ui";
import { SearchField } from "@/components/SearchField";
import { useAppPreferences } from "@/lib/app-context";
import { CATEGORIES, GUIDES } from "@/lib/mobile-guides";

const BRAND_ART = "/manus-storage/async-images/gjqUTySbi4fN4f9iUXLuw2/image-1.webp";

export default function HomeScreen() {
  const router = useRouter();
  const { phoneType, setPhoneType, favorites, toggleFavorite } = useAppPreferences();
  const [query, setQuery] = useState("");

  function searchNow() {
    router.push({ pathname: "/(tabs)/guides", params: query.trim() ? { q: query.trim() } : {} });
  }

  function chooseCategory(category: string) {
    router.push({ pathname: "/(tabs)/guides", params: { category } });
  }

  return (
    <Screen>
      <View style={styles.brandRow}>
        <View style={styles.brandMark} accessibilityLabel="Guideo-symbol">
          <MaterialIcons name="menu-book" size={26} color={COLORS.white} />
          <View style={styles.brandDot} />
        </View>
        <View style={styles.brandWordmark}>
          <AppText size={20} weight="bold" color={COLORS.navy}>Guideo</AppText>
          <AppText size={13} color={COLORS.secondaryText}>Hjælp til mobilen, ét skridt ad gangen</AppText>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.heroCopy}>
          <AppText size={13} weight="bold" color="#D8E8F0">DIN MOBIL. DIN VEJVISER.</AppText>
          <AppText size={29} weight="bold" color={COLORS.white} style={styles.heroTitle}>Det er nemmere, end du tror.</AppText>
          <AppText size={16} color="#F0F6F8">Rolige forklaringer, der viser præcis, hvad du skal gøre.</AppText>
          <PrimaryButton label="Find en guide" icon="arrow-forward" onPress={() => router.push("/(tabs)/guides")} style={styles.heroButton} />
        </View>
        {Platform.OS === "web" ? (
          <Image source={{ uri: BRAND_ART }} contentFit="contain" cachePolicy="none" style={styles.brandArt} accessibilityLabel="Illustration til Guideo" />
        ) : (
          <View style={styles.heroMark} accessibilityElementsHidden>
            <MaterialIcons name="phone-iphone" size={62} color={COLORS.white} />
            <View style={styles.heroCheck}><MaterialIcons name="check" size={20} color={COLORS.navy} /></View>
          </View>
        )}
      </View>

      <View style={styles.searchSection}>
        <AppText size={20} weight="bold">Hvad vil du gerne lære?</AppText>
        <SearchField value={query} onChangeText={setQuery} onSubmit={searchNow} placeholder="Fx sende et billede" />
      </View>

      <View style={styles.phoneSection}>
        <View style={styles.phoneHeading}>
          <View style={styles.phoneQuestion}>
            <AppText size={19} weight="bold">Hvilken mobil har du?</AppText>
            <AppText size={15} color={COLORS.secondaryText}>Så viser vi de rigtige trin.</AppText>
          </View>
          {phoneType !== "unknown" ? <View style={styles.selectedTag}><MaterialIcons name="check-circle" size={16} color={COLORS.teal} /><AppText size={13} weight="bold" color={COLORS.teal}>Valgt</AppText></View> : null}
        </View>
        <View style={styles.phoneChoices}>
          <TouchableOpacity accessibilityRole="button" accessibilityState={{ selected: phoneType === "iphone" }} onPress={() => setPhoneType("iphone")} activeOpacity={0.78} style={[styles.phoneChoice, phoneType === "iphone" && styles.phoneChoiceSelected]}>
            <MaterialIcons name="phone-iphone" size={25} color={COLORS.navy} />
            <AppText size={17} weight="bold" color={COLORS.navy}>iPhone</AppText>
            {phoneType === "iphone" ? <MaterialIcons name="check-circle" size={19} color={COLORS.teal} /> : null}
          </TouchableOpacity>
          <TouchableOpacity accessibilityRole="button" accessibilityState={{ selected: phoneType === "android" }} onPress={() => setPhoneType("android")} activeOpacity={0.78} style={[styles.phoneChoice, phoneType === "android" && styles.phoneChoiceSelected]}>
            <MaterialIcons name="android" size={25} color={COLORS.navy} />
            <AppText size={17} weight="bold" color={COLORS.navy}>Android</AppText>
            {phoneType === "android" ? <MaterialIcons name="check-circle" size={19} color={COLORS.teal} /> : null}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Vælg et emne" action="Alle guides" onAction={() => router.push("/(tabs)/guides")} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroller}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity key={category.id} accessibilityRole="button" onPress={() => chooseCategory(category.id)} activeOpacity={0.8} style={styles.categoryCard}>
              <View style={styles.categoryIcon}><MaterialIcons name={category.icon} size={25} color={COLORS.navy} /></View>
              <AppText size={15} weight="semiBold" color={COLORS.navy}>{category.title}</AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <SectionTitle title="Gode steder at begynde" action="Se alle" onAction={() => router.push("/(tabs)/guides")} />
        <View style={styles.guideList}>
          {GUIDES.slice(0, 3).map((guide) => (
            <GuideCard key={guide.id} guide={guide} favorite={favorites.includes(guide.id)} onFavorite={() => toggleFavorite(guide.id)} onPress={() => router.push(`/guide/${guide.id}`)} />
          ))}
        </View>
      </View>

      <TouchableOpacity accessibilityRole="button" onPress={() => router.push("/(tabs)/help")} style={styles.helpCard} activeOpacity={0.8}>
        <View style={styles.helpIcon}><MaterialIcons name="help-outline" size={25} color={COLORS.navy} /></View>
        <View style={{ flex: 1 }}><AppText size={17} weight="bold">Brug for en hånd?</AppText><AppText size={14} color={COLORS.secondaryText}>Se, hvordan Guideo virker.</AppText></View>
        <MaterialIcons name="chevron-right" size={25} color={COLORS.muted} />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brandRow: { minHeight: 55, flexDirection: "row", alignItems: "center", gap: 12 },
  brandMark: { width: 48, height: 48, borderRadius: 14, backgroundColor: COLORS.navy, alignItems: "center", justifyContent: "center", overflow: "hidden" },
  brandDot: { position: "absolute", width: 7, height: 7, borderRadius: 4, backgroundColor: COLORS.gold, top: 7, right: 8 },
  brandWordmark: { gap: 0 },
  hero: { minHeight: 220, backgroundColor: COLORS.navy, borderRadius: 24, padding: 22, overflow: "hidden", flexDirection: "row", gap: 8 },
  heroCopy: { flex: 1, alignItems: "flex-start", justifyContent: "center", gap: 9, zIndex: 1 },
  heroTitle: { lineHeight: 34, maxWidth: 245 },
  heroButton: { minHeight: 48, marginTop: 4, paddingHorizontal: 17, borderRadius: 14, backgroundColor: COLORS.teal, alignSelf: "flex-start" },
  heroMark: { width: 74, alignItems: "center", justifyContent: "center", opacity: 0.95 },
  heroCheck: { position: "absolute", top: 58, right: -1, width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.gold, alignItems: "center", justifyContent: "center" },
  brandArt: { width: 112, height: 145, alignSelf: "center", marginRight: -4 },
  searchSection: { gap: 10 },
  phoneSection: { gap: 13, padding: 17, backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 1, borderColor: COLORS.borderSoft },
  phoneHeading: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 },
  phoneQuestion: { flex: 1, gap: 2 },
  selectedTag: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "#E7F3F1", borderRadius: 15, paddingVertical: 5, paddingHorizontal: 9 },
  phoneChoices: { flexDirection: "row", gap: 10 },
  phoneChoice: { flex: 1, minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 7, borderRadius: 15, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.canvas, paddingHorizontal: 8 },
  phoneChoiceSelected: { borderColor: COLORS.navy, backgroundColor: COLORS.ice },
  section: { gap: 13 },
  categoryScroller: { gap: 11, paddingBottom: 3, paddingRight: 12 },
  categoryCard: { width: 110, minHeight: 103, padding: 13, borderRadius: 17, borderWidth: 1, borderColor: COLORS.borderSoft, backgroundColor: COLORS.white, justifyContent: "space-between" },
  categoryIcon: { width: 40, height: 40, borderRadius: 13, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  guideList: { gap: 11 },
  helpCard: { minHeight: 80, padding: 13, gap: 12, flexDirection: "row", alignItems: "center", borderRadius: 18, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.ice },
  helpIcon: { width: 46, height: 46, borderRadius: 15, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" },
});
