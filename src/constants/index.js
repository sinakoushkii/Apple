import iphone16pro from "../assets/icons/iphone16pro.svg"
import iphone16 from "../assets/icons/iphone16.svg"
import iphone15 from "../assets/icons/iphone15.svg"
import iphone14 from "../assets/icons/iphone14.svg"
import iphoneSe from "../assets/icons/iphoneSe.svg"
import compare from "../assets/icons/compare.svg"
import airpods from "../assets/icons/airpods.svg"
import airtag from "../assets/icons/airtag.svg"
import accessories from "../assets/icons/accessories.svg"
import appleCard from "../assets/icons/appleCard.svg"
import ios from "../assets/icons/ios.svg"
import shopIphone from "../assets/icons/shopIphone.svg"
import cart1mainImage from "../assets/images/card1mainImage.jpg"
import cart1subImage from "../assets/images/card1subImage.jpg"
import cart2mainImage from "../assets/images/cart2mainImage.jpg"
import cart2subImage from "../assets/images/cart2subImage.jpg"
import cart3mainImage from "../assets/images/cart3mainImage.jpg"
import cart3subImage from "../assets/images/cart3subImage.jpg"
import cart4mainImage from "../assets/images/cart4mainImage.jpg"
import cart4subImage from "../assets/images/cart4subImage.jpg"
import cart5mainImage from "../assets/images/cart5mainImage.jpg"
import cart5subImage from "../assets/images/cart5subImage.jpg"
import cart6mainImage from "../assets/images/cart6mainImage.jpg"
import cart6subImage from "../assets/images/cart6subImage.jpg"

export const navbarLinks=[
    {label:"Store",route:"/"},
    {label:"Mac",route:"/"},
    {label:"iPad",route:"/"},
    {label:"iPhone",route:"/iphone"},
    {label:"Watch",route:"/watch"},
    {label:"Vision",route:"/"},
    {label:"AirPod",route:"/"},
    {label:"Tv & Home",route:"/"},
    {label:"Entertainment",route:"/"},
    {label:"Accessories",route:"/"},
    {label:"Support",route:"/"},
]
export const topSliderLinks=[
    {label:"iPhone 16 pro",route:iphone16pro},
    {label:"iPhone 16",route:iphone16},
    {label:"iPhone 15",route:iphone15},
    {label:"iPhone 14",route:iphone14},
    {label:"iPhone SE",route:iphoneSe},
    {label:"Compare",route:compare},
    {label:"AirPods",route:airpods},
    {label:"AirTag",route:airtag},
    {label:"Accessories",route:accessories},
    {label:"Apple Card",route:appleCard},
    {label:"iOS 18",route:ios},
    {label:"Shop iPhone",route:shopIphone},
]
export const cardData=[
    {   id:1,
        subTitle:"Apple Intelligence",
        title:"AI-opening possibilities.",
        description:"Now that’s smart. Our latest iPhone models are built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple",
        mainImg:cart1mainImage,
        img:cart1subImage,
    },
    {   id:2,
        subTitle:"Cutting-Edge Cameras",
        title:"Picture your best photos and videos.",
        description:"Stunning made simple. The advanced cameras in iPhone automatically capture phenomenal photos with great detail and color. Want to take the perfect shot in record time? Our latest models have Camera Control, giving you an easier way to quickly access camera tools.",
        mainImg:cart2mainImage,
        img:cart2subImage,
    },
    {   id:3,
        subTitle:"Chip and Battery Life",
        title:"Fast that lasts.",
        description:"Supersmart, superspeedy Apple silicon. iPhone chips enhance everything you do. Our latest chips unlock Apple Intelligence, power advanced photo features like latest‑generation Photographic Styles, and enable AAA gaming.",
        mainImg:cart3mainImage,
        img:cart3subImage,
    },
    {   id:4,
        subTitle:"Innovation",
        title:"Beautiful and durable, by design.",
        description:"Second to none. iPhone is known for its iconic design and premium materials — like iPhone 16 Pro, which is forged in titanium. On the brilliant display, Dynamic Island bubbles up important info so you don’t miss a beat.",
        mainImg:cart4mainImage,
        img:cart4subImage,
    },
    {   id:5,
        subTitle:"Environment",
        title:"Recycle. Reuse. Repeat.",
        description:"Innovation in conservation. Our disassembly robots — Daisy, Dave, and Taz — recover crucial materials like gold, cobalt, tungsten, and rare earth elements from recycled iPhone devices, so they can be used to make new ones.",
        mainImg:cart5mainImage,
        img:cart5subImage,
    },
    {   id:6,
        subTitle:"Privacy",
        title:"Your data. Just where you want it.",
        description:"Groundbreaking privacy protections. Apple Intelligence is integrated into your iPhone through on-device processing. With Private Cloud Compute, it can draw on larger, Apple-designed server-based models, running on Apple silicon, to handle more complex requests while protecting your privacy.",
        mainImg:cart6mainImage,
        img:cart6subImage,
    },
]