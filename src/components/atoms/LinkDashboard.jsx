import { NavLink} from "react-router-dom";
import React from "react";
import { useState } from "react";


function LinkDashboard({lines, to, clases, options, name1, name2, name3, to2, to3}) {
  const [category1Expanded, setCategory1Expanded] = useState(false);
  const [category2Expanded, setCategory2Expanded] = useState(false);

  const handleCategory1Toggle = () => {
    setCategory1Expanded(!category1Expanded);
  };

  const handleCategory2Toggle = () => {
    setCategory2Expanded(!category2Expanded);
  };



    const renderOptions = () => {
      switch(options){
        case 0:
          return (
          <> 
            <NavLink to={to}
            className= {`flex items-center dark:text-white p-2 rounded-lg  dark:hover:bg-blue-600 group `}>
            <span className="flex-1 whitespace-nowrap">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
  
            </NavLink>
          
            
          </>);
        break;
        case 1:
          return(<>
              <NavLink
            className= {`flex items-center p-2  dark:text-white rounded-lg  dark:hover:bg-blue-600 group `}
            onClick={handleCategory1Toggle}>
            
            <span className="flex-1 whitespace-nowrap">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </span>
          <span className={`absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300 ${category1Expanded ? "rotate-0" : "rotate-180"}`}
          data-te-sidenav-rotate-icon-ref> 
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd" />
              </svg>
          </span>    
            </NavLink>

            <ul className={`relative m-0 ${category1Expanded ? "block" : "hidden"} list-none p-0 data-[te-collapse-show]:block `}
                data-te-sidenav-collapse-ref
            >
              <li className="relative">
                <NavLink to={to} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
                 {name1}
                </NavLink>

              </li>
            </ul>
          
          
          </>
          );
        break;
        case 2:
          return(<>
            <NavLink 
          className= {`flex items-center p-2  rounded-lg  dark:text-white   dark:hover:bg-blue-600 grou`}
          onClick={handleCategory1Toggle}>
          
          <span className="flex-1 whitespace-nowrap">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className={`absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300 ${category1Expanded ? "rotate-0" : "rotate-180"}`}
        data-te-sidenav-rotate-icon-ref> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
            </svg>
        </span>    
          </NavLink>

          <ul className={`relative m-0 ${category1Expanded ? "block" : "hidden"} list-none p-0 data-[te-collapse-show]:block `}
              data-te-sidenav-collapse-ref
          >
            <li className="relative">
              <NavLink to={to} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
               {name1}
              </NavLink>

            </li>
            <li className="relative">
            <NavLink to={to2} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
               {name2}
              </NavLink>
            </li>
          </ul>
        </>
        );
        break;
        case 3:
          return(<>
            <NavLink
          className= {`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-blue-600 group`}
          onClick={handleCategory1Toggle}>
          
          <span className="flex-1 whitespace-nowrap">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <span className={`absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300 ${category1Expanded ? "rotate-0" : "rotate-180"}`}
        data-te-sidenav-rotate-icon-ref> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd" />
            </svg>
        </span>    
          </NavLink>
          <ul className={`relative m-0 ${category1Expanded ? "block" : "hidden"} list-none p-0 data-[te-collapse-show]:block `}
              data-te-sidenav-collapse-ref
          >
            <li className="relative">
              <NavLink to={to} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
               {name1}
              </NavLink>

            </li>
            <li className="relative">
            <NavLink to={to2} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
               {name2}
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to={to3} data-te-sidenav-link-ref className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
               {name3}
              </NavLink>
            </li>
          </ul>
        </>
        );
        break;
      }
    }
    return (
        <>
      {renderOptions()}
        </>
      );
}

export default LinkDashboard;