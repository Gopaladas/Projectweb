import React, { useState } from "react";
import "./Navbar.css";
// import infinity1 from "./infinity1.gif";
// import imgamx from "../../assets/infinity1.png"; // Adjust the path if needed
import imgamx from "../Aboutus/amxsol.png";
import inimg from "./in.png";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SearchIcon,
  XIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import useWindowSize from "./useWindow";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [issubClicked, setIsSubClicked] = useState(null);
  const [isSearch, setIsSearch] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useWindowSize();

  // console.log(size);
  // console.log(isMenuOpen);

  const [ismenuClick, setMenuClick] = useState(null);
  const [isSubmenuClick, setSubMenuClick] = useState(null);

  const [isSubSubClick, setSubSubClick] = useState(null);

  const handlesubsub = (num, mainnum) => {
    console.log(num, mainnum);

    setSubSubClick((prevSubSubClick) => {
      const newSubSubClick = num === prevSubSubClick ? null : num;
      console.log("New SubSubClick:", newSubSubClick);

      setIsSubClicked(newSubSubClick === null ? mainnum : null);
      console.log("New SubClicked:", newSubSubClick === null ? null : mainnum);

      return newSubSubClick;
    });
  };

  const handleMenuClick = (num) => {
    setMenuClick((prevnum) => (num !== prevnum ? num : null));
    setSubMenuClick(null);
  };

  const handleSubMenuClick = (num) => {
    setSubMenuClick((prevnum) => (num !== prevnum ? num : null));
  };

  const handleClick = (num) => {
    setIsClicked((prevnum) => (num !== prevnum ? num : null));
    setIsSubClicked(null);
  };

  const handleSubClick = (num, mainnum) => {
    // console.log(issubClicked, num);
    // const newnum = num*10+mainnum;
    setIsSubClicked((prevnum) => (num !== prevnum ? num : null));
    // console.log(issubClicked, "sub click", mainnum);
    setIsClicked(issubClicked === null ? null : mainnum);
    console.log(isClicked, "ex");
  };

  return (
    <>
      {size.screenWidth >= 1100 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed z-1000">
            <div className="leftnav box-border h-[60px] flex justify-center align-center pt-[10px]">
              <img
                src={imgamx}
                className="relative h-[30px] w-[100px]  box-border m-auto"
              />
              <a
                href="#"
                className="mainhead bolder  not-italic text-s flex pt-[8px]"
              >
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[8px]" />
                </span>
                infinite possibilities
              </a>
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                <li className="">
                  <a
                    href="/"
                    className="not-italic font-mono  text-color headsize"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(1)}
                    >
                      What we do
                      {isClicked === 1 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  <div>
                    {isClicked === 1 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(1, 1)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/Businesssolution"}
                                  className="text-color text-lg"
                                >
                                  {" "}
                                  Business Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(2, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Technology Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(3, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Talent Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(4, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Capabilities{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(5, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Industries{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 1 && (
                      <div className="absolute subsub top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(1, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Business Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">Digital</Link>
                            </li>
                            <li className="">
                              <Link to={"/legal"} className="text-color">
                                Legal Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 2 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(2, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Technology Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">MIIT Services</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 3 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(3, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Talent Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">IT Consulting</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">HealthCare</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 4 && (
                      <div className="absolute top-[60px] bg-black ">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(4, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Capabilities{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">
                                Artificial Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Machine Learning
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Business Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Cloud Services</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Cyber Security</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Data and Analytics
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Legal Process Outs...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Business Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Recruitment Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Finance and Risk M...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Accounting Services
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Payroll Services
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Technology Training
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 5 && (
                      <div className="absolute top-[60px] bg-black p-[10px] overflow-y-scroll h-[80vh]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(5, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Industries{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0 bg-black top-[120px] w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">Aerospace</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Automotive</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Banking</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Chemicals</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Construction</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Education</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Energy</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Finance</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">HealthCare</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Insurance</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Manufacturing</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Pharma</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Retail & Wholesale
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Real Estate</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Software</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Technology</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Telecom</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Transportation</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  headsize text-color"
                      onClick={() => handleClick(2)}
                    >
                      Who we are
                      {isClicked === 2 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  {isClicked === 2 && (
                    <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                      <ul className="flex flex-col">
                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="ml sub">
                              <Link
                                to={"/who-we-are/About-us"}
                                className="text-color text-lg"
                                onClick={() => handleClick(null)}
                              >
                                {" "}
                                About Us{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(6, 2)}
                              >
                                {issubClicked ? (
                                  <ChevronUpIcon className=" h-5 w-5 bold" />
                                ) : (
                                  <ChevronDownIcon className=" h-5 w-5" />
                                )}
                              </Link>
                            </div>

                            <div className="">
                              <Link className="text-color text-lg">
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link className="text-color text-lg">
                                {" "}
                                Careers{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link
                                to={"/newsroom"}
                                className="text-color text-lg"
                              >
                                Newsroom
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link className="text-color text-lg">
                                {" "}
                                Foundation{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link className="text-color text-lg">
                                {" "}
                                Academy{" "}
                              </Link>
                            </div>
                          </li>
                        </li>

                        <li className="aligning">
                          <li className="my-[20px] flex w-full ">
                            <div className="sub">
                              <Link className="text-color text-lg">
                                {" "}
                                Contact Us{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                      </ul>
                    </div>
                  )}
                  {issubClicked === 6 && (
                    <div className="absolute sub_nav top-[60px] bg-black">
                      <li className="relative ">
                        <li className=" flex w-full ">
                          <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                            <Link
                              className="text-lg text-color"
                              onClick={() => handleSubClick(6, 2)}
                            >
                              <ChevronRightIcon className=" h-5 w-5" />
                            </Link>
                          </div>

                          <div>
                            <Link className="text-color text-lg"> People </Link>
                          </div>
                        </li>
                      </li>
                      <div className="aligning  relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                        <ul>
                          <li className="">
                            <Link className="text-color">Eployee Center</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

                <li className="">
                  <a
                    href="#"
                    className="not-italic font-mono headsize text-color"
                  >
                    Careers
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="not-italic font-mono headsize text-color"
                  >
                    Newsroom
                  </a>
                </li>

                <li className="">
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  headsize text-color"
                      onClick={() => handleClick(3)}
                    >
                      Contact Us
                      {isClicked === 3 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  {isClicked === 3 && (
                    <div className=" absolute top-[60px]  bg-black  w-[165px] h-auto right-[20px]">
                      <ul className="flex flex-col m-auto">
                        <li className="">
                          <li className="my-[20px] flex w-[165px] ">
                            <div className="">
                              <Link className="text-color text-lg">
                                AMXSOL India
                              </Link>
                            </div>
                          </li>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute h-[80px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show" : "hide"
            }`}
          >
            <div>
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
        </>
      )}

      {size.screenWidth < 1100 && size.screenWidth > 768 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed z-10">
            <div className="leftnav box-border h-[60px] flex justify-center align-center pt-[10px]">
              <img
                src={imgamx}
                className="relative  h-[30px] w-[100px]  box-border m-auto"
              />
              <a
                href="#"
                className="mainhead bolder  not-italic text-s flex pt-[8px]"
              >
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[8px]" />
                </span>
                infinite possibilities
              </a>
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                <li className="">
                  <a
                    href="#"
                    className="not-italic font-mono  text-color headsize"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(1)}
                    >
                      What we do
                      {isClicked === 1 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>
                  <div>
                    {isClicked === 1 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(1, 1)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div>

                              <div>
                                <Link
                                  to={"/Businesssolution"}
                                  className="text-color text-lg"
                                >
                                  Business Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(2, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Technology Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(3, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Talent Solutions{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(4, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Capabilities{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(5, 1)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Industries{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 1 && (
                      <div className="absolute subsub top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(1, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                Business Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">Digital</Link>
                            </li>
                            <li className="">
                              <Link to={"/legal"} className="text-color">
                                Legal Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 2 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(2, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Technology Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">MIIT Services</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 3 && (
                      <div className="absolute top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(3, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Talent Solutions{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">IT Consulting</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">HealthCare</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 4 && (
                      <div className="absolute top-[60px] bg-black ">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(4, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Capabilities{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">
                                Artificial Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Machine Learning
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Business Intelligence
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Cloud Services</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Cyber Security</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Data and Analytics
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Legal Process Outs...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Business Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Recruitment Process...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Finance and Risk M...
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Accounting Services
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Payroll Services
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Technology Training
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {issubClicked === 5 && (
                      <div className="absolute top-[60px] bg-black p-[10px] overflow-y-scroll h-[80vh]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(5, 1)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Industries{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0 bg-black top-[120px] w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">Aerospace</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Automotive</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Banking</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Chemicals</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Construction</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Education</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Energy</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Finance</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">HealthCare</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Insurance</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Manufacturing</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Pharma</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">
                                Retail & Wholesale
                              </Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Real Estate</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Software</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Technology</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Telecom</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Transportation</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {size.screenWidth < 1100 && size.screenWidth > 970 && (
                  <li>
                    <li className="relative">
                      <Link
                        className="flex items-center not-italic  headsize text-color"
                        onClick={() => handleClick(2)}
                      >
                        Who we are
                        {isClicked === 2 ? (
                          <ChevronUpIcon className="ml-2 h-5 w-5" />
                        ) : (
                          <ChevronDownIcon className="ml-2 h-5 w-5" />
                        )}
                      </Link>
                    </li>
                    {isClicked === 2 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto">
                        <ul className="flex flex-col">
                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="ml sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  About Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(6, 2)}
                                >
                                  {issubClicked ? (
                                    <ChevronUpIcon className=" h-5 w-5 bold" />
                                  ) : (
                                    <ChevronDownIcon className=" h-5 w-5" />
                                  )}
                                </Link>
                              </div>

                              <div className="">
                                <Link className="text-color text-lg">
                                  {" "}
                                  People{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  Careers{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  Newsroom{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  Foundation{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  Academy{" "}
                                </Link>
                              </div>
                            </li>
                          </li>

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="sub">
                                <Link className="text-color text-lg">
                                  {" "}
                                  Contact Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                    {issubClicked === 6 && (
                      <div className="absolute sub_nav top-[60px] bg-black">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(6, 2)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning  relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">Eployee Center</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                )}

                {size.screenWidth < 1100 && size.screenWidth > 1030 && (
                  <li className="">
                    <a
                      href="#"
                      className="not-italic font-mono headsize text-color"
                    >
                      Careers
                    </a>
                  </li>
                )}

                {size.screenWidth < 1100 && size.screenWidth > 1060 && (
                  <li className="">
                    <a
                      href="#"
                      className="not-italic font-mono headsize text-color"
                    >
                      Newsroom
                    </a>
                  </li>
                )}

                <li>
                  <li className="relative">
                    <Link
                      className="flex items-center not-italic  text-color headsize"
                      onClick={() => handleClick(3)}
                    >
                      more
                      {isClicked === 3 ? (
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      )}
                    </Link>
                  </li>

                  <div>
                    {isClicked === 3 && size.screenWidth < 1100 && (
                      <div className="aligning_sub absolute top-[60px]  bg-black  w-[280px] h-auto right-[20px]">
                        <ul className="flex flex-col">
                          {size.screenWidth <= 970 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full ">
                                  <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                    <Link
                                      className="text-lg text-color"
                                      onClick={() => handleSubClick(9, 3)}
                                    >
                                      {issubClicked ? (
                                        <ChevronUpIcon className=" h-5 w-5 bold" />
                                      ) : (
                                        <ChevronDownIcon className=" h-5 w-5" />
                                      )}
                                    </Link>
                                  </div>

                                  <div>
                                    <Link className="text-color text-lg">
                                      {" "}
                                      Who we are{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          {size.screenWidth <= 1030 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full pl-[20px]">
                                  <div>
                                    <Link className="text-color text-lg">
                                      {" "}
                                      Carrers{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          {size.screenWidth <= 1060 &&
                            size.screenWidth > 768 && (
                              <li className="aligning">
                                <li className="my-[20px] flex w-full pl-[20px]">
                                  <div>
                                    <Link className="text-color text-lg">
                                      {" "}
                                      NewsRoom{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            )}

                          <li className="aligning">
                            <li className="my-[20px] flex w-full ">
                              <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                <Link
                                  className="text-lg text-color"
                                  onClick={() => handleSubClick(8, 3)}
                                >
                                  <ChevronDownIcon className=" h-5 w-5" />
                                </Link>
                              </div>

                              <div>
                                <Link className="text-color text-lg">
                                  {" "}
                                  Contact Us{" "}
                                </Link>
                              </div>
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}

                    {issubClicked === 8 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(8, 3)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Contact us{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">AMXSOL India</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {issubClicked === 9 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handleSubClick(9, 3)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                Who we are{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">About US</Link>
                            </li>

                            <li className="">
                              <li className="relative ">
                                <li className=" flex w-full ">
                                  <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                                    <Link
                                      className="text-lg text-color"
                                      onClick={() => handlesubsub(1, 9)}
                                    >
                                      <ChevronRightIcon className=" h-5 w-5" />
                                    </Link>
                                  </div>

                                  <div>
                                    <Link className="text-color text-lg">
                                      {" "}
                                      People{" "}
                                    </Link>
                                  </div>
                                </li>
                              </li>
                            </li>
                            <li className="">
                              <Link className="text-color">Careers</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Newsroom</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Foundation</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Academy</Link>
                            </li>
                            <li className="">
                              <Link className="text-color">Contact us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {isSubSubClick === 1 && (
                      <div className="absolute subsub top-[60px] bg-black right-[20px]">
                        <li className="relative ">
                          <li className=" flex w-full ">
                            <div className="bord border-green-100 h-[20px] w-[20px] mx-[10px]">
                              <Link
                                className="text-lg text-color"
                                onClick={() => handlesubsub(1, 9)}
                              >
                                <ChevronRightIcon className=" h-5 w-5" />
                              </Link>
                            </div>

                            <div>
                              <Link className="text-color text-lg">
                                {" "}
                                People{" "}
                              </Link>
                            </div>
                          </li>
                        </li>
                        <div className="aligning relative left-0   bg-black w-[280px] h-full flex flex-col  justify-center items-center ">
                          <ul>
                            <li className="">
                              <Link className="text-color">
                                Employee center
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute h-[80px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show" : "hide"
            }`}
          >
            <div>
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[500px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
        </>
      )}

      {size.screenWidth <= 768 && (
        <>
          <nav className="h-[60px] w-full bg-black fixed topmain">
            <div className="leftnav box-border h-[60px] flex justify-center align-center pt-[10px]">
              <div className="flex items-center ml-[20px]">
                <button
                  className="text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <XIcon className="h-6 w-6" /> // Display XIcon when menu is open
                  ) : (
                    <MenuIcon className="h-6 w-6" /> // Display MenuIcon when menu is closed
                  )}
                </button>
              </div>
              <img
                src={imgamx}
                className="relative h-[30px] w-[100px]  box-border m-auto imgamx"
              />
              <a
                href="#"
                className="text-2xl not-italic text-s pt-[8px] headhide"
              >
                {/* AMXSOL */}
                <span>
                  <img src={inimg} className="h-[20px] ml-[8px] mt-[10px]" />
                </span>
                infinite possibilities
              </a>
            </div>

            <div className="rightnav ">
              <ul className="rightnav_ul">
                <li>
                  <div>
                    <SearchIcon
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearch(true)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <nav
            className={`absolute h-[80px] w-full bg-blue-100 top-0 flex justify-center align-center items-center  px-4 search_nav ${
              isSearch ? "show" : "hide"
            }`}
          >
            <div className="">
              <ChevronLeftIcon
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <div className="relative  ml-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] h-[40px] pl-10 pr-10 rounded-md border border-gray-300"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {searchText && (
                <XIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              )}
            </div>
          </nav>
          {/* <div className=" "></div> */}

          <nav
            className={`absolute h-full w-[60%] bg-black top-0 ${
              isMenuOpen ? "show" : "subhide"
            } p-4 overflow-hidden`}
          >
            <div className="flex flex-col  w-full h-full overflow-y-scroll">
              <div className="fixed">
                <button
                  className="text-white "
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="pt-3">
                <ul className="aligning_menu">
                  <li className="pl-[20px]">
                    <li>
                      <Link
                        to={"/"}
                        className="text-color"
                        onClick={(prev) => setIsMenuOpen(!prev)}
                      >
                        <p className="texts">Home</p>
                      </Link>
                    </li>
                  </li>

                  <li>
                    <li className="flex">
                      {ismenuClick === 1 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )}
                      <Link
                        className="text-color"
                        onClick={() => handleMenuClick(1)}
                      >
                        <p className="texts">What we do</p>
                      </Link>
                    </li>
                    {ismenuClick === 1 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(1)}>
                                {isSubmenuClick === 1 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">Business Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 1 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Digital
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link
                                      to={"/legal"}
                                      className="text-color texts"
                                    >
                                      Legal Solutions
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(2)}>
                                {isSubmenuClick === 2 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">Technology Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 2 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      MIT Services
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(3)}>
                                {isSubmenuClick === 3 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">Talent Solutions</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 3 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      IT Consulting
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      HealthCare
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(4)}>
                                {isSubmenuClick === 4 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">Capabities</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 4 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Artificial Intelligence
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Machine Learning
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Business Intelligence
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Cloud Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      CyberSecurity
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Data and Analytics
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Legal Process Outsourcing(LPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Business Process Outsourcing(BPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Recruitment Process Outsourcing(RPO)
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Finance and Risk Management
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Accounting Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Payroll Services
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Technology Training
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(5)}>
                                {isSubmenuClick === 5 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">Industries</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 5 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Aerospace
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Automotive
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Banking
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Chemicals
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Construction
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Education
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Energy
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Finance
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      HealthCare
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Insurance
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Manufacturing
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Pharma
                                    </Link>
                                  </li>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Retail & Wholesale
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li>
                    <li className="flex">
                      {ismenuClick === 2 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )}
                      <Link
                        className="text-color"
                        onClick={() => handleMenuClick(2)}
                      >
                        <p className="texts">Who we are</p>
                      </Link>
                    </li>
                    {ismenuClick === 2 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              <Link
                                to={"/who-we-are/About-us"}
                                onClick={(prev) => setIsMenuOpen(!prev)}
                              >
                                About us
                              </Link>
                            </li>
                          </li>

                          <li className="pl-[20px] ">
                            <li className="text-color texts flex items-center">
                              <button onClick={() => handleSubMenuClick(6)}>
                                {isSubmenuClick === 6 ? (
                                  <ChevronUpIcon className="h-6 w-6 text-color" />
                                ) : (
                                  <ChevronDownIcon className="h-6 w-6 text-color" />
                                )}
                              </button>
                              <Link className="text-color">
                                <p className="texts">People</p>
                              </Link>
                            </li>
                            {isSubmenuClick === 6 && (
                              <div className="pl-[20px]">
                                <ul>
                                  <li className="pl-[20px]">
                                    <Link className="text-color texts">
                                      Employee Center
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </li>

                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              Careers
                            </li>
                          </li>

                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              Newsroom
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              Foundation
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              Academy
                            </li>
                          </li>
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              Contact us
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li className="pl-[25px]">
                    <li>
                      <Link className="text-color">
                        <p className="texts">Careers</p>
                      </Link>
                    </li>
                  </li>

                  <li className="pl-[25px]">
                    <li>
                      <Link className="text-color">
                        <p className="texts">Newsroom</p>
                      </Link>
                    </li>
                  </li>

                  <li>
                    <li className="flex">
                      {ismenuClick === 3 ? (
                        <ChevronUpIcon className="h-6 w-6 text-color" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-color" />
                      )}
                      <Link
                        className="text-color"
                        onClick={() => handleMenuClick(3)}
                      >
                        <p className="texts">Contact us</p>
                      </Link>
                    </li>
                    {ismenuClick === 3 && (
                      <div>
                        <ul className="">
                          <li className="pl-[20px]">
                            <li className="text-color texts pl-[20px]">
                              AMXSOL India
                            </li>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
