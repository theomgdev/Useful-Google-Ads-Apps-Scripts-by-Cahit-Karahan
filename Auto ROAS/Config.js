/**
 * Configuration to be used for the Cahit Karahan's Oto. ROAS script.
 */

var CONFIG = {
    increaseFactor: 1.01, // ROAS hedefini arttırma oranı
    decreaseFactor: 0.99, // ROAS hedefini azaltma oranı
    logChanges: true,     // Değişiklikleri log'la
    enableAutoFactor: true,
    strategyTypes: ['MAXIMIZE_CONVERSION_VALUE','TARGET_ROAS']// Script için geçerli strateji tipleri
  };