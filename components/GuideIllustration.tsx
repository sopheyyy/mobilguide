import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";

import { AppText, COLORS } from "@/components/app-ui";
import type { IllustrationKind, PhoneType } from "@/lib/mobile-guides";

export function GuideIllustration({
  kind,
  platform,
  focus,
  stepNumber,
  stepCount,
}: {
  kind: IllustrationKind;
  platform: PhoneType;
  focus?: string;
  stepNumber: number;
  stepCount: number;
}) {
  const platformLabel = platform === "android" ? "Android" : "iPhone";
  const focusLabel = focus ?? "næste trin";
  return (
    <View style={styles.scene} accessibilityLabel={`Illustration af en ${platformLabel}-skærm. Fokus: ${focusLabel}`}>
      <View style={styles.deviceShadow}>
        <View style={[styles.device, platform === "android" && styles.androidDevice]}>
          <View style={[styles.topNotch, platform === "android" && styles.androidCamera]} />
          <View style={styles.screen}>
            <View style={styles.statusRow}>
              <AppText size={8} weight="bold" color={COLORS.navy}>9:41</AppText>
              <MaterialIcons name="wifi" size={10} color={COLORS.navy} />
            </View>
            <ScreenContent kind={kind} platform={platform} focus={focus} />
            {platform === "android" ? (
              <View style={styles.androidNavigation}>
                <View style={styles.androidNavSquare} />
                <View style={styles.androidNavCircle} />
                <View style={styles.androidNavTriangle} />
              </View>
            ) : <View style={styles.iosHomeIndicator} />}
          </View>
        </View>
      </View>
      <View style={styles.caption} accessibilityLabel={`Trin ${stepNumber} af ${stepCount}. Se efter ${focusLabel} på din ${platformLabel}.`}>
        <View style={styles.stepNumberBadge}>
          <AppText size={16} weight="bold" color={COLORS.white}>{stepNumber}</AppText>
        </View>
        <View style={styles.captionCopy}>
          <AppText size={12} weight="bold" color={COLORS.teal}>TRIN {stepNumber} AF {stepCount}</AppText>
          <AppText size={15} weight="semiBold" color={COLORS.navy}>Se efter “{focusLabel}” på din {platformLabel}</AppText>
        </View>
        <MaterialIcons name="touch-app" size={24} color={COLORS.navy} />
      </View>
    </View>
  );
}

function ScreenContent({ kind, platform, focus }: { kind: IllustrationKind; platform: PhoneType; focus?: string }) {
  const heading = kind === "contacts" ? "Kontakter" :
    kind === "dial" ? "Telefon" :
      kind === "messages" ? "Beskeder" :
        kind === "camera" ? "Kamera" :
          kind === "photos" ? "Fotos" :
            kind === "wifi" ? "Wi-Fi" :
              kind === "browser" ? (platform === "iphone" ? "Safari" : "Chrome") :
                kind === "store" ? (platform === "iphone" ? "App Store" : "Play Butik") :
                  kind === "shield" ? "En besked" :
                    kind === "text" ? "Skærm" : "Lydstyrke";
  return (
    <View style={styles.screenContent}>
      <AppText size={10} weight="bold" color={COLORS.ink} numberOfLines={1}>{heading}</AppText>
      {kind === "contacts" ? <ContactsScreen focus={focus} /> : null}
      {kind === "dial" ? <DialScreen focus={focus} /> : null}
      {kind === "messages" ? <MessageScreen focus={focus} /> : null}
      {kind === "camera" ? <CameraScreen focus={focus} /> : null}
      {kind === "photos" ? <PhotosScreen focus={focus} /> : null}
      {kind === "wifi" ? <WifiScreen focus={focus} /> : null}
      {kind === "browser" ? <BrowserScreen focus={focus} /> : null}
      {kind === "store" ? <StoreScreen focus={focus} /> : null}
      {kind === "shield" ? <ShieldScreen focus={focus} /> : null}
      {kind === "text" ? <TextScreen focus={focus} /> : null}
      {kind === "volume" ? <VolumeScreen focus={focus} /> : null}
    </View>
  );
}

function Highlight({ children, color = COLORS.ice }: { children: React.ReactNode; color?: string }) {
  return (
    <View style={[styles.highlight, { backgroundColor: color }]}>
      {children}
    </View>
  );
}

function ContactsScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={styles.searchBar}><MaterialIcons name="search" size={11} color={COLORS.muted} /><AppText size={8} color={COLORS.muted}>Søg</AppText></View>
      {[["A", "Anna"], ["P", "Peter"], ["M", "Mette"]].map(([letter, name]) => (
        <View key={name} style={[styles.personRow, focus === "Navn" && name === "Anna" && styles.focusRow]}>
          <View style={styles.avatar}><AppText size={7} weight="bold" color={COLORS.navy}>{letter}</AppText></View>
          <AppText size={8} color={COLORS.ink}>{name}</AppText>
          {name === "Anna" && focus === "Ring op" ? <MaterialIcons name="call" size={11} color={COLORS.teal} /> : null}
        </View>
      ))}
      {["Tilføj kontakt", "Gem", "Fornavn", "Telefonnummer"].includes(focus ?? "") ? (
        <View style={[styles.settingRow, styles.focusRow]}>
          <MaterialIcons name="person-add" size={10} color={COLORS.navy} />
          <AppText size={8} weight="bold" color={COLORS.navy}>{focus === "Tilføj kontakt" ? "Tilføj kontakt" : focus === "Gem" ? "Gem kontakt" : focus}</AppText>
        </View>
      ) : null}
      <View style={styles.bottomNav}><AppText size={7} color={COLORS.muted}>Favoritter</AppText><AppText size={7} weight="bold" color={COLORS.navy}>Kontakter</AppText></View>
    </View>
  );
}

function DialScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.centerContent}>
      <AppText size={8} color={COLORS.ink}>Anna Jensen</AppText>
      <AppText size={7} color={COLORS.muted}>12 34 56 78</AppText>
      <View style={styles.dialPad}>{["1", "2", "3", "4", "5", "6"].map((n) => <View key={n} style={styles.dialKey}><AppText size={8} color={COLORS.ink}>{n}</AppText></View>)}</View>
      <Highlight color={focus === "Ring op" || focus === "Svar" ? COLORS.paleTeal : COLORS.ice}>
        <View style={styles.callButton}><MaterialIcons name="call" size={13} color={COLORS.white} /></View>
      </Highlight>
      {["Højttaler", "Slå fra"].includes(focus ?? "") ? (
        <Highlight color={focus === "Højttaler" ? COLORS.paleTeal : COLORS.ice}>
          <View style={styles.speakerButton}><MaterialIcons name="volume-up" size={12} color={COLORS.navy} /><AppText size={8} weight="bold" color={COLORS.navy}>Højttaler</AppText></View>
        </Highlight>
      ) : null}
    </View>
  );
}

function MessageScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={styles.messageBubble}><AppText size={7} color={COLORS.ink}>Hej, hvordan går det?</AppText></View>
      <View style={[styles.messageBubble, styles.sentBubble]}><AppText size={7} color={COLORS.white}>Det går godt, tak!</AppText></View>
      <View style={styles.messageSpacer} />
      <View style={[styles.composer, focus === "Send" && styles.focusRow]}>
        <AppText size={7} color={COLORS.muted}>Skriv besked …</AppText>
        <View style={styles.sendButton}><MaterialIcons name="arrow-upward" size={9} color={COLORS.white} /></View>
      </View>
      {focus === "Ny besked" || focus === "Til" ? <View style={styles.recipient}><AppText size={7} color={COLORS.secondaryText}>Til:  Anna</AppText></View> : null}
    </View>
  );
}

function CameraScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.cameraContent}>
      <View style={styles.cameraView}><View style={styles.sun} /><View style={styles.hillBack} /><View style={styles.hillFront} /></View>
      <View style={styles.cameraControls}>
        <View style={styles.miniPhoto} />
        <Highlight color={focus === "Udløser" ? COLORS.paleGold : COLORS.ice}><View style={styles.shutter} /></Highlight>
        <MaterialIcons name="flip-camera-android" size={12} color={COLORS.navy} />
      </View>
    </View>
  );
}

function PhotosScreen({ focus }: { focus?: string }) {
  const colors = ["#D6E5EC", "#EBDDBD", "#CFE2DC", "#DCD9EE", "#F0D4CE", "#D8E1C8"];
  return (
    <View style={styles.photoGrid}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.photoTile, { backgroundColor: color }, (index === 0 && ["Vælg foto", "Dine billeder", "Slet", "Bekræft"].includes(focus ?? "")) && styles.photoTileFocus]}>
          <MaterialIcons name={index % 2 ? "landscape" : "photo"} size={15} color={COLORS.navy} />
        </View>
      ))}
      {["Slet", "Bekræft"].includes(focus ?? "") ? <View style={[styles.settingRow, styles.focusRow]}><MaterialIcons name="delete-outline" size={10} color={COLORS.red} /><AppText size={8} weight="bold" color={COLORS.red}>{focus === "Slet" ? "Slet foto" : "Bekræft sletning"}</AppText></View> : null}
      <View style={styles.photoTab}><AppText size={7} color={COLORS.muted}>Dage</AppText><AppText size={7} weight="bold" color={COLORS.navy}>Bibliotek</AppText><AppText size={7} color={COLORS.muted}>Søg</AppText></View>
    </View>
  );
}

function WifiScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={styles.toggleRow}><AppText size={8} color={COLORS.ink}>Wi-Fi</AppText><View style={styles.toggle}><View style={styles.toggleKnob} /></View></View>
      <AppText size={7} weight="bold" color={COLORS.muted}>NETVÆRK</AppText>
      {["Hjemme hos Anna", "Gæstenet", "Bibliotek"].map((name, index) => (
        <View key={name} style={[styles.networkRow, index === 0 && styles.focusRow]}>
          <MaterialIcons name="wifi" size={10} color={COLORS.navy} />
          <AppText size={7} color={COLORS.ink} style={{ flex: 1 }}>{name}</AppText>
          {index === 0 ? <MaterialIcons name="check" size={10} color={COLORS.teal} /> : null}
        </View>
      ))}
      {focus === "Adgangskode" ? <View style={styles.searchBar}><AppText size={7} color={COLORS.muted}>Adgangskode</AppText></View> : null}
    </View>
  );
}

function BrowserScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={[styles.searchBar, focus === "Søg" && styles.focusRow]}><MaterialIcons name="search" size={10} color={COLORS.navy} /><AppText size={7} color={COLORS.secondaryText}>Søg eller skriv adresse</AppText></View>
      {["Del", "Bogmærke", "Gem", "Menu", "Bogmærker"].includes(focus ?? "") ? (
        <View style={[styles.settingRow, styles.focusRow]}>
          <MaterialIcons name={focus === "Del" ? "ios-share" : focus === "Bogmærke" || focus === "Bogmærker" ? "bookmark" : focus === "Menu" ? "more-vert" : "check"} size={10} color={COLORS.navy} />
          <AppText size={8} weight="bold" color={COLORS.navy}>{focus}</AppText>
        </View>
      ) : null}
      <View style={styles.browserLogo}><MaterialIcons name="language" size={18} color={COLORS.navy} /></View>
      <View style={styles.resultLine} /><View style={styles.resultLineShort} />
      <View style={styles.resultLine} /><View style={styles.resultLineShort} />
    </View>
  );
}

function StoreScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={[styles.searchBar, focus === "Søg" && styles.focusRow]}><MaterialIcons name="search" size={10} color={COLORS.navy} /><AppText size={7} color={COLORS.muted}>Søg efter apps</AppText></View>
      <View style={styles.appRow}><View style={styles.appIcon}><MaterialIcons name="local-florist" size={15} color={COLORS.teal} /></View><AppText size={7} color={COLORS.ink} style={{ flex: 1 }}>Vejr og hverdag</AppText><View style={styles.installButton}><AppText size={7} weight="bold" color={COLORS.white}>{focus === "Hent" ? "HENT" : "HENT"}</AppText></View></View>
      <View style={styles.appRow}><View style={[styles.appIcon, { backgroundColor: COLORS.paleGold }]}><MaterialIcons name="map" size={15} color={COLORS.navy} /></View><AppText size={7} color={COLORS.ink} style={{ flex: 1 }}>Kort</AppText><View style={styles.installButton}><AppText size={7} weight="bold" color={COLORS.white}>HENT</AppText></View></View>
    </View>
  );
}

function ShieldScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.shieldContent}>
      <View style={styles.shieldIcon}><MaterialIcons name="shield" size={25} color={COLORS.navy} /></View>
      <Highlight color={focus === "Ukendt link" ? COLORS.paleRed : COLORS.paleGold}>
        <View style={styles.warningBox}><MaterialIcons name="warning-amber" size={12} color={COLORS.red} /><AppText size={7} weight="bold" color={COLORS.red}>Din konto lukkes — klik her</AppText></View>
      </Highlight>
      <AppText size={7} color={COLORS.secondaryText} style={{ textAlign: "center" }}>Uventede beskeder kan snyde</AppText>
    </View>
  );
}

function TextScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.list}>
      <View style={[styles.settingRow, focus === "Skærm" && styles.focusRow]}><MaterialIcons name="brightness-6" size={11} color={COLORS.navy} /><AppText size={8} color={COLORS.ink}>Skærm</AppText></View>
      {["Batteri", "Strømsparefunktion", "Batterisparetilstand"].includes(focus ?? "") ? <View style={[styles.settingRow, styles.focusRow]}><MaterialIcons name="battery-alert" size={11} color={COLORS.navy} /><AppText size={8} weight="bold" color={COLORS.navy}>{focus}</AppText></View> : null}
      <View style={[styles.settingRow, styles.focusRow]}><AppText size={7} color={COLORS.ink}>Tekststørrelse</AppText></View>
      <AppText size={7} color={COLORS.muted}>Lille</AppText>
      <View style={styles.slider}><View style={styles.sliderFill} /><View style={styles.sliderKnob} /></View>
      <AppText size={12} weight="bold" color={COLORS.ink}>Stor og tydelig tekst</AppText>
    </View>
  );
}

function VolumeScreen({ focus }: { focus?: string }) {
  return (
    <View style={styles.volumeContent}>
      <View style={styles.volumeSpeaker}><MaterialIcons name="volume-up" size={30} color={COLORS.navy} /></View>
      <View style={styles.volumeTrack}><View style={styles.volumeFill} /><View style={styles.volumeKnob} /></View>
      <AppText size={7} color={COLORS.secondaryText}>{focus === "Lydstyrke" ? "Tryk på knapperne på siden" : "Ringetone"}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: { minHeight: 276, alignItems: "center", justifyContent: "center", paddingVertical: 18, gap: 13, backgroundColor: COLORS.ice, borderRadius: 22, overflow: "hidden" },
  deviceShadow: { paddingBottom: 5, borderRadius: 25, backgroundColor: "#CADAE4" },
  device: { width: 145, height: 214, padding: 8, borderRadius: 24, backgroundColor: COLORS.navy, borderWidth: 1, borderColor: COLORS.navy },
  androidDevice: { borderRadius: 19, backgroundColor: "#132E40" },
  topNotch: { position: "absolute", zIndex: 1, top: 9, left: 52, width: 40, height: 7, borderRadius: 5, backgroundColor: COLORS.navy },
  androidCamera: { top: 9, left: 68, width: 8, height: 8, borderRadius: 4 },
  screen: { flex: 1, backgroundColor: COLORS.white, borderRadius: 17, overflow: "hidden", paddingHorizontal: 7, paddingTop: 8 },
  androidNavigation: { height: 13, marginTop: 2, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 11 },
  androidNavSquare: { width: 5, height: 5, borderRadius: 1, backgroundColor: COLORS.muted },
  androidNavCircle: { width: 6, height: 6, borderRadius: 3, borderWidth: 1, borderColor: COLORS.muted },
  androidNavTriangle: { width: 0, height: 0, borderLeftWidth: 4, borderRightWidth: 4, borderBottomWidth: 6, borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: COLORS.muted },
  iosHomeIndicator: { alignSelf: "center", width: 31, height: 3, marginTop: 2, marginBottom: 1, borderRadius: 2, backgroundColor: "#8297A4" },
  statusRow: { height: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 3 },
  screenContent: { flex: 1, paddingHorizontal: 4, paddingTop: 7, gap: 6 },
  list: { flex: 1, gap: 5, paddingTop: 3 },
  searchBar: { height: 23, paddingHorizontal: 6, flexDirection: "row", alignItems: "center", gap: 4, borderRadius: 8, backgroundColor: COLORS.canvas, borderColor: COLORS.borderSoft, borderWidth: 0.6 },
  personRow: { minHeight: 24, flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 4, borderRadius: 6 },
  focusRow: { borderColor: COLORS.navy, borderWidth: 1, backgroundColor: COLORS.ice },
  avatar: { width: 16, height: 16, borderRadius: 8, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  bottomNav: { marginTop: "auto", height: 20, borderTopWidth: 0.6, borderColor: COLORS.borderSoft, flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  centerContent: { flex: 1, alignItems: "center", gap: 5, paddingTop: 5 },
  dialPad: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4, width: 74, marginVertical: 1 },
  dialKey: { width: 19, height: 19, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.canvas },
  callButton: { width: 27, height: 27, borderRadius: 14, backgroundColor: COLORS.teal, alignItems: "center", justifyContent: "center" },
  speakerButton: { minHeight: 19, flexDirection: "row", alignItems: "center", gap: 3, paddingHorizontal: 4 },
  highlight: { padding: 3, borderRadius: 12, borderWidth: 1, borderColor: COLORS.navy },
  messageBubble: { maxWidth: "83%", alignSelf: "flex-start", paddingHorizontal: 6, paddingVertical: 5, borderRadius: 8, backgroundColor: COLORS.ice },
  sentBubble: { alignSelf: "flex-end", backgroundColor: COLORS.navy },
  messageSpacer: { flex: 1, minHeight: 12 },
  composer: { minHeight: 22, paddingHorizontal: 5, borderRadius: 12, borderColor: COLORS.border, borderWidth: 0.7, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  sendButton: { width: 15, height: 15, backgroundColor: COLORS.navy, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  recipient: { borderBottomWidth: 0.6, borderColor: COLORS.border, paddingBottom: 3 },
  cameraContent: { flex: 1, gap: 8, paddingTop: 4 },
  cameraView: { flex: 1, minHeight: 85, backgroundColor: "#DDEAF0", borderRadius: 8, overflow: "hidden", alignItems: "center", justifyContent: "center" },
  sun: { width: 20, height: 20, borderRadius: 10, backgroundColor: COLORS.gold, position: "absolute", top: 12, right: 17 },
  hillBack: { position: "absolute", bottom: 22, left: -12, width: 95, height: 53, borderRadius: 60, backgroundColor: "#B9D3D7", transform: [{ rotate: "-15deg" }] },
  hillFront: { position: "absolute", bottom: -3, right: -12, width: 100, height: 50, borderRadius: 45, backgroundColor: "#86AAA6", transform: [{ rotate: "-8deg" }] },
  cameraControls: { height: 32, flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  miniPhoto: { width: 17, height: 17, borderRadius: 4, backgroundColor: COLORS.paleGold },
  shutter: { width: 24, height: 24, borderRadius: 13, backgroundColor: COLORS.white, borderWidth: 2, borderColor: COLORS.navy },
  photoGrid: { flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 4, paddingTop: 4, alignContent: "flex-start" },
  photoTile: { width: "31%", height: 38, borderRadius: 5, alignItems: "center", justifyContent: "center" },
  photoTileFocus: { borderWidth: 1.5, borderColor: COLORS.navy },
  photoTab: { width: "100%", marginTop: 3, height: 17, flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderTopWidth: 0.5, borderColor: COLORS.borderSoft },
  caption: { width: "92%", paddingHorizontal: 12, paddingVertical: 10, minHeight: 58, flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: COLORS.white, borderRadius: 18, borderWidth: 1, borderColor: COLORS.border },
  stepNumberBadge: { width: 36, height: 36, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: 18, backgroundColor: COLORS.navy },
  captionCopy: { flex: 1, gap: 2 },
  toggleRow: { minHeight: 26, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 3 },
  toggle: { width: 26, height: 15, backgroundColor: COLORS.teal, borderRadius: 8, justifyContent: "center", paddingHorizontal: 2, alignItems: "flex-end" },
  toggleKnob: { width: 11, height: 11, borderRadius: 6, backgroundColor: COLORS.white },
  networkRow: { minHeight: 23, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 4, borderRadius: 5 },
  browserLogo: { alignSelf: "center", marginTop: 9, width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  resultLine: { marginTop: 3, height: 3, width: "85%", borderRadius: 2, backgroundColor: COLORS.ice },
  resultLineShort: { height: 3, width: "58%", borderRadius: 2, backgroundColor: COLORS.borderSoft },
  appRow: { minHeight: 33, flexDirection: "row", alignItems: "center", gap: 5 },
  appIcon: { width: 23, height: 23, borderRadius: 6, backgroundColor: COLORS.paleTeal, alignItems: "center", justifyContent: "center" },
  installButton: { backgroundColor: COLORS.navy, borderRadius: 7, paddingHorizontal: 6, paddingVertical: 4 },
  shieldContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 7 },
  shieldIcon: { width: 42, height: 42, backgroundColor: COLORS.ice, borderRadius: 21, alignItems: "center", justifyContent: "center" },
  warningBox: { minHeight: 26, paddingHorizontal: 5, flexDirection: "row", alignItems: "center", gap: 4, borderRadius: 7 },
  settingRow: { minHeight: 24, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 4, borderRadius: 5 },
  slider: { height: 6, marginVertical: 5, borderRadius: 3, backgroundColor: COLORS.borderSoft, flexDirection: "row", alignItems: "center" },
  sliderFill: { width: "72%", height: 6, borderRadius: 3, backgroundColor: COLORS.navy },
  sliderKnob: { position: "absolute", left: "68%", width: 14, height: 14, borderRadius: 8, backgroundColor: COLORS.white, borderWidth: 2, borderColor: COLORS.navy },
  volumeContent: { flex: 1, alignItems: "center", justifyContent: "center", gap: 14 },
  volumeSpeaker: { width: 52, height: 52, borderRadius: 26, backgroundColor: COLORS.ice, alignItems: "center", justifyContent: "center" },
  volumeTrack: { width: 97, height: 7, borderRadius: 4, backgroundColor: COLORS.borderSoft, flexDirection: "row", alignItems: "center" },
  volumeFill: { width: "69%", height: 7, borderRadius: 4, backgroundColor: COLORS.navy },
  volumeKnob: { position: "absolute", left: "64%", width: 16, height: 16, borderRadius: 8, backgroundColor: COLORS.white, borderWidth: 2, borderColor: COLORS.navy },
});
