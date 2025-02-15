import Image from "next/image";
import catAndDog from "../../../public/about-1.png"
import cat from "../../../public/about-2.png"

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={catAndDog}
              alt="Um cachorro e um gato."
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}