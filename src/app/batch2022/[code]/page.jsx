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
      <div className="text-center p-6 bg-white/90 rounded-xl border border-pink-200 max-w-md shadow-lg animate-pulse">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-pink-200 animate-bounce" />
        </div>
        <p className="text-lg text-pink-800 font-medium">
          Preparing your personalized farewell...
        </p>
        <p className="mt-2 text-sm text-pink-600">Just a moment while we add the magic ✨</p>
      </div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col items-center justify-start p-4 relative overflow-hidden">
    <Head>
      <title>A Gift For {profile.name}</title>
      {profile.isCrush && <meta name="theme-color" content="#fdf2f8" />}
    </Head>

    {/* Floating decorative elements */}
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            borderRadius: '50%',
            background: profile.isCrush 
              ? 'radial-gradient(circle, rgba(244,63,94,0.3) 0%, rgba(255,255,255,0) 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(255,255,255,0) 70%)',
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
        />
      ))}
    </div>

    {/* Hidden audio element */}
    <audio ref={audioRef} src={profile.music} loop />

    {/* Farewell Heading */}
    <div className="text-center px-4 py-8 z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500 drop-shadow-lg mb-2 animate-float-in">
        💖 College Farewell Memories 💖
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-600 font-medium">
        A digital surprise crafted with love, laughter & a few tears...
      </p>
      <p className="text-sm text-gray-500 mt-4">
        BCA Batch 2022–2025 • Government Degree College, Handwara
      </p>
      <div className="mt-6 flex justify-center">
        <div className="animate-bounce bg-white/80 p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Gift Box Container */}
    <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
      {/* Gift Box */}
      <div
        ref={giftBoxRef}
        className={`
          relative w-72 h-72 sm:w-64 sm:h-64 mx-auto
          cursor-pointer transition-all duration-700 ease-in-out
          ${isOpen ? "scale-0 rotate-12" : "scale-100 hover:scale-110"}
          transform-gpu
        `}
        onClick={handleOpenGift}
      >
        {/* Gift box lid */}
        <div
          className={`
            absolute top-0 left-0 w-full h-20 
            ${profile.isCrush ? "bg-rose-600" : "bg-blue-600"}
            rounded-t-xl shadow-2xl transform origin-bottom transition-all duration-500 
            ${isOpen ? "rotate-[60deg] -translate-y-4" : "rotate-0"}
            group-hover:shadow-lg
          `}
          style={{ zIndex: 2 }}
        >
          <div className="absolute bottom-0 left-1/2 w-10 h-10 bg-white/20 rounded-full transform -translate-x-1/2 translate-y-1/2 shadow-inner flex items-center justify-center">
            <div className="w-6 h-6 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Gift box body */}
        <div
          className={`
            absolute top-20 left-0 w-full h-52 
            ${profile.isCrush ? "bg-rose-500" : "bg-blue-500"}
            rounded-b-xl shadow-lg flex items-center justify-center
            transition-all duration-500 ease-in-out
            group-hover:shadow-xl
          `}
          style={{ zIndex: 1 }}
        >
          <div className="text-white text-center px-4 transform transition-transform duration-300 group-hover:scale-105">
            <p className="text-3xl font-bold mb-3 tracking-wide animate-pulse-slow">
              {profile.emoji}
            </p>
            <p className="text-xl font-semibold mb-1">For {profile.name}</p>
            <p className="text-sm opacity-90 italic mt-2">
              Click to open your special gift
            </p>
          </div>
        </div>

        {/* Ribbon */}
        <div
          className="absolute top-20 left-0 w-full h-1.5 bg-white/30 shadow-sm"
          style={{ zIndex: 3 }}
        />
        <div
          className="absolute top-20 left-1/2 w-1.5 h-52 bg-white/30 transform -translate-x-1/2 shadow-sm"
          style={{ zIndex: 3 }}
        />
        
        {/* Shine effect */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ zIndex: 4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Confetti particles */}
      {isOpen && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                backgroundColor: profile.isCrush
                  ? `hsl(${Math.random() * 60 + 330}, 100%, 70%)`
                  : `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      )}
    </div>

    {/* Content Reveal */}
    {showContent && (
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm 
          transition-all duration-500 ${showContent ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setShowContent(false)}
      >
        <div
          className={`
            relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-2
            ${profile.isCrush
              ? "bg-gradient-to-br from-rose-50 to-pink-100 border-rose-300"
              : "bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-300"
            }
            transform transition-all duration-500
            ${showContent ? "scale-100 opacity-100" : "scale-95 opacity-0"}
            animate-content-pop
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowContent(false)}
            className={`absolute top-4 right-4 p-2 rounded-full z-20 shadow-md transition-all
              ${profile.isCrush ? "bg-rose-100 hover:bg-rose-200 text-rose-700" : "bg-blue-100 hover:bg-blue-200 text-blue-700"}
              hover:scale-110
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Photo Section */}
          {profile.photos && (
            <div className="h-60 bg-gray-200 relative overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <img
                src={profile.photos[0]}
                alt={`Special memory with ${profile.name}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {profile.isCrush && (
                <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-center">
                  <p className="text-white font-bold text-xl drop-shadow-lg">
                    For My Special Someone
                  </p>
                  <p className="text-rose-100 text-sm mt-1">
                    {profile.name}, you&aposre unforgettable ❤️
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Message Content */}
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h1
                className={`text-4xl font-extrabold mb-2 leading-tight tracking-tight
                  ${profile.isCrush ? "text-rose-600" : "text-blue-600"}
                  animate-text-focus
                `}
              >
                {profile.name} {profile.emoji}
              </h1>
              <div
                className={`w-20 h-1 mx-auto rounded-full mb-4 ${
                  profile.isCrush ? "bg-rose-300" : "bg-blue-300"
                }`}
              />
              <p className="text-gray-500 italic">
                A message from your college friend...
              </p>
            </div>

            <div
              className={`
                p-6 rounded-xl whitespace-pre-line text-base leading-relaxed shadow-inner
                ${profile.isCrush
                  ? "bg-rose-50/90 text-rose-900 border border-rose-200"
                  : "bg-blue-50/90 text-gray-800 border border-blue-200"
                }
                font-medium
                transition-all duration-300 hover:shadow-md
              `}
            >
              {profile.message}
            </div>

            {/* Interactive Elements */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* Music Controls */}
              <button
                onClick={() =>
                  audioRef.current?.paused
                    ? audioRef.current.play()
                    : audioRef.current?.pause()
                }
                className={`px-6 py-3 rounded-full font-medium flex items-center shadow-lg transition-all
                  ${profile.isCrush
                    ? "bg-rose-500 hover:bg-rose-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                  }
                  hover:shadow-xl transform hover:-translate-y-0.5
                  flex-1 max-w-xs justify-center
                `}
              >
                {audioRef.current?.paused ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Play Your Song
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pause Music
                  </>
                )}
              </button>

              {/* Download Memory Button */}
              <button
                onClick={() => {
                  // Add download functionality
                }}
                className={`px-6 py-3 rounded-full font-medium flex items-center shadow-lg transition-all
                  bg-white border ${
                    profile.isCrush
                      ? "border-rose-300 text-rose-600 hover:bg-rose-50"
                      : "border-blue-300 text-blue-600 hover:bg-blue-50"
                  }
                  hover:shadow-xl transform hover:-translate-y-0.5
                  flex-1 max-w-xs justify-center
                `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Save This Memory
              </button>
            </div>

            {/* Footer Signature */}
            <div className="mt-8 text-center">
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full ${
                  profile.isCrush ? "bg-rose-100" : "bg-blue-100"
                }`}
              >
                <p className="text-sm text-gray-600">
                  Created with love by{" "}
                  <span className="font-bold text-blue-600">Aamir Hussain</span>
                </p>
                <span className="ml-2 text-pink-500">❤️</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">
                P.S. I handpicked this song just for you... hope it brings back memories 🎶
              </p>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Floating hearts for crush */}
    {profile.isCrush && showContent && (
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
              filter: `blur(${Math.random() * 2}px)`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          >
            {['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>
    )}

    <style jsx global>{`
      @keyframes float {
        0% {
          transform: translateY(100vh) rotate(0deg) scale(0.5);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translateY(-20vh) rotate(360deg) scale(1.2);
          opacity: 0;
        }
      }
      @keyframes confetti {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
      @keyframes float-in {
        0% {
          transform: translateY(-20px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes pulse-slow {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
      @keyframes text-focus {
        0% {
          letter-spacing: -0.5px;
          opacity: 0.8;
        }
        50% {
          letter-spacing: 1px;
          opacity: 1;
        }
        100% {
          letter-spacing: -0.5px;
          opacity: 0.8;
        }
      }
      @keyframes content-pop {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        50% {
          transform: scale(1.02);
          opacity: 1;
        }
        100% {
          transform: scale(1);
        }
      }
      .animate-float {
        animation: float linear forwards;
      }
      .animate-confetti {
        animation: confetti linear forwards;
      }
      .animate-float-in {
        animation: float-in 0.6s ease-out forwards;
      }
      .animate-pulse-slow {
        animation: pulse-slow 2s infinite;
      }
      .animate-text-focus {
        animation: text-focus 3s ease-in-out infinite;
      }
      .animate-content-pop {
        animation: content-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }
    `}</style>
  </div>
);
}
