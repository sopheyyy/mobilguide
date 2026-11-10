import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import { Modal, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { AppText, COLORS, EmptyState, IconButton, PrimaryButton } from "@/components/app-ui";
import { GuideIllustration } from "@/components/GuideIllustration";
import { useAppPreferences } from "@/lib/app-context";
import { CATEGORIES, getGuide, getGuideStepsWithPractice } from "@/lib/mobile-guides";

export default function GuideDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const guide = getGuide(Array.isArray(id) ? id[0] : id);
  const { phoneType, setPhoneType, favorites, toggleFavorite } = useAppPreferences();
  const [stepIndex, setStepIndex] = useState(0);
  const [showPhonePicker, setShowPhonePicker] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const phonePickerOpen = phoneType === "unknown" || showPhonePicker;

  const category = useMemo(() => CATEGORIES.find((item) => item.id === guide?.category), [guide?.category]);
  const platform = phoneType === "android" ? "android" : "iphone";
  const steps = guide ? getGuideStepsWithPractice(guide, platform) : [];
  const safeStepIndex = steps.length > 0 ? Math.min(stepIndex, steps.length - 1) : 0;
  const currentStep = steps[safeStepIndex];

  if (!guide) {
    return (
      <View style={styles.emptyPage}>
        <EmptyState icon="search-off" title="Den guide findes ikke" message="Gå tilbage, og vælg en af vejledningerne på listen." action="Tilbage" onAction={() => router.back()} />
      </View>
    );
  }

  const activeGuide = guide;
  function selectPhoneType(nextType: "iphone" | "android") {
    setPhoneType(nextType);
    setStepIndex((current) => Math.min(current, getGuideStepsWithPractice(activeGuide, nextType).length - 1));
    setShowCompletion(false);
    setShowPhonePicker(false);
  }

  function changeStep(index: number) {
    setStepIndex(Math.min(Math.max(index, 0), steps.length - 1));
    setShowCompletion(false);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }

  const isFavorite = favorites.includes(guide.id);
  const progress = steps.length > 0 ? ((safeStepIndex + 1) / steps.length) * 100 : 0;

  return (
    <View style={styles.screen}>
      <ScrollView ref={scrollRef} style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <IconButton icon="arrow-back" label="Tilbage til forrige skærm" onPress={() => router.back()} />
          <View style={styles.topBarRight}>
            <TouchableOpacity accessibilityRole="button" accessibilityLabel="Skift telefontype" onPress={() => setShowPhonePicker(true)} style={styles.phonePill}>
              <MaterialIcons name="phone-iphone" size={17} color={COLORS.navy} />
              <AppText size={14} weight="bold" color={COLORS.navy}>{phoneType === "android" ? "Android" : "iPhone"}</AppText>
              <MaterialIcons name="expand-more" size={18} color={COLORS.navy} />
            </TouchableOpacity>
            <IconButton icon={isFavorite ? "bookmark" : "bookmark-border"} label={isFavorite ? "Fjern fra favoritter" : "Gem som favorit"} onPress={() => toggleFavorite(guide.id)} active={isFavorite} />
          </View>
        </View>

        <View style={styles.guideInfo}>
          <View style={styles.categoryTag}>
            <MaterialIcons name={category?.icon ?? "menu-book"} size={16} color={COLORS.navy} />
            <AppText size={13} weight="bold" color={COLORS.navy}>{category?.title ?? "Guide"}</AppText>
          </View>
          <AppText size={31} weight="bold" style={styles.title}>{guide.title}</AppText>
          <AppText size={16} color={COLORS.secondaryText}>{guide.summary}</AppText>
          <View style={styles.duration}><MaterialIcons name="schedule" size={16} color={COLORS.secondaryText} /><AppText size={14} color={COLORS.secondaryText}>{guide.minutes} minutter · {steps.length} trin</AppText></View>
          <AppText size={14} color={COLORS.secondaryText}>Telefoner kan se lidt forskellige ud. Hvis du ikke kan finde knappen, så gå tilbage i stedet for at gætte.</AppText>
        </View>

        <View style={styles.progressBlock}>
          <View style={styles.progressLabels}>
            <AppText size={16} weight="bold">Trin {safeStepIndex + 1} af {steps.length}</AppText>
            <AppText size={14} weight="semiBold" color={COLORS.navy}>{Math.round(progress)}%</AppText>
          </View>
          <View accessibilityRole="progressbar" accessibilityLabel={`Trin ${safeStepIndex + 1} af ${steps.length}`} accessibilityValue={{ min: 1, max: steps.length, now: safeStepIndex + 1 }} style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <GuideIllustration
          kind={currentStep.illustration}
          platform={platform}
          focus={currentStep.focus}
          stepNumber={safeStepIndex + 1}
          stepCount={steps.length}
        />

        <View style={styles.stepCard}>
          <View style={styles.stepNumber}><AppText size={16} weight="bold" color={COLORS.white}>{safeStepIndex + 1}</AppText></View>
          <View style={styles.stepCopy}>
            <AppText size={22} weight="bold" style={styles.stepTitle}>{currentStep.title}</AppText>
            <AppText size={17} color={COLORS.secondaryText}>{currentStep.description}</AppText>
          </View>
        </View>

        {showCompletion ? (
          <View style={styles.completionCard}>
            <View style={styles.completionIcon}><MaterialIcons name="check" size={28} color={COLORS.white} /></View>
            <AppText size={21} weight="bold" style={{ textAlign: "center" }}>Flot gået — du klarede guiden!</AppText>
            <AppText size={16} color={COLORS.secondaryText} style={{ textAlign: "center" }}>Du kan altid finde den igen under Favoritter.</AppText>
            <TouchableOpacity accessibilityRole="button" onPress={() => router.back()} style={styles.completionLink}>
              <AppText size={16} weight="bold" color={COLORS.navy}>Tilbage til guides</AppText>
              <MaterialIcons name="arrow-forward" size={20} color={COLORS.navy} />
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.stepControls}>
          <TouchableOpacity accessibilityRole="button" accessibilityState={{ disabled: safeStepIndex === 0 }} disabled={safeStepIndex === 0} onPress={() => changeStep(Math.max(0, safeStepIndex - 1))} style={[styles.backButton, safeStepIndex === 0 && styles.disabledButton]}>
            <MaterialIcons name="arrow-back" size={19} color={COLORS.navy} />
            <AppText size={16} weight="bold" color={COLORS.navy}>Tilbage</AppText>
          </TouchableOpacity>
          <PrimaryButton
            label={showCompletion ? "Færdig" : safeStepIndex === steps.length - 1 ? "Jeg er færdig" : "Næste trin"}
            icon={showCompletion ? "check-circle" : safeStepIndex === steps.length - 1 ? "check" : "arrow-forward"}
            onPress={() => {
              if (safeStepIndex < steps.length - 1) changeStep(safeStepIndex + 1);
              else { setShowCompletion(true); }
            }}
            style={styles.nextButton}
          />
        </View>
      </ScrollView>

      <Modal visible={phonePickerOpen} transparent animationType="fade" onRequestClose={() => { if (phoneType !== "unknown") setShowPhonePicker(false); }}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalIcon}><MaterialIcons name="phone-iphone" size={30} color={COLORS.navy} /></View>
            <AppText size={22} weight="bold" style={{ textAlign: "center" }}>Hvilken mobil har du?</AppText>
            <AppText size={16} color={COLORS.secondaryText} style={{ textAlign: "center" }}>Så viser vi dig de trin, der passer bedst.</AppText>
            <TouchableOpacity accessibilityRole="button" onPress={() => selectPhoneType("iphone")} style={styles.phoneOption}>
              <MaterialIcons name="phone-iphone" size={25} color={COLORS.navy} /><AppText size={18} weight="bold" color={COLORS.navy}>iPhone</AppText><MaterialIcons name="chevron-right" size={23} color={COLORS.navy} />
            </TouchableOpacity>
            <TouchableOpacity accessibilityRole="button" onPress={() => selectPhoneType("android")} style={styles.phoneOption}>
              <MaterialIcons name="android" size={25} color={COLORS.navy} /><AppText size={18} weight="bold" color={COLORS.navy}>Android</AppText><MaterialIcons name="chevron-right" size={23} color={COLORS.navy} />
            </TouchableOpacity>
            {phoneType !== "unknown" ? (
              <TouchableOpacity accessibilityRole="button" onPress={() => setShowPhonePicker(false)} style={styles.cancelButton}><AppText size={16} weight="bold" color={COLORS.navy}>Behold mit valg</AppText></TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyPage: { flex: 1, padding: 22, justifyContent: "center", backgroundColor: COLORS.canvas },
  screen: { flex: 1, backgroundColor: COLORS.canvas },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 22, paddingTop: 14, paddingBottom: 32, gap: 18 },
  topBar: { minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 },
  topBarRight: { flexDirection: "row", alignItems: "center", gap: 9 },
  phonePill: { minHeight: 44, paddingHorizontal: 10, borderRadius: 22, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.white, flexDirection: "row", alignItems: "center", gap: 4 },
  guideInfo: { gap: 7 },
  categoryTag: { alignSelf: "flex-start", minHeight: 30, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, borderRadius: 15, backgroundColor: COLORS.ice },
  title: { letterSpacing: -0.55 },
  duration: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 2 },
  progressBlock: { gap: 8 },
  progressLabels: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  progressTrack: { height: 10, overflow: "hidden", borderRadius: 5, backgroundColor: COLORS.borderSoft },
  progressFill: { height: 10, borderRadius: 5, backgroundColor: COLORS.teal },
  stepCard: { minHeight: 115, padding: 18, gap: 13, flexDirection: "row", alignItems: "flex-start", backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 1, borderColor: COLORS.borderSoft },
  stepNumber: { width: 38, height: 38, borderRadius: 19, backgroundColor: COLORS.navy, alignItems: "center", justifyContent: "center", marginTop: 2 },
  stepCopy: { flex: 1, gap: 7 },
  stepTitle: { lineHeight: 28 },
  stepControls: { flexDirection: "row", gap: 10, marginTop: 2 },
  backButton: { minHeight: 58, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 7, borderRadius: 16, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.white },
  nextButton: { flex: 1 },
  disabledButton: { opacity: 0.45 },
  completionCard: { padding: 19, alignItems: "center", gap: 10, borderRadius: 20, backgroundColor: COLORS.paleTeal, borderWidth: 1, borderColor: "#BAD8D3" },
  completionIcon: { width: 52, height: 52, borderRadius: 26, backgroundColor: COLORS.teal, alignItems: "center", justifyContent: "center" },
  completionLink: { minHeight: 46, flexDirection: "row", alignItems: "center", gap: 7 },
  modalBackdrop: { flex: 1, padding: 22, backgroundColor: "rgba(14, 35, 48, 0.48)", alignItems: "center", justifyContent: "center" },
  modalCard: { width: "100%", maxWidth: 430, padding: 23, gap: 12, backgroundColor: COLORS.white, borderRadius: 22, alignItems: "stretch" },
  modalIcon: { width: 58, height: 58, alignSelf: "center", borderRadius: 29, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  phoneOption: { minHeight: 58, paddingHorizontal: 15, flexDirection: "row", alignItems: "center", gap: 11, borderRadius: 15, borderWidth: 1.5, borderColor: COLORS.border, backgroundColor: COLORS.canvas },
  cancelButton: { minHeight: 49, alignItems: "center", justifyContent: "center", borderRadius: 14, backgroundColor: COLORS.ice },
});
