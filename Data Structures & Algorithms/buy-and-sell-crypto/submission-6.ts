class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var buyPrice = Infinity
        var bestTrade = 0

        for(const price of prices){
            if(price < buyPrice){
                buyPrice = price
            }
            else {
                let trade = price - buyPrice

                if(trade > bestTrade){
                    bestTrade = trade
                }
            }
        }

        return bestTrade

    }
}
