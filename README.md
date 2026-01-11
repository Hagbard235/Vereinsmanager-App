# Vereinsmanager Android App Wrapper

Dieses Projekt ist eine native Android-App-Hülle (Wrapper) für die Vereinsmanager Web-Anwendung.
Es nutzt **Capacitor**, um die Website `https://vereinsmanager-pro---prod.web.app/` als App darzustellen.

## App bauen (ohne Android Studio)

Da kein lokales Android Setup vorhanden ist, haben wir einen **GitHub Actions Workflow** vorkonfiguriert.
Dieser erstellt die APK-Datei automatisch in der Cloud.

### Schritte:

1. **Code zu GitHub hochladen**:
   Laden Sie diesen gesamten Ordner in Ihr GitHub-Repository hoch.
   ```bash
   git add .
   git commit -m "Setup Android Wrapper with GitHub Actions"
   git push
   ```

2. **Build abwarten**:
   - Gehen Sie auf GitHub zu Ihrem Repository.
   - Klicken Sie auf den Tab **"Actions"**.
   - Sie sollten einen Workflow namens **"Build Android APK"** sehen, der gerade läuft.

3. **APK herunterladen**:
   - Sobald der Workflow grün (erfolgreich) ist, klicken Sie auf den Eintrag.
   - Scrollen Sie nach unten zum Bereich **"Artifacts"**.
   - Klicken Sie auf **"Vereinsmanager-Debug"** (oder ähnlicher Name), um die `.zip` Datei herunterzuladen.
   - Darin befindet sich die `app-debug.apk`.

### Installation auf dem Handy

- Übertragen Sie die `.apk` Datei auf Ihr Android Smartphone.
- Öffnen Sie die Datei.
- Möglicherweise müssen Sie "Installation aus unbekannten Quellen" erlauben (da es sich um eine Debug-Version handelt und nicht aus dem Play Store kommt).

## Lokale Entwicklung (Optional)

Falls Sie doch Zugriff auf Android Studio haben:
1. `npm install`
2. `npx cap open android`
3. Drücken Sie den "Run" Button in Android Studio.
