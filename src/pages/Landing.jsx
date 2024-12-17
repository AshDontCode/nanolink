import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const [longURL, setLongURL] = useState();
  const navigate = useNavigate();

  const handleShorten = (e)=>{
    e.preventDefault();
    if(longURL) navigate(`/auth?createNew=${longURL}`)
  }



  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7x text-center font-extrabold">
        The Only <span className="from-orange-600  to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">URL Shortener</span> <br /> You&rsquo;ll ever need!
      </h2>

      <form 
      onSubmit={handleShorten}
      className="p-4 sm:h-14 space-y-2 sm:space-y-0 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          value={longURL}
          placeholder="Enter you URL"
          onChange={(e)=>{setLongURL(e.target.value)}}
          className="h-full flex-1 p-4 sm:p-6"
        />
        <Button


          className="h-full p-4 sm:p-6"
          type="Submit"
          variant="destructive"
        >
          Shorten!
        </Button>
      </form>

      <img
        src="public/Short-URl-Banner2.png"
        alt=""
        className="w-150 sm:w-300 my-11 md:px-11"
      />

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is NanoLink</AccordionTrigger>
          <AccordionContent>
            NanoLink is a URL shortener that helps you create compact, shareable
            links from long URLs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How does NanoLink work?</AccordionTrigger>
          <AccordionContent>
            Simply paste your long URL into NanoLink's input box, and it will
            generate a shorter link for you to use and share.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I track clicks on my shortened links?
          </AccordionTrigger>
          <AccordionContent>
            Yes, NanoLink provides analytics for tracking the number of clicks,
            geographic locations, and other metrics (if included).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I customize my shortened links?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can create custom URLs (e.g., nanolink.com/my-link) for
            better branding.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Landing;
