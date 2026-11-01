class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var buyPrice = Infinity
        var sellPrice = -Infinity
        var bestTrade = 0

        for (let buyDay = 0; buyDay < prices.length; buyDay++){
            buyPrice = prices[buyDay]

            for (let sellDay = buyDay+1; sellDay < prices.length; sellDay++){
                sellPrice = prices[sellDay]

                let tradeValue = sellPrice - buyPrice
                if(tradeValue > bestTrade){
                    bestTrade = tradeValue
                }
            }
        }

        return bestTrade

    }
}
