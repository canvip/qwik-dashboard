import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "@qwikest/icons/heroicons";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";

import HeroImg from "~/assets/img/pngegg.png?jsx";
import HeroMobileImg from "~/assets/img/heroMobileImg1.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <LRDQwikLogo /> 
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p class="text-xl text-gray-800 md:text-2xl md:leading-normal">
            <strong>Welcome to Logistic Department.</strong> I’m Ahmed Alaa
            National Transportation Information Officer at Amriya for Pharmaceutical Industries S.A.E{" "}
            <Link
              href="https://www.linkedin.com/in/ahmedalaaabdalhy/"
              target="_blank"
              class="text-blue-500"
            >
              linkedin.com
            </Link>
            , brought to you by{" "}
            <Link
              href="FB.com/ahmedalaacanvip"
              target="_blank"
              class="text-blue-500"
            >
              facebook 
            </Link>{" "}
            .
          </p>
          <Link
            href="/login"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            <HiArrowRightOutline /> 
          </Link>
          
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <HeroImg class="hidden md:block" />
          <HeroMobileImg class="block md:hidden" />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Logistic Department",
  meta: [
    {
      name: "description",
      content: "Logistic Department ",
    },
  ],
};
