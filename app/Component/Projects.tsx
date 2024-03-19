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
        <p className="capitalize text-xs w-full mt-3 text-center">slide through the {"project's images"} to see more images of the project</p>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 xl:px-10">

        <Project name="jumia clone" github="https://github.com/CK-codemax/jumia-clone" live="https://jumia-clone-sl3f.vercel.app" images={jumiaImages} des="This application is a clone of the popular online retail application, Jumia in Nigeria and other african countries. Users can add products to their cart, choose a preferred currency, checkout their cart using stripe payment. Users can also get a catalog of all their orders. "/>
        <Project name="facebook clone" github="https://github.com/CK-codemax/facebook-new" live="https://facebook-new-ten.vercel.app" images={facebookImages} des="This app is a clone of facebook for the web. This app gives users the ability to create posts, comment on posts, like and unlike posts. Users can also delete the posts and comments they made. I built this application to learn more about images input and also about sending data across the web."/>
        <Project name="hulu clone" github="https://github.com/CK-codemax/hulu-clone-co" live="https://hulu-clone-co.vercel.app" images={huluImages} des="This application is a movie database website. It has listings of the top and trending movies in each genre. Users can also click on a movie to go to the movie details page. Users can also query movies, TVseries and movie stars using the search feature present on this application. I also added related movies and TVseries in each movie detail page. "/>
        <Project name="hulu website" github="https://github.com/CK-codemax/hulu-website" live="https://hulu-website-three.vercel.app" images={huluWebImages} des="This website is a clone of the official Hulu website. I got inspired when I visited the Hulu website and I decided to make a clone and enhance my skills."/>
        </div>
    </div>
  )
}