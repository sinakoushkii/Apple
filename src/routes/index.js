//index.js
import Home from "@pages/Home";
import Iphone from "@pages/Iphone";
import Watch from "@pages/Watch";

const router = [
  { path: "/", element: Home  },
  { path: "/iphone", element: Iphone },
  { path: "/watch", element: Watch  },
]

export default router;
