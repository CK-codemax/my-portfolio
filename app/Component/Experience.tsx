import ResumeModal from "./ResumeModal"

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className="relative w-full min-h-screen pt-20">
    <p className="uppercase text-xs w-full tracking-[7px] text-center">experience</p>
    <p className="capitalize text-xs w-full mt-3 text-center">slide through the {"project's images"} to see more images of the project</p>
    <ResumeModal>
       <ResumeModal.Open />
       <ResumeModal.Window />
    </ResumeModal>

    <a download={'Ochuko Whoro Resume.jpg'} href="/Ochuko whoro.jpg" className="rounded-md tracking-wide sm:tracking-widest cursor-pointer absolute bottom-8 right-1 sm:right-12 text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out">download my resume</a>
</div>
  )
}