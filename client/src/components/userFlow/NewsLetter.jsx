import img from '../../assets/landingPage/newsletter.png'
import { Input } from "@mui/material";
import { Button } from "@mui/material";

export default function NewsLetter() {
    return (
        <section className="flex lg:mx-34 mt-8 items-center justify-center py-20  ">
          <div className="container mx-auto grid grid-cols-2 gap-8 max-w-5xl">
            <div>
              <img
                alt="Latest Newsletter"
                className="rounded-lg object-cover"
                height={400}
                src={img}
                style={{
                  aspectRatio: "600/500",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg text-teal-600 bg-gray-100 px-3 py-1 text-sm font-semibold dark:bg-gray-800">
                LATEST NEWSLETTER
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get a 20% discount on your first order!</h2>
              <form className="flex space-x-2">
                <div className='flex mt-8 w-full'>
                  <Input className="max-w-lg  flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" sx={{ color: 'teal' }}>Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )
}
