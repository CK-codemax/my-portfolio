"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
// export default function ChangeTheme() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   const currentTheme = theme === "system" ? systemTheme : theme;
//   return (
//     <>
//       {mounted &&
//         (currentTheme === "dark" ? (
//           <div
//             className="px-4 py-2 absolute rounded-full top-4 z-50 text-white cursor-pointer bg-gray-800 hover:bg-black hover:scale-105 transition-all duration-300 ease-out "
//             onClick={() => setTheme("light")}
//           >Change Theme</div>
//         ) : (
//           <div
//             className="px-4 py-2 absolute rounded-full top-4 z-50 text-white cursor-pointer bg-gray-800 hover:bg-black hover:scale-105 transition-all duration-300 ease-out "
//             onClick={() => setTheme("dark")}
//           >Change Theme</div>
//         ))}

//         {/* <div className="absolute top-0 w-[40px] p-[2px] z-50 bg-gray-700 rounded-full">
//             <div onClick={() => handleChangeTheme()} className={`bg-black rounded-full w-5 h-5 transition-all duration-500 ease-in-out ${currentTheme === 'light' ? 'translate-x-0' : 'translate-x-[100%]'}`} />
//         </div> */}
//     </>
//   );
// }


type Props = {}

export default function ChangeTheme({}: Props) {

      const { systemTheme, theme, setTheme } = useTheme();
      const [mounted, setMounted] = useState(false);
    
      useEffect(() => setMounted(true), []);
    
      const currentTheme = theme === "system" ? systemTheme : theme;
      return (
        <>
          {mounted &&
            (currentTheme === "light" ? (
             <div className="w-[50px] group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-900 transition-all duration-300 ease-in-out">
              
             <FaMoon
                className="text-[28px] group-hover:text-[32px] transition-all duration-300 ease-in-out text-gray-200"
                onClick={() => setTheme("dark")}
                />
            </div> 
            ) : (
              <div className="w-[50px] group h-[50px] cursor-pointer flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out">

              <FaSun
                className="text-[28px] group-hover:text-[32px] transition-all duration-300 ease-in-out text-yellow-500"
                onClick={() => setTheme("light")}
                />
              </div>
            ))}
    
           
        </>
      );
    }