import imageMobile from '/src/assets/images/image-perfume01-mobile.jpg'
import imageDesktop from '/src/assets/images/image-perfume01-desktop.jpg'

export default function RecipeIllustration() {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={imageDesktop} />
      <img
        src={imageMobile}
        alt="Product image"
        className="h-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
      />
    </picture>
  )
}
