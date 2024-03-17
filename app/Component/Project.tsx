import Image from "next/image"
import ProjectImages from "./ProjectImages"

type Props = {
    images: string[],
    des: string,
    live?: string,
    github?: string
}

export default function Project({images, des, live, github}: Props) {
  return (
    <article className="w-full overflow-hidden cursor-pointer">
        <ProjectImages slideShowImages={images} />
        <p>
            {des}
        </p>
    </article>
  )
}