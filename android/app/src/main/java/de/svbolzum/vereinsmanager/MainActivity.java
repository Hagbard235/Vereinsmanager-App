package de.svbolzum.vereinsmanager;

import android.os.Bundle;
import android.webkit.WebSettings;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onStart() {
        super.onStart();
        // Force Clear Cache to ensure latest Web Content is loaded
        if (this.bridge != null && this.bridge.getWebView() != null) {
            this.bridge.getWebView().clearCache(true);
            // Optional: Disable Cache completely if desired
            // this.bridge.getWebView().getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
        }
    }
}
