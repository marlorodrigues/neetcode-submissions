class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var buyPrice = Infinity
        var bestTrade = 0

        for (let day = 0; day < prices.length; day++){
            let price = prices[day]

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
