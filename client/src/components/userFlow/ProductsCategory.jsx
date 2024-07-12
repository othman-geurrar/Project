import { Link } from 'react-router-dom'
import img1 from '../../assets/lifestyle/fashion1.png'
import img2 from '../../assets/lifestyle/sport.png'
import img3 from '../../assets/lifestyle/anime.png'
import img4 from '../../assets/lifestyle/casual2.png'

const ProductsCategory = () => {
  return (
    <section className="w-full pl-44 py-4 md:py-12 lg:py-16 hidden md:block">
    <div className="container grid gap-4 md:gap-4 px-4 md:px-16">
     
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2">
        {[
          { alt: "Fashion", title: "Fasion" , image : img1 },
          { alt: "Sport", title: "Sport" ,image : img2 },
          { alt: "Anime", title: "Anime",image : img3 },
          { alt: "Casual", title: "Casual",image : img4 }
        ].map((category, index) => (
          <div key={index} className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt={category.alt}
              className="rounded-lg object-cover object-top transition-transform group-hover:transform group-hover:translate-y-[-10px]"
              src={category.image}
              style={{ height: '200px', width: '200px', transition: 'transform 0.3s ease' }}
            />
            <div className="flex-1 py-2 md:py-3">
              <h3 className="font-semibold pl-12 tracking-tight text-sm md:text-base">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ProductsCategory