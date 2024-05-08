/**
 * Configuration to be used for the Cahit Karahan's Oto. ROAS script.
 */

var CONFIG = {
    increaseFactor: 1.01, // ROAS hedefini arttırma oranı
    decreaseFactor: 0.99, // ROAS hedefini azaltma oranı
    enableAutoFactor: true,
    maxFactor: 1.25, // Auto Factor ROAS hedefini arttırma oranı
    minFactor: 0.75, // Auto Factor ROAS hedefini azaltma oranı
    logChanges: true,     // Değişiklikleri log'la
    strategyTypes: ['MAXIMIZE_CONVERSION_VALUE','TARGET_ROAS']// Script için geçerli strateji tipleri
  };