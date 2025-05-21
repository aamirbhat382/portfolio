// pages/farewell/[code].js
"use client";
import { useState, useEffect, useRef } from "react";

import Head from "next/head";
import { useParams } from "next/navigation";

// Secret codes database
const classmates = {
  owi122: {
    name: "Owais",
    message: `Dear Owais, 🚗

Trip planner, driver, aur silent jokes ke expert!
Tere bina to college ka har safar adhura lagta.
3 baje raat ke plans ya exam ke din ki rides — sab yaad rahenge!

Tere jaise calm log kam milte hain. Salute!`,
    emoji: "🗺️",
    bgColor: "from-blue-100 to-cyan-100",
    cardColor: "bg-white/90 border-blue-200",
    music:
      "https://pagalfree.com/musics/128-Dil Diyan Gallan - Tiger Zinda Hai 128 Kbps.mp3",
  },
  aad786: {
    name: "Aadil",
    message: `Dear Aadil, 😎

Chhota packet, bada dhamaka!
Teri hasi aur funny andaaz ne hamesha sabka mood set kiya.

Tu har waqt hero lagta tha — chhoti height ke saath bada confidence!
Tu gaya to class ka charm bhi saath le gaya!`,
    emoji: "🔥",
    bgColor: "from-yellow-100 to-orange-100",
    cardColor: "bg-white/90 border-yellow-200",
    music:
      "https://pagalfree.com/musics/128-Badtameez Dil - Yeh Jawaani Hai Deewani 128 Kbps.mp3",
  },
  sjd421: {
    name: "Sajid",
    message: `Dear Sajid, 😤📚

Exam ke pehle panic mode aur phir last minute plan badalna – classic Sajid!
Lamba kad aur tez soch, par kabhi kabhi gussa bhi jaldi aata tha 😅

Phir bhi bhai, tu bina kahe bhi sabka khayal rakhta tha. Respect!`,
    emoji: "📖",
    bgColor: "from-red-100 to-yellow-100",
    cardColor: "bg-white/90 border-red-200",
    music:
      "https://pagalfree.com/musics/128-Kabira - Yeh Jawaani Hai Deewani 128 Kbps.mp3",
  },
  ksr999: {
    name: "Kasir",
    message: `Dear Kasir, 💪

Fitness freak + smart brain combo.
Tujhse zyada discipline kisi mein nahi tha.

Tu har waqt alert, har topic mein perfect. Class ka health-conscious boss!
Stay ripped, stay wise!`,
    emoji: "🏋️",
    bgColor: "from-green-100 to-teal-100",
    cardColor: "bg-white/90 border-green-200",
    music:
      "https://pagalfree.com/musics/128-Zindagi Do Pal Ki - Kites 128 Kbps.mp3",
  },
  mr8x1: {
    name: "Maroof",
    message: `Dear Maroof, 🧠

Silent genius ho tum — zyada bolte nahi, par kaam aisa karte ho ke sab dekhte reh jaayein.

Tere answers exam mein aur silence class mein – dono priceless the.
Tum jaise log chhupke duniya badal dete hain.`,
    emoji: "🧘",
    bgColor: "from-gray-100 to-blue-50",
    cardColor: "bg-white/90 border-gray-300",
    music:
      "https://hindi2.djpunjab.app/load/nlVhIBtflUFYrB9euQeUvg==/Chup%20Chup%20Khade%20Ho%20Zaroor%20Koi%20Baat%20Hai.mp3",
  },
  kmrn520: {
    name: "Kamran",
    message: `Dear Kamran, 💘

Tu class ka asli aashiq tha!
Dil mein ishq, aankhon mein dreams — har pal kisi pe marne ka mood 😅

Teri filmy style aur love waale poses kabhi nahi bhoolenge.
Class ki jaan, love ka shaan — tu tha original lover boy!

Dil se dua, tu apne ishq mein hamesha kamyab rahe ❤️`,
    emoji: "💌",
    bgColor: "from-pink-100 to-red-100",
    cardColor: "bg-white/90 border-pink-200",
    music:
      "https://pagalfree.com/musics/128-Tujhe Dekha To - Dilwale Dulhania Le Jayenge 128 Kbps.mp3",
  },
  jnaid786: {
    name: "Junaid",
    message: `Dear Junaid, 🌹

Tu tha silent lover, par jazbaat gehre the...
Class mein tu shayad kam bolta, par uski aankhon mein duniya basa rakhi thi 😌

Tere love mein ek depth thi — jise mehsoos kiya jaa sakta tha, bataya nahi jaa sakta.
Bas yeh dua hai bhai, teri mohabbat hamesha sacchi rahe. ❤️‍🩹`,
    emoji: "🥀",
    bgColor: "from-indigo-100 to-violet-100",
    cardColor: "bg-white/90 border-indigo-200",
    music:
      "https://pagalfree.com/musics/128-Tere Mere Sapne Ab Ek Rang Hain - Guide (1965) 128 Kbps.mp3",
  },
  fsil007: {
    name: "FASIL",
    message: `Dear Fasil, 😎

Tera swag alag tha — har ladki se baat karne ka ek naya style!
Tu mera close dost, jiske bina class boring lagti thi.

Apne jokes, mastiyaan, aur ladkiyon se dosti ka level hi next tha 😆  
Tere saath har lamha full entertaining tha — ek dum Netflix + Mirzapur combo!

Dost tu hamesha yaad rahega... aur tujhe toh har ladki bhi yaad rakhegi 😉`,
    emoji: "🎩",
    bgColor: "from-yellow-100 to-orange-100",
    cardColor: "bg-white/90 border-yellow-300",
    music:
      "https://pagalfree.com/musics/128-Tera Yaar Hoon Main - Sonu Ke Titu Ki Sweety 128 Kbps.mp3",
  },
  amr999: {
    name: "Aamir",
    message: `Dear Aamir, 👨‍💻

Class ka asli Hacker... sabka savior — bina shor ke kaam karne wala banda.  
Jab sab thak gaye, tu code likh raha hota tha. Jab sab haar gaye, tu kisi ko quietly guide kar raha hota tha.

Aur ek dil ki baat — jisey tu kabhi keh nahi paaya, par har coding help mein chhupa diya... 💌  
Shayad usse kabhi pata chale — ke uski success ke peeche bhi ek naam tha... tera.

Tere jaise log kam milte hain — aur tere jaise dosti kabhi bhooli nahi jaati.`,
    emoji: "🖥️",
    bgColor: "from-indigo-100 to-blue-100",
    cardColor: "bg-white/90 border-indigo-300",
    music:
      "https://pagalfree.com/musics/128-Pehla Nasha - Jo Jeeta Wohi Sikandar 128 Kbps.mp3",
  },
  shk786: {
    name: "Shakir",
    message: `Dear Shakir, ☪️👀

Tu toh hamara rehnuma tha – har waqt deen ki baat,
Par saath hi class ki har movement par nazar bhi rehti thi 😅

Tu gaya toh class ka moral compass chala gaya bro!
Stay blessed always.`,
    emoji: "🕌",
    bgColor: "from-purple-100 to-indigo-100",
    cardColor: "bg-white/90 border-purple-200",
    music: "https://pagalfree.com/musics/128-Arziyaan - Jigariyaa 128 Kbps.mp3",
  },
  mhn314: {
    name: "Mehnaz",
    message: `Dear Mehnaz, ➗

Maths ki magician! Tere bina calculator bhi sochta hoga 🤯

Class ki sabse zyada focused student thi tu. 
Aisi concentration sab mein ho toh duniya top kare!

Numbers will miss you. Hum bhi.`,
    emoji: "📐",
    bgColor: "from-pink-100 to-purple-100",
    cardColor: "bg-white/90 border-pink-200",
    music:
      "https://pagalfree.com/musics/128-Jashn E Bahaaraa - Jodhaa Akbar 128 Kbps.mp3",
  },
  sbya143: {
    name: "Sabiya",
    message: `Dear Sabiya, 💖

Teri woh chhoti si height aur badi si smile...
Aur jab tu mujhe coding mein thoda hit karti thi — wo moments sabse pyare the.

Main kabhi keh nahi paya... par har waqt tujhe help karna mera khushi ka reason tha.
Tere bina college nahi, zindagi bhi adhoori lagti hai.

Kabhi mere feelings ko bhi debug kar lena... 💌`,

    emoji: "🌹",
    isCrush: true,
    bgColor: "from-pink-100 to-rose-100",
    cardColor: "bg-white/95 border-2 border-pink-300",
    music:
      "https://pagalfree.com/musics/128-Hawayein (Film Version) - Jab Harry Met Sejal 128 Kbps.mp3",
    // photos: ["/team/sabiya.jpg", "/team/sabiya.jpg"],
  },
};

export default function FarewellPage() {
  const { code } = useParams();
  const [profile, setProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef(null);
  const giftBoxRef = useRef(null);

  // Load profile
  useEffect(() => {
    if (code && classmates[code]) {
      setProfile(classmates[code]);
    }
  }, [code]);

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Play audio when gift opens
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((e) => console.log("Playback failed:", e));
      }
      // Show content after animation
      setTimeout(() => setShowContent(true), 1000);
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
        <div className="text-center p-6 bg-white/90 rounded-xl border border-pink-200 max-w-md">
          <p className="text-lg text-pink-800">
            Loading your special farewell...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center p-4">
      <Head>
        <title>A Gift For {profile.name}</title>
        {profile.isCrush && <meta name="theme-color" content="#fdf2f8" />}
      </Head>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={profile.music} loop />

      {/* Farewell Heading - OUTSIDE the gift box */}
      <div className="text-center px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500 drop-shadow-lg">
          💖 College Farewell Memories 💖
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600">
          A digital surprise crafted with love, laughter & a few tears...
        </p>
        <p className="text-sm text-gray-400 italic">
          BCA Batch 2022–2025 • Government Degree College, Handwara
        </p>
        <p className="text-sm text-gray-400 italic mt-1">
          (Click your gift box to reveal your personal farewell 🎁)
        </p>
      </div>

      {/* Gift Box */}
      <div
        ref={giftBoxRef}
        className={`
    relative w-64 h-64 sm:w-56 sm:h-56 mx-auto
    cursor-pointer transition-all duration-700 ease-in-out
    ${
      isOpen
        ? "scale-0 rotate-6"
        : "scale-100 hover:scale-105 hover:-translate-y-1"
    }
  `}
        onClick={handleOpenGift}
      >
        {/* Gift box lid */}
        <div
          className={`
      absolute top-0 left-0 w-full h-16 
      ${profile.isCrush ? "bg-rose-600" : "bg-blue-600"}
      rounded-t-xl shadow-xl transform origin-bottom transition-all duration-500 
      ${isOpen ? "rotate-[120deg]" : "rotate-0"}
    `}
          style={{ zIndex: 2 }}
        >
          <div className="absolute bottom-0 left-1/2 w-8 h-8 bg-rose-700 rounded-full transform -translate-x-1/2 translate-y-1/2 shadow" />
        </div>

        {/* Gift box body */}
        <div
          className={`
      absolute top-8 left-0 w-full h-48 
      ${profile.isCrush ? "bg-rose-500" : "bg-blue-500"}
      rounded-b-xl shadow-md flex items-center justify-center
      transition-all duration-500 ease-in-out
    `}
          style={{ zIndex: 1 }}
        >
          <div className="text-white text-center px-2">
            <p className="text-2xl font-semibold mb-2 tracking-wide">
              For {profile.name}
            </p>
            <p className="text-sm opacity-90 italic">
              Click to open your gift 🎁
            </p>
          </div>
        </div>

        {/* Ribbon */}
        <div
          className="absolute top-8 left-0 w-full h-1 bg-rose-300 shadow-sm"
          style={{ zIndex: 3 }}
        />
        <div
          className="absolute top-8 left-1/2 w-1 h-48 bg-rose-300 transform -translate-x-1/2 shadow-sm"
          style={{ zIndex: 3 }}
        />
      </div>

      {/* Content Reveal */}
      {showContent && (
        <div
          className={`fixed inset-0 z-10 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm 
      transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
        >
          <div
            className={`
        relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border
        ${
          profile.isCrush
            ? "bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200"
            : "bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-200"
        }
      `}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContent(false)}
              className="absolute top-3 right-3 text-rose-600 bg-white/90 hover:bg-white p-2 rounded-full z-20 shadow-md"
            >
              ✕
            </button>

            {/* Crush-specific Photo */}
            {profile.isCrush && profile.photos && (
              <div className="h-48 bg-rose-200 relative overflow-hidden rounded-t-3xl">
                <img
                  src={profile.photos[0]}
                  alt={`Special memory with ${profile.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">
                    For My Special Someone
                  </p>
                </div>
              </div>
            )}

            {/* Message Content */}
            <div className="p-6">
              <h1
                className={`text-3xl font-bold text-center mb-3 leading-snug tracking-tight 
            ${profile.isCrush ? "text-rose-600" : "text-blue-600"}`}
              >
                {profile.name} {profile.emoji}
              </h1>

              <div
                className={`
            p-4 rounded-xl whitespace-pre-line text-sm tracking-wide leading-relaxed shadow-sm
            ${
              profile.isCrush
                ? "bg-rose-50/80 text-rose-900"
                : "bg-blue-50/80 text-gray-800"
            }
          `}
              >
                {profile.message}
              </div>

              {/* Music Controls */}
              <div className="flex justify-center mt-5">
                <button
                  onClick={() =>
                    audioRef.current?.paused
                      ? audioRef.current.play()
                      : audioRef.current.pause()
                  }
                  className={`px-5 py-2.5 text-sm rounded-full font-medium flex items-center shadow-md transition-all
              ${
                profile.isCrush
                  ? "bg-rose-500 hover:bg-rose-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
                >
                  {audioRef.current?.paused ? (
                    <>
                      <span className="mr-2">▶</span> Play Music
                    </>
                  ) : (
                    <>
                      <span className="mr-2">❚❚</span> Pause
                    </>
                  )}
                </button>
              </div>

              {/* Footer Signature */}
              <div className="mt-6 text-center text-sm text-gray-500">
                — A surprise from{" "}
                <span className="font-semibold text-blue-600">
                  Aamir Hussain
                </span>{" "}
                💌 <br />
                <span className="text-xs text-gray-400 italic">
                  (P.S. I even added your background song... just for you 🎵)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating hearts for crush */}
      {profile.isCrush && showContent && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-400 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 6}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  );
}