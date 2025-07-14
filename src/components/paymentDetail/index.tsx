"use client";
import Image from "next/image";
import {
  LockClosedIcon,
  CreditCardIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { FaLock } from "react-icons/fa";
import { Input } from "../ui/input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { count } from "console";

export default function PaymentDetail() {
  const countries = [
    { code: "IN", name: "India", flag: "/flags/IN.svg" },
    { code: "PK", name: "Pakistan", flag: "/flags/PK.svg" },
    { code: "AE", name: "United Arab Emirates", flag: "/flags/AE.svg" },
    { code: "US", name: "United States", flag: "/flags/US.svg" },
  ];
  return (
    <main className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* ---------- LEFT: form ---------- */}
      <section className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-full  p-2">
          {/* logo */}
          <div className="mx-auto w-24">
            <Image
              src="/logo.png"
              alt="Library of Alexandria"
              width={168}
              height={80}
            />
          </div>

          <h1 className=" text-[30px] lg:text-[45px] font-bold text-[#001845] text-center">
            Payment Details
          </h1>
          <p className="text-center text-[16px] lg:text-[20px] text-black ">
            This is to verify your account, <br />
            <span className="font-bold text-[16px] lg:text-[20px]">
              you won’t be charged during your free trial.
            </span>
          </p>

          <form className="w-auto lg:w-[485px] mx-auto rounded-[9px]  space-y-4  shadow-md py-4 px-8 shadow-white  ">
            <Input
              placeholder="Card Holder Full Name"
              icon={<UserCircleIcon className="h-5 w-5 text-gray-400" />}
            />
            <Input
              placeholder="Card Number"
              icon={<CreditCardIcon className="h-5 w-5 text-gray-400" />}
            />

            <div className="flex gap-3">
              <Input placeholder="MM/YY" className="flex-1" />
              <Input placeholder="CVV" className="flex-1" />
            </div>

            <Select

            // countries={[
            //   { code: "IN", name: "India", flag: "/flags/IN.svg" },
            //   { code: "PK", name: "Pakistan", flag: "/flags/PK.svg" },
            //   {
            //     code: "AE",
            //     name: "United Arab Emirates",
            //     flag: "/flags/AE.svg",
            //   },
            //   { code: "US", name: "United States", flag: "/flags/US.svg" },
            // ]}
            />

            <Button className="w-full">Start Free Trial for 7 Days</Button>

            <div className=" flex flex-col w-full items-center text-xs space-y-2">
              <div className="flex items-center gap-1 w-full justify-between">
                <div className="flex items-center gap-1 ">
                  <FaLock className="h-[13px] w-[16px] text-black " />
                  <span>Secure Payments</span>
                </div>
                <span>Safe and Secure SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1 justify-between w-full">
                <Button className="px-2 text-xs w-[150px]">
                  powered by <span className="font-bold">stripe</span>
                </Button>
                <div className="lg:mt-2">
                  <Image
                    src="/icons.png"
                    alt="Stripe, Visa, Mastercard, Apple Pay icons"
                    width={249}
                    height={29}
                    priority
                  />
                </div>
              </div>
            </div>
          </form>

          {/* footnotes */}

          {/* Trustpilot */}
          <div className=" flex justify-center ">
            <Image
              src="/startfram.png"
              alt="Trustpilot"
              width={157}
              height={39}
            />
          </div>
        </div>
      </section>

      {/* ---------- RIGHT: promo ---------- */}
      <section className=" hidden lg:flex w-full lg:w-1/2  items-center justify-center bg-[#FBF2E0] flex-col text-center p-6 lg:p-12 space-y-6">
        <div className="max-w-md p-6 lg:p-0">
          <h2 className="text-xl lg:text-2xl font-semibold text-start">
            Join
            <span className="inline-block bg-[#FCE29D] text-[#8A6E00] px-3 transtform -rotate-[6.36deg] rounded-full">
              2,000+
            </span>{" "}
            early Founders who have already answered the call to rebuild the
            Library of Alexandria
          </h2>
        </div>

        <div className="h-3/5">
          <div className=" w-full h-full">
            <Image
              src="/globstack.png"
              alt="Library of Alexandria"
              width={300}
              height={300}
              className="absolute  bottom-0 right-0 w-full max-w-md lg:max-w-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
