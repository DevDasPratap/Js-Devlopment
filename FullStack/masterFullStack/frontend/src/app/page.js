// export default function App() {
//   return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
// }

import HeroSection from "@/components/ui/base/HeroSection"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">Hello, Next.js!</h1> */}
      <HeroSection />
      {/* <Button>Hello</Button> */}
    </div>
  )
}
