// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { motion as m } from "framer-motion";
//
// export default function Home() {
//   const router = useRouter();
//
//   return (
//     <m.div
//       initial={{ y: "100%" }}
//       animate={{ y: "0" }}
//       transition={{ duration: 0.75, ease: "easeOut" }}
//     >
//       <main className="flex flex-col h-screen items-center justify-center p-5 bg-stone-950 intro">
//         <Image
//           src="/eyes.gif"
//           width={300}
//           height={300}
//           className="mb-5"
//           alt="eyes gif"
//         />
//         <TypeAnimation
//           sequence={[
//             "Psssst!🫣",
//             180,
//             "Willkommen Benutzer 🇩🇪 ",
//             250,
//             "Добро пожаловать пользователь 🇷🇺",
//             420,
//             "ようこそユーザー 🇯🇵",
//             400,
//             " 🇮🇱משתמש ברוך הבא",
//             460,
//             "Benvenuto utente 🇮🇹",
//             500,
//             "Mholo 🇿🇦",
//             560,
//             "사용자를 환영합니다 🇰🇷",
//             540,
//             "Hola 🇪🇸",
//             420,
//             "Hello! 👋🏾",
//             400,
//             "We Move 🇳🇬",
//             280,
//             () => {
//               router.push("/booting");
//             },
//           ]}
//           wrapper="span"
//           speed={50}
//           style={{ fontSize: "2em", display: "inline-block" }}
//           className="font-handjet text-center text-white"
//         />
//       </main>
//     </m.div>
//   );
// }
