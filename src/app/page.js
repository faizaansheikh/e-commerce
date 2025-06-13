import Appbar from "./components/Appbar";
import Carousal from "./components/Carousal";

export default function Home() {
  return (
    <>



      <div className="w-full h-[50px] bg-[#EFEFF1] flex items-center justify-center ">
        <span className="text-center m-0 leading-none">Standard Delivery in 3–4 Business Days</span>
      </div>



      <Appbar/>
      <Carousal/>

    </>
  );
}
