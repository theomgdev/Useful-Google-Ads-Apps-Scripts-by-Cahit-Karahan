# Cahit Karahan's Automated ROAS Script
This script automatically sets the ROAS (Return on Ad Spend) targets of your Google Ads campaigns. This is done by checking the expenses and budget of a particular campaign and calculating an "autoFactor" based on these values.

## How does it work?
The script retrieves all active campaigns and performs the following actions for each one:
- Gets yesterday's stats for the campaign and gets the expenses and budget.
- It calculates an "autoFactor" based on these values.
- Retrieves the campaign's current ROAS target.
- Calculates a new ROAS target. This depends on whether autoFactor is enabled and whether expenses exceed the budget.
- If the new ROAS target is different from the existing target, it sets the campaign's ROAS target to the new target and logs the change.

## Configuration
The script has a few configuration options that you can adjust to your needs. These include:
- **increaseFactor:** The rate at which the ROAS target increases when expenses exceed the budget.
- **decreaseFactor:** The rate at which the ROAS target is reduced when expenses do not exceed budget.
- **enableAutoFactor:** Specifies whether AutoFactor is enabled or not.
- **maxFactor:** Rate at which ROAS target increases if AutoFactor is used.
- **minFactor:** Rate of reducing ROAS target if AutoFactor is used.
- **logChanges:** Specifies whether changes will be logged or not.
- **strategyTypes:** Bidding strategy types to which the script is valid.

## Error Management
If an error occurs when the script attempts to get or set a campaign's ROAS target, it logs the error and moves on to the next campaign.