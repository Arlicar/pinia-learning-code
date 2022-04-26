export interface IProduct {
    id: number
    title: string
    price: number
    inventory: number//库存
}

const _products: IProduct[] = [
    { id: 1, title: 'iPad 4 Mino', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX -Sucker CD', price: 19.99, inventory: 5 }
]

export const getProducts = async () => {
    //wait是个封装了promise版本的定时器，在下面封装了
    await wait(100)
    return _products
}

// 结算结果
export const buyProducts = async () => {
    await wait(100)
    return Math.random() > 0.5
}

/**
 * 模拟接口控制返回数据时长
 * @param delay 延迟秒数
 */
function wait(delay: number) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}