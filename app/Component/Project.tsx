import ProjectImages from "./ProjectImages"

type Props = {
    images: string[],
    des: string,
    live?: string,
    github?: string,
    name?: string,
}

export default function Project({images, des, live, github, name, }: Props) {
  return (
    <article className="w-full group hover:bg-gray-900/20 dark:hover:bg-gray-50/20 transition-all duration-300 ease-in-out shadow-sm shadow-slate-400 dark:shadow-slate-200 rounded-md px-2 py-4 overflow-hidden flex flex-col space-y-3 cursor-pointer">
      <p className="uppercase group-hover:animate-bounce text-xs w-full tracking-[7px] text-center">{name}</p>
        <ProjectImages slideShowImages={images} />
        <p className="w-full sm:w-[75%] mx-auto lg:w-[65%] py-3">
            {des}
        </p>
        <div className="flex items-center justify-between w-full sm:w-[75%] mx-auto lg:w-[65%]">
          <a className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={`${live}`} target="_blank" rel="noopener noreferrer">View Live</a>
          <a className="rounded-md tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out" href={`${github}`} target="_blank" rel="noopener noreferrer">Github Repo</a>
        </div>
    </article>
  )
}