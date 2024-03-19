import { LuCopyright } from "react-icons/lu";

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="h-[100px] bg-[#242424] dark:bg-slate-50 text-slate-50 dark:text-[#242424] flex items-center justify-between px-3 sm:px-5 lg:px-7 xl:px-10">

      <div className="flex items-start space-x-2">
         <LuCopyright className="text-sm" />
         <p className="hover:underline cursor-pointer">
          Whoro Ochuko, {new Date().getFullYear()}
         </p>
      </div>

      <div className="flex items-center space-x-3">
        <p className="text-xs cursor-pointer">
          {"Let's connect:"}
        </p>
        <a className="text-xs tracking-widest hover:underline" href='https://github.com/CK-codemax' target="_blank" rel="noopener noreferrer">Github</a>
        <a className="text-xs tracking-widest hover:underline" href='https://www.linkedin.com/in/ochuko-whoro-214b6328b/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="text-xs tracking-widest hover:underline" href='https://twitter.com/OchukoWH' target="_blank" rel="noopener noreferrer">Twitter</a>
  
      </div>
    </div>
  )
}