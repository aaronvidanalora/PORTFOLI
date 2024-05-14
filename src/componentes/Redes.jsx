import { Avatar } from "@nextui-org/react";

/* eslint-disable react/no-unescaped-entities */
export function Redes() {
    return (
        <div className="bg-black text-white pt-6 pb-2 flex">
            <div className="items-left pl-6">
                <h1 className="text-2xl lg:text-xl xl:text-2xl text-left font-bold pt-4 mb-4 pl-4">
                    SOCIAL
                </h1>
                <div className="flex flex-wrap justify-start dark">
                    <div className="flex w-1/2 sm:w-auto p-2 items-left">
                        <a href="https://www.linkedin.com/in/aar%C3%B3n-vida%C3%B1a-lora-91406a258/" target="_blank ">
                            <Avatar size="large" className="p-2" src="/linkedin-ico.png" />
                        </a>
                        <p className="text-xl hidden sm:block font-semibold pl-3 pt-1">Linkedin</p>
                    </div>
                    <div className="flex w-1/2 sm:w-auto p-2 items-center">
                        <a href="https://github.com/aaronvidanalora/" target="_blank ">
                            <Avatar size="large" className="p-2" src="/github-ico.png" />
                        </a>
                        <p className="text-xl hidden sm:block font-semibold pl-3 pt-1">Github</p>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-end w-full px-6 pt-32">
                <div className="text-lg font-semibold">
                    <p>By Aarón Vidaña</p>
                    <p>&copy; 2024</p>
                </div>
            </div>
        </div>
    );
}
