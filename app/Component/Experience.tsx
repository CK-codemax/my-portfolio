import { FaRegEye } from "react-icons/fa";
import ProjectImages from "./ProjectImages";
import { IoMdDownload } from "react-icons/io";

const unipaysImages = [
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_19_35 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_20_31 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_20_44 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_21_09 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_21_21 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_21_34 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_21_53 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_22_10 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_22_25 AM.png",
  "/unipays/UNIPAYS - Google Chrome 3_19_2024 3_22_46 AM.png",
];

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="relative w-full min-h-screen sm:min-h-[75vh] lg:min-h-[50vh] xl:min-h-screen pt-20">
      <p className="uppercase text-xs w-full tracking-[7px] text-center">
        experience
      </p>
      <div className="flex w-full justify-between items-center p-3 lg:px-10">
        <a
          className="rounded-md flex items-center space-x-2 tracking-widest text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
          href="https://docs.google.com/document/d/1nHIIvgfBjdXZ6ouX_161RE8LuE8L_r8BHJAbKvNW8j4/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEye className="text-sm" />
          <span>resume</span>
        </a>
        <a
          download={"Ochuko Whoro Resume.pdf"}
          href="/OCHUKO_WHORO_SAMPLE (7).pdf"
          className="rounded-md tracking-wide sm:tracking-widest flex items-center space-x-1 cursor-pointer text-xs uppercase border dark:border-gray-200 border-[#242424] px-2 sm:px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
        >
          <IoMdDownload className="text-sm" />
          <span>resume</span>
        </a>
      </div>
      <p className="capitalize text-xs w-full my-3 text-center">
        Here is a brief summary of my experience as a fullstack developer
      </p>

      <div className="px-2 flex flex-col space-y-3 lg:px-10 lg:grid lg:space-y-0 lg:items-center lg:grid-cols-2 lg:gap-10">
        <div className="flex px-2 flex-col space-y-2">
          <p className="uppercase text-xs w-full text-wrap tracking-widest">
            Team Lead and main developer at team unipays at the uiresdev
            hackathon
          </p>
          <p className="text-xs">
            At UNIPAYS, as the team lead and main developer, I was involved in
            building the UI and backend components of the FinTech application,
            UNIPAYS, which intends to solve problems revolving around{" "}
            {"student's"} fees payment. The process of developing this
            application ran for 3 weeks. In this time, I kept my team motivated
            and always delivered my work on time. Even though we {"didn't"} win
            the hackathon, the experiences we gained was invaluable.{" "}
            <span className="underline">
              Please checkout the UNIPAYS app with the following logins.
            </span>{" "}
            Checkout our Github repository to get the full functionality of this
            application.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <p className="uppercase text-xs w-full tracking-[7px] text-center">
                account1
              </p>
              <p className="text-xs">Email : ochuko@gmail.com </p>
              <p className="text-xs">Password : try1 </p>
              <p className="text-xs">Pin : 1111</p>
            </div>

            <div className="flex flex-col space-y-1">
              <p className="uppercase text-xs w-full tracking-[7px] text-center">
                account2
              </p>
              <p className="text-xs">Email : goodkelv@gmail.com </p>
              <p className="text-xs">Password : kvngd</p>
              <p className="text-xs">Pin : 2222</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a
              className="rounded-md tracking-widest cursor-pointer text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
              href="https://ck-codemax.github.io/UIREesdevHack-UNIPAYS/UNIPAYS-APP-MAIN/"
              target="_blank"
              rel="noopener noreferrer"
            >
              uinpays live
            </a>
            <a
              className="rounded-md tracking-widest cursor-pointer text-xs uppercase border dark:border-gray-200 border-[#242424] px-5 py-2 hover:bg-gray-500 dark:hover:bg-gray-200  dark:text-gray-100 dark:hover:text-gray-900 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out"
              href="https://github.com/CK-codemax/UIREesdevHack-UNIPAYS"
              target="_blank"
              rel="noopener noreferrer"
            >
              github repo
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-3">
          <p className="capitalize text-xs w-full mt-3 px-3 text-center">
            slide through the images to see more images of the project
          </p>
          <ProjectImages slideShowImages={unipaysImages} />
        </div>
      </div>
    </div>
  );
}
