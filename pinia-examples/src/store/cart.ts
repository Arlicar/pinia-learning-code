import { defineStore } from "pinia";
import { buyProducts, IProduct } from "../api/shop";
import { useProductsStore } from "./products"

type CartProduct = {
    quantity: number
} & Omit<IProduct, 'inventory'>//与Iproduct接口进行合并,同时过滤inventory

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cartProducts: [] as CartProduct[],//购物车的商品列表
            checkOutStatus: null as null | string
        }
    },
    getters: {
        totalPrice(state) {
            return state.cartProducts.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)
        }
    },

    actions: {
        addProductToCart(product: IProduct) {
            //看商品有没有库存
            if (product.inventory < 1) {
                return
            }
            //检查购物车中是否已有该商品
            const cartItem = this.cartProducts.find(item => item.id === product.id)
            if (cartItem) {
                // 如果有则让商品的数量加1

                cartItem.quantity++
            } else {
                // 如果没有则添加到购物车列表中
                this.cartProducts.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1
                })
            }
            // 更新商品库存
            const productsStore = useProductsStore()
            productsStore.decrementProduct(product)
            // this.cartProducts.push(product)
        },

        async checkout() {
            const ret = await buyProducts()
            this.checkOutStatus = ret ? '成功' : '失败'
            if (ret) {
                this.cartProducts = []
            }
        }
    }
})