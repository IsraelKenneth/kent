
import Image from "next/image";
import { Cyborg,gradient  } from "./asset";


const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <Image
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};


const BentoPrev = () => {
  return (
<section className="relative pt-12 padding-x overflow-hidden">
{/* <div className="absolute bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full h-[10rem] w-[10rem] blur-[200px] overflow-hidden left-[14rem]"></div> */}
<div className=" flex flex-wrap" data-scroll >

  <div className="relative items-center justify-center w-full flex flex-wrap md:mt-20 mt-10">
  <div className="relative z-1 flex items-center  mb-5  h-[30rem] lg:w-[54rem] xl:w-[75%] md:w-[40rem] w-[26rem]  border-2 xl:h-[38rem] lg:p-20 rounded-3xl overflow-hidden  border-n-1/10 bg-opacity-10 backdrop-blur-lg backdrop-filter  shadow-lg">
    <div className="md:opacity-100 opacity-5 absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
    <Image 
    className="w-full h-full object-cover md:object-right"
    width={800}
    height={730}
                alt="Smartest AI"
                 src={Cyborg} />
    </div>

    <div className="relative z-1 lg:max-w-[22rem] max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Tailored solutions that blend artistry.</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              From concept to final product, benefit from a comprehensive range of creative services.
              </p>
              <ul class="list-none mt-6 body-2">
        <li class="py-2">
          <div class="flex items-center">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 class="text-blueGray-500">
              Fusion of artistic talent
              </h4>
            </div>
          </div>
        </li>
        <li class="py-2">
          <div class="flex items-center">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 class="text-blueGray-500">Amazing design</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Seamless digital solutions</h4>
            </div>
          </div>
        </li>
      </ul>
            </div>
  </div>

  </div>

  <Gradient />

</div>
</section>
  );
}

export default BentoPrev;
