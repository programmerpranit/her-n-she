import Slider from "@/component/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="m-auto my-3"
        src={"/hernshe-logo.jpg"}
        width={200}
        height={40}
        alt={"logo"}
      />

      <Slider />

      <h2 className="text-center mt-10 text-3xl font-bold">About</h2>

      <p className="text-center p-5">
        As the name her n she itself represents and conceals among the ladies ,
        the founder herself is a lady Mrs.ANAMICA By living nine years abroad
        she envisioned to make a different kind of company which focus on ladies
        redeeming. By far her living in abroad she realized that only in our
        country more than 80% of ladies are housewives but on the other hand in
        foreign countries women are matching the footsteps of men. So she
        decided to start chain stores in india which will centralize not only on
        ladies products but will provide recruitment to the ladies to make them
        independent. It’s a small step to make a large change in the society.
        <br />
        Our company proudly announces the opening of 6 chain stores under name
        her n she at one of the best area in a small period of 4 months in which
        we offer jobs to ladies. Now we are working on the city level but soon
        will establish our branches in various states of country. Under her n
        she we offer beautiful range of ladies handbags , footwear,purses, sun
        glasses, ear rings, bracelets, watches and many more.
        <br />
        We as a team her n she believe in teamwork and focus to satisfy customer
        and make them feel special. Our promise and motto is to make her n she
        fill a special place in your heart and make it a huge success.
        <br />
        As per market demand and following current trend we are planning to
        enter into online world and deliver the most stylish and trendy products
        at doorstep of every Indian hence spreading our wings from city to all
        over India . Hence making our product branded and popular.
      </p>
    </>
  );
}
