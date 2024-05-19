import img from "../../assets/landingPage/forher.png";
import img1 from "../../assets/landingPage/FOrhim.png";
import { Link } from "react-router-dom";

export default function Accessorie() {
  return (
    <>
    <h1 className="text-3xl pt-6 font-Kalam font-bold text-teal-700"> Womens Accessoire</h1>
      <section className="grid md:grid-cols-2 gap-6 lg:gap-24 items-center max-w-6xl  mx-auto py-12 md:py-16 lg:py-24">
        <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
          <img
            alt="Woman"
            className="[grid-area:stack] object-cover"
            src={img}
            style={{ width: "600px", height: "550px" }}
          />
        </div>

        <div className="grid gap-6 md:gap-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ProductCard
              title="Mathilda during"
              description="Comfortable Tee"
              price="$299"
              imgSrc="https://hongotheme.myshopify.com/cdn/shop/products/jewellery-product-04-a.jpg?v=1671114328&width=720"
            />
            <ProductCard
              title="Custom Name Necklace"
              price="$299"
              imgSrc="https://i.etsystatic.com/34379934/r/il/007248/4790987137/il_794xN.4790987137_ct6b.jpg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ProductCard
              title="Luxurious Watch Handmade"
              price="$49"
              imgSrc="https://i.etsystatic.com/51971923/r/il/d760ee/5957142522/il_794xN.5957142522_3cjk.jpg"
            />
            <ProductCard
              title="Vintage Women Sunglasses"
              price="$129"
              imgSrc="https://i.etsystatic.com/27728724/r/il/f81c3b/4433772405/il_794xN.4433772405_7n65.jpg"
            />
          </div>
        </div>
      </section>
      <h1 className="text-3xl pt-2 font-Kalam font-bold text-teal-700"> Men Accessoire</h1>
      <section className="grid md:grid-cols-2 gap-6 lg:gap-24 items-center max-w-6xl  mx-auto py-8 md:py-16 lg:py-24">
        <div className="grid gap-6 md:gap-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ProductCard
              title="Black Onyx Necklace for Men"
              description="Comfortable Footwear"
              price="$19.99"
              imgSrc="https://i.etsystatic.com/9884258/r/il/9acf5f/4517851511/il_794xN.4517851511_p1rl.jpg"
            />
            <ProductCard
              title="Mens Bracelet with Steel Rings"

              price="$12.99"
              imgSrc="https://i.etsystatic.com/13238741/r/il/7154d2/5793587602/il_794xN.5793587602_k3cz.jpg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <ProductCard
              title="Adventure-Ready Backpack"
              description="Versatile Daypack"
              price="$19.99"
              imgSrc="https://i.etsystatic.com/36763774/r/il/a46556/4601299521/il_1140xN.4601299521_3gfo.jpg"
            />
            <ProductCard
              title="Island Vibes Bluetooth Speaker"
              description="Music on the Go"
              price="$59.99"
              imgSrc="https://i.etsystatic.com/33078860/r/il/4b531c/5943066550/il_794xN.5943066550_jd2m.jpg"
            />
          </div>
        </div>
        <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
          <img
            alt="Woman"
            className="[grid-area:stack] object-cover"
            src={img1}
            style={{ width: "600px", height: "550px" }}
          />
        </div>
      </section>
    </>
  );
}

function ProductCard({ title, price, imgSrc }) {
  return (
    <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <img
        alt="Product Image"
        className="[grid-area:stack] object-cover w-full aspect-square group-hover:scale-125 transition-transform duration-300"
        height={600}
        src={imgSrc}
        width={600}
      />
      <div className="flex-1 [grid-area:stack]  group-hover:opacity-10 transition-opacity text-white p-2 justify-end flex flex-col gap-2">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        
        <h4 className="font-semibold">{price}</h4>
      </div>
    </div>
  );
}
