import Image from "next/image";

import Link from "next/link";
import DashboardPage from "./(dashboard)/dashboard/page";
import Client from "@/components/client";
import { Suspense } from "react";
import Posts from "@/components/posts";
import Recommendation from "@/components/Recommendation";

export default function Home() {
  return (
    <>
      {/* <Link href="/dashboard">Click</Link> */}
      <div className="flex items-center">
        <Image src="/imgs/camera.jpg" width={500} height={500} alt="Picture of the author" />
        <div>
          <h1>Hello Image</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, molestiae dolorum, doloremque illo quaerat
            tempora ipsa qui enim sit debitis accusantium quod! Quaerat iste maiores quis perspiciatis reiciendis
            assumenda tempora.
          </p>
        </div>
      </div>

      <p>Recommended:</p>
      <div className="grid grid-cols-4 gap-8">
        {[...new Array(4)].map((_, i) => {
          const images = ["shoe", "plant", "car", "watch"];
          return (
            <>
              <Suspense fallback={<h1>Loading !!!</h1>}>
                <Recommendation imgSrc={`/imgs/${images[i]}.jpg`} />
              </Suspense>
            </>
          );
        })}
      </div>
    </>
  );
}
