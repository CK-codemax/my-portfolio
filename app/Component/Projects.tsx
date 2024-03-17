import Project from "./Project"

type Props = {}

const jumiaImages = [
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_43 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_53_49 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_31 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_54_45 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_55_26 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_55_37 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_56_03 PM.png",
  "/jumia/Jumia clone - Google Chrome 3_15_2024 3_56_05 PM.png",
]

const facebookImages = [
    "/facebook/Jumia clone - Google Chrome 3_15_2024 3_59_14 PM.png",
    "/facebook/Jumia clone - Google Chrome 3_15_2024 3_59_38 PM.png",
    "/facebook/Jumia clone - Google Chrome 3_15_2024 3_59_56 PM.png",
    "/facebook/Jumia clone - Google Chrome 3_15_2024 4_00_22 PM.png",
    "/facebook/Jumia clone - Google Chrome 3_15_2024 4_00_32 PM.png",
   
  ]

  const huluImages = [
    "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_28 PM.png",
    "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_37 PM.png",
    "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_49 PM.png",
    "/hulu-clone/Jumia clone - Google Chrome 3_15_2024 4_02_58 PM.png",
   
  ]

  
const huluWebImages = [
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_15_01 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_15_10 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_15_17 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_15_59 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_16_00 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_16_07 PM.png",
    "/hulu-web/Hulu website - Google Chrome 3_15_2024 6_16_16 PM.png",
  
  ]
  

export default function Projects({}: Props) {
  return (
    <div className="w-full min-h-screen pt-20">
        <p className="uppercase text-xs w-full tracking-[7px] text-center">my projects</p>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-2 lg:gap-5 px-4 sm:px-6 lg:px-8 xl:px-10">

        <Project images={jumiaImages} des="this is a simple clone of the jumia website."/>
        <Project images={facebookImages} des="this is a simple clone of the facebook website."/>
        <Project images={huluImages} des="this is a simple clone of the facebook website."/>
        <Project images={huluWebImages} des="this is a simple clone of the facebook website."/>
        </div>
    </div>
  )
}