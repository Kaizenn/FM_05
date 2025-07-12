import ProductIllustration from './ProductIllustration'
import ProductCategory from './ProductCategory'
import ProductTitle from './ProductTitle'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductAddToCartBtn from './ProductAddToCartBtn'

import { products } from '../data/products'

import { AnimatePresence, motion } from 'framer-motion'

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.05, // si tu veux que chaque élément à l'intérieur apparaisse en décalé
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProductView() {
  const product = products[0]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="bg-surface-0 flex h-screen items-center justify-center p-4"
      >
        <div className="max-w-[21.875rem] md:flex md:max-w-[37.5rem]">
          <div>
            <ProductIllustration />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-surface-1 font-montserrat rounded-b-lg p-8 md:max-w-[18.75rem] md:rounded-none md:rounded-r-lg"
          >
            <motion.div variants={itemVariants}>
              <ProductCategory category={product.category} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductTitle title={product.title} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductDescription description={product.description} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductPrice price={product.price} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductAddToCartBtn />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
