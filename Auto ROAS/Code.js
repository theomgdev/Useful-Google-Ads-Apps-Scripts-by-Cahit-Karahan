function main() {
  var campaigns = AdsApp.campaigns()
    .withCondition('Status = ENABLED')
    .get();
  
  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor('YESTERDAY');
    var cost = stats.getCost();
    var budget = campaign.getBudget().getAmount();
    var autoFactor = cost / budget;

    Logger.log('Cost: ' + cost + ' / Budget: ' + budget + ' = Autofactor: ' + autoFactor);
    
    try {
      var roasTarget = getRoasTarget(campaign);
      var newRoasTarget = roasTarget;
      
      if (cost >= budget) {
        newRoasTarget *= CONFIG.enableAutoFactor ? autoFactor : CONFIG.increaseFactor;
      } else if (cost < budget) {
        newRoasTarget *= CONFIG.enableAutoFactor ? autoFactor : CONFIG.decreaseFactor;
      }
      
      if (newRoasTarget !== roasTarget) {
        setRoasTarget(campaign, newRoasTarget);
        if (CONFIG.logChanges) {
          Logger.log('ROAS hedefi güncellendi - Kampanya: ' + campaign.getName() + ', Eski Hedef: ' + roasTarget + ', Yeni Hedef: ' + newRoasTarget);
        }
      }
    } catch (error) {
      Logger.log('Hata - Kampanya: ' + campaign.getName() + ', Mesaj: ' + error.message);
    }
  }
}

// Mevcut ROAS hedefini al
function getRoasTarget(campaign) {
  var campaignBidding = campaign.bidding();
  var biddingType = campaignBidding.getStrategyType();
  
  if (CONFIG.strategyTypes.indexOf(biddingType) >= 0 && campaignBidding.getTargetRoas() != null) {
    return campaignBidding.getTargetRoas();
  } else {
    throw new Error('ROAS hedefli teklif verme stratejisi yok.');
  }
}

// ROAS hedefini ayarla
function setRoasTarget(campaign, roasTarget) {
  var campaignBidding = campaign.bidding();
  var biddingType = campaignBidding.getStrategyType();
  
  if (CONFIG.strategyTypes.indexOf(biddingType) >= 0 && campaignBidding.getTargetRoas() != null) {
    campaignBidding.setTargetRoas(roasTarget);
  } else {
    throw new Error('ROAS hedefli teklif verme stratejisi yok.');
  }
}