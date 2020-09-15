let arr = [
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"},
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
    {"type": "socks", "color": "green", "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"}
]

function calculateGoodsCost(goods) {
    let result = 0
    let redHatQuantity = 0
    let types = {}
    let colors = {}

    goods.forEach((good) => {
        let quantity = good.quantity || 0
        let price = good.price || good.priceForPair
        price = price.slice(1)

        if(good.type === 'hat' && good.color === 'red') redHatQuantity += quantity

        types[good.type] ? types[good.type] += quantity : types[good.type] = quantity
        colors[good.color] ? colors[good.color] += quantity * price
                            : colors[good.color] = quantity * price

        result += quantity * price
    })

    console.log(`Socks - ${types['socks']}`)
    console.log(`Red - ${colors['red']}, Green - ${colors['green']}, Blue - ${colors['blue']}, White - ${colors['white']}`)
    console.log(`Red Hats - ${redHatQuantity}`)
    return result
}
