import { useRouter, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, CategoryChip, EmptyState, GuideCard, PageHeader, Screen } from "@/components/app-ui";
import { SearchField } from "@/components/SearchField";
import { useAppPreferences } from "@/lib/app-context";
import { CATEGORIES, searchGuides, type GuideCategoryId } from "@/lib/mobile-guides";

export default function GuidesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ q?: string; category?: string }>();
  const { favorites, toggleFavorite } = useAppPreferences();
  const [pagination, setPagination] = useState({ key: "", limit: 30 });
  const query = typeof params.q === "string" ? params.q : "";
  const category: GuideCategoryId | "all" =
    CATEGORIES.some((item) => item.id === params.category) ? params.category as GuideCategoryId : "all";
  const filterKey = `${query}\u0000${category}`;
  const visibleLimit = pagination.key === filterKey ? pagination.limit : 30;

  const matches = useMemo(() => {
    const searched = searchGuides(query);
    return category === "all" ? searched : searched.filter((guide) => guide.category === category);
  }, [query, category]);

  return (
    <Screen>
      <PageHeader eyebrow="OVERSIGT" title="Find en guide" subtitle="Søg, eller vælg et emne, du vil have hjælp til." />
      <SearchField value={query} onChangeText={(q) => router.setParams({ q })} placeholder="Fx ringe, Wi-Fi eller billeder" />
      <View style={styles.chipList}>
        <CategoryChip title="Alle emner" icon="apps" selected={category === "all"} onPress={() => router.setParams({ category: "" })} />
        {CATEGORIES.map((item) => (
          <CategoryChip key={item.id} title={item.title} icon={item.icon} selected={category === item.id} onPress={() => router.setParams({ category: item.id })} />
        ))}
      </View>
      <View style={styles.listHeading}>
        <AppText size={19} weight="bold">{matches.length} vejledninger</AppText>
        <AppText size={14} color="#496274">Korte forklaringer. Ét skridt ad gangen.</AppText>
      </View>
      <View style={styles.guideList}>
        {matches.slice(0, visibleLimit).map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            favorite={favorites.includes(guide.id)}
            onFavorite={() => toggleFavorite(guide.id)}
            onPress={() => router.push(`/guide/${guide.id}`)}
          />
        ))}
      </View>
      {matches.length > visibleLimit ? (
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => setPagination({ key: filterKey, limit: visibleLimit + 30 })}
          activeOpacity={0.8}
          style={styles.moreButton}
        >
          <AppText size={16} weight="bold" color="#173F5F">Vis {Math.min(30, matches.length - visibleLimit)} flere guides</AppText>
        </TouchableOpacity>
      ) : null}
      {matches.length === 0 ? (
        <EmptyState
          icon="search-off"
          title="Vi fandt ikke den guide"
          message="Prøv et andet ord, for eksempel besked, foto eller internet."
          action="Vis alle vejledninger"
          onAction={() => { router.setParams({ q: "", category: "" }); }}
        />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  chipList: { flexDirection: "row", flexWrap: "wrap", gap: 9 },
  listHeading: { gap: 3 },
  guideList: { gap: 11 },
  moreButton: { minHeight: 56, alignItems: "center", justifyContent: "center", borderRadius: 16, borderWidth: 2, borderColor: "#CADAE4", backgroundColor: "#FFFFFF" },
});
