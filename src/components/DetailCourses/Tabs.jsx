import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TapLinks } from "./TabsComponents/TapLinks";
import { DescriptionTab } from "./TabsComponents/DescriptionTab";
import { PreviewTab } from "./TabsComponents/PreviewTab";
import { CommentTab } from "./TabsComponents/CommentTab";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  // حالت باز یا بسته بودن هر فصل را مدیریت می‌کند

  return (
    <div className="w-full bg-white dark:bg-gray-900 h-auto  rounded-3xl mt-10 flex flex-col">
      {/* تب‌ها */}

      <TapLinks activeTab={activeTab} setActiveTab={setActiveTab}/>
      {/* محتوای تب‌ها */}
      <div className=" xl:w-[779px] w-[95%] mx-auto mt-8">
        <DescriptionTab  activeTab={activeTab}/>
      <PreviewTab  activeTab={activeTab}/>
      <CommentTab activeTab={activeTab}/>

      </div>
    </div>
  );
};

export { Tabs };
