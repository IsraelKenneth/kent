import Image from "next/image"
import { skills, services } from "@/constants"

export const SkillsCard1 = (

) => {

  
  return (
    <div className=" mt-3 flex flex-row gap-6 w-full mr-6">
    <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[0].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[0].name}</h4>
            </div>
        </div>

        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[1].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[1].name}</h4>
            </div>
        </div>

        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[2].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[2].name}</h4>
            </div>
        </div>

        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[3].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[3].name}</h4>
            </div>
        </div>


        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[4].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[4].name}</h4>
            </div>
        </div>
      

        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[14].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[14].name}</h4>
            </div>
        </div>



        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[15].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[15].name}</h4>
            </div>
        </div>


        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[16].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[16].name}</h4>
            </div>
        </div>

        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
            <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 ">
                <Image src={skills[17].image} width={50} height={50}  alt="skills card" />
                </span>
            </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
            <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[17].name}</h4>
            </div>
        </div>

        </div>
  )
}








export const SkillsCard2 = (

  ) => {
  
    
    return (
      <div className=" mt-3 flex flex-row gap-6 w-full mr-6">
      <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={skills[5].image} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[5].name}</h4>
              </div>
          </div>
  
          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={skills[6].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[6].name}</h4>
              </div>
          </div>
  
          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={skills[7].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[7].name}</h4>
              </div>
          </div>
  
          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[8].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700  uppercase text-black">{skills[8].name}</h4>
              </div>
          </div>
  
  
          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[9].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[9].name}</h4>
              </div>
          </div>
        

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[10].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[10].name}</h4>
              </div>
          </div>


          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[11].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[11].name}</h4>
              </div>
          </div>



          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[12].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[12].name}</h4>
              </div>
          </div>
  

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[13].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[13].name}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[18].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[18].name}</h4>
              </div>
          </div>


          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500">
                  <Image src={skills[19].image} width={50} height={50} alt="skills card" />
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{skills[19].name}</h4>
              </div>
          </div>
  
          </div>
    )
  }




  export const ServicesCard = (

  ) => {
  
    
    return (
      <div className=" mt-3 flex flex-row gap-6 w-full mr-6">
      <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[0].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[0].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[1].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[1].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[2].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[2].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[3].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[3].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[0].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[0].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[1].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[1].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[2].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[2].title}</h4>
              </div>
          </div>

          <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 ">
                  <Image src={services[3].icon} width={50} height={50}  alt="skills card"/>
                  </span>
              </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <h4 className="text-md font-bold text-navy-700 text-black uppercase">{services[3].title}</h4>
              </div>
          </div>

     
          </div>

          )
}