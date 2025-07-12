export default function ProductPrice({ price }) {
  return (
    <div className="mb-6 flex items-center">
      <div className="text-preset1 text-secondary-500 font-fraunces">${price.default}</div>
      <div className="text-preset5 text-primary-1 ml-4 line-through">${price.discount}</div>
    </div>
  )
}
