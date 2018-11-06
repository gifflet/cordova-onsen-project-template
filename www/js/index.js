ons.ready(function () {
  // Set AdMobAds options:
  admob.setOptions({
    publisherId: "ca-app-pub-XXXXXXXXXXXXXXXX/BBBBBBBBBB", // Required
    interstitialAdId: "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII", // Optional
    tappxIdiOS: "/XXXXXXXXX/Pub-XXXX-iOS-IIII", // Optional
    tappxIdAndroid: "/XXXXXXXXX/Pub-XXXX-Android-AAAA", // Optional
    tappxShare: 0.5 // Optional
  });

  // Start showing banners (automatic when autoShowBanner is set to true)
  admob.createBannerView();

  // Request interstitial (will present automatically when autoShowInterstitial is set to true)
  admob.requestInterstitialAd();
});