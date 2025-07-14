"use client";

import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import "flag-icons/css/flag-icons.min.css"; // Ensure flag-icons is imported

const countries = [
  { name: "India", code: "in" },
  { name: "Pakistan", code: "pk" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "United States", code: "us" },
];

export default function CountrySelect() {
  const [selected, setSelected] = useState(countries[1]);

  return (
    <div className="w-full ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-left text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <span className="flex items-center gap-2">
              <span className={`fi fi-${selected.code}`}></span>
              {selected.name}
            </span>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronUpDownIcon className="h-4 w-4 text-gray-500" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200 py-1 text-sm">
            {countries.map((country) => (
              <Listbox.Option
                key={country.code}
                value={country}
                className={({ active }) =>
                  `relative cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-blue-50 text-[#001845]" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center gap-2">
                    <span className={`fi fi-${country.code}`}></span>
                    {country.name}
                    {selected && (
                      <span className="ml-auto">
                        <CheckIcon className="h-4 w-4 text-blue-600" />
                      </span>
                    )}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
