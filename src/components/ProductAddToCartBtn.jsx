import { motion } from 'framer-motion'
import cartIcon from '/src/assets/images/icon-cart.svg'

export default function ProductAddToCartBtn() {
  return (
    <motion.button
      whileHover={{ scale: 1.05, transition: { duration: 0.05, ease: 'easeOut' } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.015, ease: 'easeOut' } }}
      transition={{
        type: 'tween',
        duration: 0.025,
        ease: 'easeInOut',
      }}
      type="button"
      className="bg-secondary-500 hover:bg-secondary-700 focus:bg-secondary-700 text-preset2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-4.25 font-semibold text-white transition focus:outline-none"
    >
      <img src={cartIcon} alt="" aria-hidden="true" className="h-3.75 w-3.75" />
      Add to Cart
    </motion.button>
  )
}
