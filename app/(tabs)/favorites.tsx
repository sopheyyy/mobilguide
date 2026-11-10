import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, EmptyState, GuideCard, PageHeader, Screen } from "@/components/app-ui";
import { useAppPreferences } from "@/lib/app-context";
import { GUIDES } from "@/lib/mobile-guides";

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useAppPreferences();
  const [visibleLimit, setVisibleLimit] = useState(30);
  const saved = GUIDES.filter((guide) => favorites.includes(guide.id));

  return (
    <Screen>
      <PageHeader eyebrow="DINE GEMTE GUIDES" title="Favoritter" subtitle="Dine vigtigste vejledninger er samlet lige her." />
      {saved.length > 0 ? (
        <View style={styles.list}>
          {saved.slice(0, visibleLimit).map((guide) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              favorite
              onFavorite={() => toggleFavorite(guide.id)}
              onPress={() => router.push(`/guide/${guide.id}`)}
            />
          ))}
          {saved.length > visibleLimit ? (
            <TouchableOpacity accessibilityRole="button" onPress={() => setVisibleLimit((limit) => limit + 30)} activeOpacity={0.8} style={styles.moreButton}>
              <AppText size={16} weight="bold" color="#173F5F">Vis {Math.min(30, saved.length - visibleLimit)} flere favoritter</AppText>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : (
        <EmptyState
          icon="bookmark-border"
          title="Ingen favoritter endnu"
          message="Tryk på bogmærket ved en guide, du gerne vil kunne finde hurtigt igen."
          action="Find en guide"
          onAction={() => router.push("/(tabs)/guides")}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { gap: 11 },
  moreButton: { minHeight: 56, alignItems: "center", justifyContent: "center", borderRadius: 16, borderWidth: 2, borderColor: "#CADAE4", backgroundColor: "#FFFFFF" },
});
