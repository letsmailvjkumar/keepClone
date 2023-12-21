import React, { useState } from "react";
import {
  archive,
  bell,
  deleteimg,
  extra,
  grid,
  idea,
  keeplogo,
  menu,
  pencil,
  reload,
  search,
  settings,
  user,
} from "../assets/images";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="flex justify-start items-start mt-3 h-20">
        <div className="flex-col justify-center items-center ms-3 gap-10 flex max-sm:hidden">
          <div className="mt-3">
          <img src={menu} className="w-14" />
          </div>
            <div>
              <img src={idea} alt="idea" className="w-14" />
            </div>
            <div>
              <img src={bell} alt="ring" className="w-14" />
            </div>
            <div>
              <img src={pencil} alt="edit" className="w-14" />
            </div>
            <div>
              <img src={archive} alt="archive" className="w-14" />
            </div>
            <div>
              <img src={deleteimg} alt="delete" className="w-14" />
            </div>
          
        </div>
        <div className="flex items-center text-lg ps-5">
          <img src={keeplogo} className="w-12 h-12" />
          <p className="ps-5 text-2xl font-medium text-grey">Keep</p>
        </div>
        <div className="ms-40 mt-1 flex items-center max-sm:hidden">
          <img src={search} className="w-5 absolute ms-3" />
          <input
            type="text"
            className="lg:w-[40rem] h-10 rounded-lg bg-[rgba(241,241,241,0.21)] focus:bg-white focus:shadow-lg focus:outline-none text-black placeholder-transparent ps-10"
            placeholder='Search within "Coral"'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <div className="flex w-full justify-end mt-1">
          <div className="flex items-center gap-4 mr-10 max-sm:hidden">
            <div>
              <img src={reload} alt="reload" className="w-6" />
            </div>
            <div>
              <img src={grid} alt="layout" className="w-8" />
            </div>
            <div>
              <img src={settings} alt="settings" className="w-6" />
            </div>
          </div>
          <div className="flex items-center gap-3 mr-5">
            <div className="max-sm:hidden">
              <img src={extra} alt="" className="w-8" />
            </div>
            <div>
              <img src={user} alt="" className="w-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
