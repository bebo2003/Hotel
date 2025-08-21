import { FiSearch, FiMenu , FiChevronDown} from "react-icons/fi";
import { CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState , useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaBehance, FaPaperPlane } from "react-icons/fa6";
import { BsSun, BsMoon } from "react-icons/bs";

import logo from "../../assets/images/logo.png";
import img from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpeg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";
import img10 from "../../assets/images/10.jpg";
import img11 from "../../assets/images/11.jpg";
import img12 from "../../assets/images/12.jpeg";
import img13 from "../../assets/images/13.webp";
import img14 from "../../assets/images/14.jpeg";
import img15 from "../../assets/images/15.jpeg";
import img16 from "../../assets/images/16.jpg";
import img17 from "../../assets/images/17.jpg";
import img18 from "../../assets/images/18.jpg";
import img19 from "../../assets/images/19.jpg";
import img20 from "../../assets/images/20.jpg";
import img21 from "../../assets/images/21.jpg";
import img22 from "../../assets/images/22.jpg";
import img23 from "../../assets/images/23.jpg";
import "./Home.css";
import Test from "./circle design";

export default function Home() {
  
  const rooms = [
  {
    id: 1,
    title: "Deluxe Rooms",
    price: "$800 / Night",
    img: img3, // حط لينك الصورة هنا
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
  },
  {
    id: 2,
    title: "Junior Rooms",
    price: "$400 / Night",
    img:img4,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
  },
  {
    id: 3,
    title: "Family Rooms",
    price: "$600 / Night",
    img: img5,
    guests: "2 Guests",
    beds: "2 Beds",
    bath: "1 Bath",
  },
  {
    id: 4,
    title: "Single Rooms",
    price: "$700 / Night",
    img: img6,
    guests: "2 Guests",
    beds: "1 Bed",
    bath: "1 Bath",
  },
];

  const offers = [
    {
      id: 1,
      title: "Get 30% Off on Hotel Booking",
      discount: "30% Off",
      image:
        img10,
    },
    {
      id: 2,
      title: "Get 35% Off on Resort Booking",
      discount: "35% Off",
      image:
        img11,
    },
  ];

  const staffMembers = [
  {
    name: "Michael Dean",
    title: "Chef Master",
    image: img12,
  },
  {
    name: "Arnold Taylor",
    title: "Room Cleaner",
    image: img13,
  },
  {
    name: "Michael Dean",
    title: "Assistant Chef",
    image: img14,
  },
  {
    name: "Michael Dean",
    title: "Supervisor",
    image: img15,
  },
];



const articles = [
  {
    category: "Hotel",
    date: "January 16, 2024",
    author: "Admin",
    title: "Most Expensive Hotel Rooms In New York",
    excerpt: "Perspiciatis omnisite voluptates accusam tiume doloremque laudantium, totam aperiam",
    image: img16,
  },
  {
    category: "Room",
    date: "January 16, 2024",
    author: "Admin",
    title: "Our New Miami Beach Hotel Is Open",
    excerpt: "Perspiciatis omnisite voluptates accusam tiume doloremque laudantium, totam aperiam",
    image:img17,
  },
  {
    category: "Resort",
    date: "January 16, 2024",
    author: "Admin",
    title: "Guests Offers Exclusive Facilities To Services",
    excerpt: "Perspiciatis omnisite voluptates accusam tiume doloremque laudantium, totam aperiam",
    image: img18,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      type: "spring",
      bounce: 0.3,
    },
  }),
};

const roomImages = [
  img19,
  img20,
  // "https://via.placeholder.com/220x150?text=Instagram",
  img21,
  img22,
  img23,
];

const [isOpen, setIsOpen] = useState(false);
 const [darkMode, setDarkMode] = useState(false);

 const youtubeUrl = "https://www.youtube.com/watch?v=s5tz_8453go";

  
  const videoId = youtubeUrl.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
   const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
  <nav className="w-full fixed top-0 left-0 z-50 /10 backdrop-blur-md dark:bg-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <img src={logo} alt="Fixyland Logo" className="h-13 w-36" />

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium dark:text-white">
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Home <FiChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Pages <FiChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Rooms & Suites <FiChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Services <FiChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Blog <FiChevronDown />
          </li>
          <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
            Contact <FiChevronDown />
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl cursor-pointer dark:text-white"
          >
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>

          <FiSearch className="text-xl cursor-pointer dark:text-white hover:text-yellow-400" />
          <FiMenu className="text-2xl cursor-pointer dark:text-white hover:text-yellow-400 md:hidden" />
          <button
            className="hidden md:block px-5 py-2 rounded-md font-medium shadow-md transition dark:text-black"
            style={{ background: "#E6C466" }}
          >
            Book Your Stay →
          </button>
        </div>
      </div>
    </nav>



   <div
  className="relative w-full h-screen bg-cover bg-center dark:bg-black text-black dark:text-white"
  style={{
    backgroundImage: `url(${img})`
  }}
>
  {/* Layer أسود شفاف */}
  <div className="absolute inset-0" style={{ background: "#000000a3" }}></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-12">
    {/* Title */}
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
    >
      Book With Best{" "}
    </motion.h1>

    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
    >
      <span className="text-yellow-400">Luxury Hotel</span>
    </motion.h1>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
      rhoncus nunc. Duis egestas ex ante sed tincidunt.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
      className="mt-6 flex flex-col sm:flex-row gap-4"
    >
      <button
        className="hover:scale-105 transform transition px-6 py-3 rounded-lg font-medium text-black"
        style={{ background: "#E6c466" }}
      >
        Explore More
      </button>
      <button className="hover:scale-105 transform transition px-6 py-3 rounded-lg font-medium text-black bg-gray-200">
        Our Services
      </button>
    </motion.div>

    {/* Booking Form */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
      className="mt-12 w-full max-w-5xl bg-opacity-80 p-6 rounded-2xl flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center"
      style={{ background: "oklch(0.39 0.1 152.54 / 0.83)" }}
    >
      <input
        type="date"
        className="p-3 rounded-lg w-full sm:w-40 text-black"
        placeholder="Check In"
      />
      <input
        type="date"
        className="p-3 rounded-lg w-full sm:w-40 text-black"
        placeholder="Check Out"
      />
      <select className="p-3 rounded-lg w-full sm:w-32 text-black">
        <option>Room 1</option>
        <option>Room 2</option>
      </select>
      <select className="p-3 rounded-lg w-full sm:w-32 text-black">
        <option>Adults</option>
        <option>1 Adult</option>
        <option>2 Adults</option>
      </select>
      <select className="p-3 rounded-lg w-full sm:w-32 text-black">
        <option>Children</option>
        <option>1 Child</option>
        <option>2 Children</option>
      </select>
      <button
        className="hover:scale-105 transform transition px-6 py-3 rounded-lg font-semibold text-black"
        style={{ background: "#E6c466" }}
      >
        Check Now
      </button>
    </motion.div>
  </div>
</div>



    <section className="relative py-16 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
    
    {/* Left Image */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <img
        src={img2}
        alt="Luxury Hotel"
        className="rounded-2xl shadow-lg"
      />
      {/* Circular Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 shadow-md rounded-full p-1 text-center border bg-white"
      >
        <Test/>
      </motion.div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="text-sm font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-3 py-1 rounded">
        About Fixyland
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold">
        World Class Luxury Hotel <br /> and Resort Near City
      </h2>
      <p className="mt-4 leading-relaxed text-gray-600">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected 
        humour, or randomised words which don’t look even.
      </p>

      {/* Features with stagger animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {[
          "24 - Hours Emergency Service",
          "Comfortable Atmosphere",
          "Something by accident",
          "It is a Long Established fact",
          "Flexible and Cost-Effective",
          "Get Free Consultation Anytime",
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="text-green-600 w-5 h-5" />
            <span className="text-gray-700">{item}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Founder */}
      <motion.div
        initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 flex items-center gap-3"
      >
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Founder"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">Robert L. Robinson</h4>
          <p className="text-gray-500 text-sm">CEO & Founder</p>
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom Moving Banner */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-green-700">
    <div className="flex animate-marquee whitespace-nowrap text-white text-xl font-semibold py-3">
      <span className="mx-8 glow">✨ Luxury Hotel</span>
      <span className="mx-8 glow">🏖 Hotel & Resort</span>
      <span className="mx-8 glow">🌴 Holiday Booking</span>
      <span className="mx-8 glow">✨ Luxury Hotel</span>
      <span className="mx-8 glow">🏖 Hotel & Resort</span>
      <span className="mx-8 glow">🌴 Holiday Booking</span>
    </div>
  </div>

  {/* Animation CSS */}
  <style>{`
    .animate-marquee {
      display: inline-flex;
      animation: marquee 20s linear infinite;
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .glow {
      text-shadow: 0 0 5px #fff, 0 0 10px #ffd700, 0 0 20px #ffae00;
    }
  `}</style>
</section>



  <div className="py-10 ">
  <h2 className="text-center text-2xl font-bold mb-8">
    The Best Luxury Rooms And Suites
  </h2>

  <Swiper
    slidesPerView={3}
    spaceBetween={20}
    navigation={true}
    modules={[Navigation]}
    breakpoints={{
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="px-6"
  >
    {rooms.map((room, idx) => (
      <SwiperSlide key={room.id}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl overflow-hidden p-4 shadow-lg bg-white"
        >
          <div className="relative">
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-md text-sm">
              {room.price}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{room.title}</h3>
            <div className="flex text-sm mt-2 gap-4">
              <span>👥 {room.guests}</span>
              <span>🛏 {room.beds}</span>
              <span>🛁 {room.bath}</span>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
            <a
              href="#"
              className="text-green-600 text-sm font-medium mt-3 inline-block"
            >
              Read More →
            </a>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



<section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6 md:px-20">
{/* Left Side */}
<div>
<p className="text-green-600 font-semibold uppercase tracking-wide">
Hotel Services
</p>
<h2 className="text-4xl font-bold mt-2 mb-4">
Get The Best Hotel <br /> Fixyland Services
</h2>
<p className="text-gray-500 max-w-md mb-6">
Nulla vitae ex nunc. Morbi quis purus convallis, fermentum hioon
mentum volutpat design sodales purus. Nunc quis orn mauris etion eros
vulputate mattis Nulla vitae ex nunc.
</p>
<button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 font-medium">
View All
</button>
<div className="mt-10 text-sm ">
Call us Today: <span className="font-medium">(+1) 987 654 3210</span> OR
Email us: <span className="font-medium">Info@domain.com</span>
</div>
</div>


{/* Right Side */}
<div className="grid grid-cols-2 gap-6">
<div
  className="relative rounded-2xl shadow-md overflow-hidden transition duration-300 hover:scale-105"
  style={{
    background: `url(${img7})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* الطبقة الخضرا الشفافة */}
  <div className="absolute inset-0 bg-green-700/60"></div>

  {/* المحتوى فوق الطبقة */}
  <div className="relative text-white p-6">
    <div className="w-10 h-10 mb-4  rounded flex items-center justify-center">
      <span className="text-2xl">🏋️</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Fitness Center</h3>
    <p className="text-sm">
      Lorem ipsum dolor sit conse cteturs adipiscingrem ipsum dolor sit
      conse cteturs adipiscing
    </p>
  </div>
</div>



{/* Jacuzzi Card */}
{/* Jacuzzi Card */}
<div className="relative rounded-2xl shadow-md overflow-hidden group cursor-pointer">
  {/* الستارة الخضرا */}
  <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

  {/* المحتوى */}
  <div className="relative text-black group-hover:text-white p-6 transition duration-500">
    <div className="w-10 h-10 mb-4 /20 rounded flex items-center justify-center">
      <span className="text-2xl">🛁</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Jacuzzi</h3>
    <p className="text-sm">
      Lorem ipsum dolor sit conse cteturs adipiscingrem ipsum dolor sit
      conse cteturs adipiscing
    </p>
  </div>
</div>

{/* Swimming Pool Card */}
<div className="relative rounded-2xl shadow-md overflow-hidden group cursor-pointer">
  <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

  <div className="relative text-black group-hover:text-white p-6 transition duration-500">
    <div className="w-10 h-10 mb-4 /20 rounded flex items-center justify-center">
      <span className="text-2xl">🏊</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Swimming Pool</h3>
    <p className="text-sm">
      Lorem ipsum dolor sit conse cteturs adipiscingrem ipsum dolor sit
      conse cteturs adipiscing
    </p>
  </div>
</div>

{/* SPA Treatments Card */}
<div className="relative rounded-2xl shadow-md overflow-hidden group cursor-pointer">
  <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

  <div className="relative text-black group-hover:text-white p-6 transition duration-500">
    <div className="w-10 h-10 mb-4 /20 rounded flex items-center justify-center">
      <span className="text-2xl">💆</span>
    </div>
    <h3 className="text-lg font-semibold mb-2">SPA Treatments</h3>
    <p className="text-sm">
      Lorem ipsum dolor sit conse cteturs adipiscingrem ipsum dolor sit
      conse cteturs adipiscing
    </p>
  </div>
</div>


</div>
</section>


 <section className="relative w-full">
      {/* بانر الفيديو مع صورة ثابتة */}
      <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden">
        {/* الصورة كخلفية */}
        <img
          src={thumbnailUrl}
          alt="Video Thumbnail"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* زرار Play */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-transform"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Popup (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 aspect-video">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ✖
            </button>
            <iframe
              className="w-full h-full"
              src={`${embedUrl}?autoplay=1`}
              title="Popup Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>





  <section className="py-16 px-6 md:px-12 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* النص */}
        <div>
          <span className="text-green-600 font-semibold tracking-wide uppercase">
            Food & Drink
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 leading-snug">
            Quality Food And Drink <br /> Your Trip Are Enjoyable
          </h2>
          <p className=" mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            tortor at tellus feugiat congue quis ut nunc. Semper ac dolor vitae
            accumsan. Interdum hendrerit lacinia.
          </p>

          {/* Features */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold">
                  Free Breakfast, Tea & Coffee
                </h4>
                <p className=" text-sm">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold">
                  Quality Foods & Drink
                </h4>
                <p className=" text-sm">
                  It uses a dictionary of over 1 Latin words, combined with a
                  handful of model sentence structures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              <div>
                <h4 className="font-semibold">
                  Restorent & Bar
                </h4>
                <p className=" text-sm">
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
            </div>
          </div>

          {/* زرار */}
          <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Learn More Hotel →
          </button>
        </div>

        {/* الصور */}
   <div className="relative flex gap-5 justify-center">
  {/* الصورة الأولى (بتتحرك لفوق وتحت) */}
  <div className="w-1/2 flex justify-end">
    <img
      src={img8}
      alt="Food"
      className="rounded-2xl shadow-md object-cover w-full h-[300px] md:h-[400px] animate-updown"
    />
  </div>

  {/* الصورة الثانية (بتتحرك لتحت وفوق عكس الأولى) */}
  <div className="w-1/2 relative flex justify-start">
    <img
      src={img9}
      alt="Drink"
      className="rounded-2xl shadow-md object-cover w-full h-[300px] md:h-[400px] animate-downup"
    />

    {/* كارت العملاء */}
  {/* كارت العملاء */}
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
  <div className="/90 backdrop-blur rounded-xl shadow-lg px-4 py-3 flex flex-col items-center
                  transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group animated animate-float-soft">
    <span className="text-sm font-semibold text-gray-700 mb-2">
      Popular Client
    </span>

    <div className="flex -space-x-3">
      <img
        className="w-8 h-8 rounded-full border-2 border-white animated animate-avatar"
        style={{ animationDelay: "0s" }}
        src="https://randomuser.me/api/portraits/men/1.jpg" alt="client"
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white animated animate-avatar"
        style={{ animationDelay: "0.15s" }}
        src="https://randomuser.me/api/portraits/women/2.jpg" alt="client"
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white animated animate-avatar"
        style={{ animationDelay: "0.3s" }}
        src="https://randomuser.me/api/portraits/men/3.jpg" alt="client"
      />
      <img
        className="w-8 h-8 rounded-full border-2 border-white animated animate-avatar"
        style={{ animationDelay: "0.45s" }}
        src="https://randomuser.me/api/portraits/women/4.jpg" alt="client"
      />
    </div>
  </div>
</div>

  </div>
</div>

      </div>
    </section>



   <section className=" py-16 px-6 text-center">
      {/* العنوان */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium tracking-wide">
          Special Offers
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold ">
          Special Discount for Hotel & Resort Booking
        </h2>
      </motion.div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* الخلفية */}
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-72 object-cover group-hover:brightness-90 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

            {/* النصوص */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-left">
              <span className="/80  text-xs px-2 py-1 rounded-md mb-2 font-semibold">
                {offer.discount}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {offer.title}
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="  px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-md hover:bg-gray-100"
              >
                Book Now →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>


 <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* الجزء الشمال - الصور */}
      <div className="relative">
        {/* صورة كبيرة */}
        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Hotel Lobby"
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
        />

        {/* صورة صغيرة فوقها */}
        <motion.img
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ rotate: 6, scale: 1.05 }}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="Pool"
          className="absolute bottom-6 right-6 w-40 h-28 md:w-56 md:h-40 rounded-xl shadow-2xl border-4 border-white object-cover"
        />
      </div>

      {/* الجزء اليمين - النصوص */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.3 } },
        }}
        className="space-y-6"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -20 },
            show: { opacity: 1, y: 0 },
          }}
          className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium"
        >
          Testimonial
        </motion.span>

        <motion.h2
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0 },
          }}
          className="text-3xl md:text-4xl font-bold "
        >
          Amazing Feedback Say About Services
        </motion.h2>

        {/* الكارت */}
        <motion.div
          variants={{
            hidden: { opacity: 0, rotateY: -90 },
            show: { opacity: 1, rotateY: 0 },
          }}
          transition={{ duration: 0.8 }}
          className=" rounded-2xl shadow-xl p-6 text-left border relative overflow-hidden"
        >
          {/* نجوم */}
        {/* نجوم */}
<div className="flex gap-1 text-yellow-400 mb-3">
  {[...Array(5)].map((_, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.3, // يخليهم يلمعوا ورا بعض
        ease: "easeInOut",
      }}
    >
      ★
    </motion.span>
  ))}
</div>


          <p className=" italic mb-4">
            "Special treat to dine, it was wow experience food was really
            delicious! Outstanding dinner made by Master chef, food experience
            was unforgettable!"
          </p>

          {/* العميل */}
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Bella Andrew"
              className="w-12 h-12 rounded-full border-2 border-green-400"
            />
            <div>
              <h4 className="font-bold ">Bella Andrew</h4>
              <span className="text-sm text-gray-500">Customer</span>
            </div>
          </div>

          {/* جلو خفيف */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/10 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>



   
    <section className="bg-green-600 text-white py-20">
      <div className="text-center mb-12">
        <span className=" text-green-600 font-semibold py-1 px-3 rounded-full text-sm">
          FIXYLAND STAFF
        </span>
        <h2 className="text-4xl font-bold mt-4">Expert Staff Persons</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {staffMembers.map((staff, index) => (
          <motion.div
            key={index}
            className="bg-green-700 text-white rounded-2xl overflow-hidden shadow-lg relative flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-md cursor-pointer hover:bg-green-600 transition">
              +
            </div>
            
            {/* الجزء السفلي الأبيض */}
            <div className=" text-center p-4 mt-auto">
              <h4 className="font-semibold text-lg ">{staff.name}</h4>
              <p className="text-green-600 text-sm">{staff.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Icons Placeholder */}
      <div className="flex justify-center gap-6 mt-16 opacity-60">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="w-12 h-12  rounded-full shadow-md flex items-center justify-center"
          >
            🌴
          </div>
        ))}
      </div>
    </section>





  <motion.section
      className=" py-20 px-4"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* العنوان */}
      <div className="text-center mb-16">
        <motion.span
          className="bg-green-100 text-green-700 text-sm font-bold py-1 px-3 rounded-full inline-block"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          HOTEL NEWS
        </motion.span>
        <motion.h2
          className="text-4xl font-bold mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get More Update For Flxyland
        </motion.h2>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className=" rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {article.category}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              {/* معلومات جانبية */}
              <div className="flex items-center text-gray-500 text-sm gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {article.date}
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="flex items-center gap-1">
                  <FaUser /> {article.author}
                </span>
              </div>

              {/* العنوان */}
              <h3 className="text-lg font-semibold mb-2 ">
                {article.title}
              </h3>

              {/* ملخص */}
              <p className="text-gray-500 text-sm flex-grow">{article.excerpt}</p>

              {/* زر */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-green-600 text-white text-sm px-4 py-2 rounded-full self-start flex items-center gap-2 hover:bg-green-700 transition"
              >
                Read More <FaArrowRight className="text-xs" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>




  <footer className="bg-[#111111] text-white pt-10">
      {/* صور الغرف أعلى الفوتر */}
    {/* صور الغرف أعلى الفوتر */}
{/* صور الغرف أعلى الفوتر */}
<div className="relative w-full h-[250px] overflow-hidden">
  <div className="flex w-full h-full">
    {roomImages.map((src, idx) => (
      <div key={idx} className="flex-1">
        <img
          src={src}
          alt={`Room ${idx + 1}`}
          className="object-cover w-full h-full"
        />
      </div>
    ))}
  </div>

  {/* المربع الشفاف في النص */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className=" bg-opacity-70 px-6 py-14 rounded-lg shadow-lg flex flex-col items-center" style={{background: "oklch(0.33 0 0 / 0.5)"}}>
      {/* أيقونة إنستجرام */}
      <FaInstagram className="text-green-600 text-2xl mb-2" />
      {/* النص */}
      <p className="text-green-700 text-lg font-bold">Follow Our Instagram</p>
    </div>
  </div>
</div>



      {/* محتوى الفوتر */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-14 max-w-7xl mx-auto border-t border-gray-700 mt-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Logo + نص + سوشيال */}
        <div>
          <h3 className="text-2xl font-bold mb-4">🏨 Fixyland</h3>
          <p className="text-sm text-gray-400 mb-6">
            Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus maxime placeat facere.
          </p>
          <div className="flex gap-4 text-gray-400 text-xl">
            <FaFacebookF className="hover:text-white transition" />
            <FaXTwitter className="hover:text-white transition" />
            <FaInstagram className="hover:text-white transition" />
            <FaBehance className="hover:text-white transition" />
          </div>
        </div>

        {/* Explore links */}
        <div>
          <h4 className="font-bold mb-4">EXPLORE</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About Hotel</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Hotel Staff</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">CONTACT</h4>
          <p className="text-sm text-gray-400">
            7953 Sabria Park, 715 Devon Isle, Louisiana, USA
          </p>
          <p className="mt-2 text-sm text-gray-400">(+1) 987 654 3210</p>
          <p className="text-sm text-gray-400">info@domain.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4">NEWSLETTER</h4>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Ex. info@domain.com"
              className="w-full px-4 py-2 rounded bg-[#1c1c1c] text-sm text-white placeholder-gray-500 outline-none"
            />
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" id="agree" className="accent-green-500" />
              <label htmlFor="agree">I agree to all terms and policies</label>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 transition"
            >
              Subscribe <FaPaperPlane />
            </button>
          </form>
        </div>
      </motion.div>

      {/* الحقوق */}
      <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-5 px-4 flex flex-col md:flex-row justify-between items-center">
        <span>© Copyright 2025 Fixyland. All Rights Reserved.</span>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>





    </div>
    
  );
}
