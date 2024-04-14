import Image from "next/image"
import * as React from "react"
import { ExcelUploadForm } from "@/components/excel-upload-form"
import Link from "next/link"

function tr(
  food: string,
  quantity: number,
  unit: string,
  packages: number,
  start_date: Date,
  end_date: Date,
  start_hour: string,
  end_hour: string,
) {
  const formattedStartDate = new Date(start_date).toLocaleDateString()
  const formattedEndDate = new Date(end_date).toLocaleDateString()
  return (
    <tr className="bg-white">
      <td className="border border-gray-300 px-4 py-2">{food}</td>
      <td className="border border-gray-300 px-4 py-2">{quantity}</td>
      <td className="border border-gray-300 px-4 py-2">{unit}</td>
      <td className="border border-gray-300 px-4 py-2">{packages}</td>
      <td className="border border-gray-300 px-4 py-2">{formattedStartDate}</td>
      <td className="border border-gray-300 px-4 py-2">{formattedEndDate}</td>
      <td className="border border-gray-300 px-4 py-2">{start_hour}</td>
      <td className="border border-gray-300 px-4 py-2">{end_hour}</td>
    </tr>
  )
}

export default function Home() {
  return (
    <div className="bg-white">
      <div
        className="bg-black/90 relative text-center flex flex-col justify-center items-center min-h-[400px] max-h-[680px] h-[80vw] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/img/feeding-people.png')" }}
      >
        <h1
          className="text-4xl font-bold mb-10 text-shadow-md"
          style={{ textShadow: "2px 4px 2px black" }}
        >
          Today, like never before
        </h1>
        <h3
          className="text-xl font-semibold mb-10 text-shadow-md"
          style={{ textShadow: "2px 2px 2px black" }}
        >
          Join us in aiding NGOs
        </h3>
        <Link
          href="#donate"
          className="inline-block px-6 py-1 text-lg font-semibold text-slate-100 bg-green-700 hover:bg-green-500 rounded-lg transition-all"
        >
          Donate
        </Link>
      </div>
      <div className="bg-white max-w-[1200px] z-10 relative text-center px-12 py-14 mt-[-40px] mx-auto border-t-8 border-green-500">
        <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-700">
          <h3 className="text-4xl font-semibold mb-4 py-3">
            Let&apos;s rally for a hunger-free future!
          </h3>
          <div className="px-36 mb-16">
            <p className="text-base mb-4">
              We find ourselves in a world where abundance and scarcity
              alarmingly coexist. In Mexico, 20.4 million tons of food are
              wasted every year, equivalent to 38 tons per minute. This is
              enough to feed 25.5 million people with food shortages. On the
              other hand, 3 out of every 10 people in Mexico face some degree of
              food insecurity. At this moment, there are 4.8 million Mexicans
              who probably have not eaten and perhaps will not do so for the
              rest of the day.
            </p>
            <p className="text-base mb-4">
              We invite all restaurants, supermarkets, and other food businesses
              to join us in this initiative. Together, we can make a big
              difference in the lives of millions of people and help create a
              more just and sustainable world.
            </p>
            <p className="text-base mb-4">
              Join us today and be part of the solution!,{" "}
              <span className="font-semibold">donate your food</span>
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-4xl font-semibold mt-4 mb-4 py-3" id="donate">
              Donate your food here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
              <ExcelUploadForm />
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg flex justify-center items-center">
                <a
                  href="/files/food-supply-template.xlsx"
                  download={true}
                  className="block text-2xl font-semibold text-blue-500 hover:text-blue-700"
                >
                  Download Excel template
                </a>
              </div>
            </div>
            <div className="mt-20 flex justify-center items-center flex-col">
              <h3 className="text-4xl font-semibold mb-7 ">Format Example</h3>
              <table className="max-w-3xl table-auto border border-collapse border-gray-300">
                <thead className="bg-green-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Food Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Quantity
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Unit</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Packages
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Start Date
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      End Date
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Start Hour
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      End Hour
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    tr(
                      "Rice",
                      1,
                      "kg",
                      10,
                      new Date("2024/08/12"),
                      new Date("2024/08/14"),
                      "15:00",
                      "18:00",
                    ),
                    tr(
                      "Beans",
                      2,
                      "kg",
                      8,
                      new Date("2024/08/13"),
                      new Date("2024/08/15"),
                      "16:00",
                      "19:00",
                    ),
                    tr(
                      "Corn",
                      3,
                      "kg",
                      7,
                      new Date("2024/08/14"),
                      new Date("2024/08/16"),
                      "17:00",
                      "20:00",
                    ),
                    tr(
                      "Wheat",
                      4,
                      "kg",
                      6,
                      new Date("2024/08/15"),
                      new Date("2024/08/17"),
                      "18:00",
                      "21:00",
                    ),
                    tr(
                      "Barley",
                      5,
                      "kg",
                      5,
                      new Date("2024/08/16"),
                      new Date("2024/08/18"),
                      "19:00",
                      "22:00",
                    ),
                  ].map((row, index) => (
                    <React.Fragment key={index}>{row}</React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="max-w-3xl mx-auto mt-8">
              <table className="w-full bg-gray-50 rounded-lg p-6">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left px-4 py-2">Field</th>
                    <th className="text-left px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Food Name</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the name of the food to be donated. For example,
                      it can be rice, beans, corn, etc.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Quantity</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the total amount of food to be donated. For
                      example, if you have 1 kg of rice, then the amount would
                      be 1.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Unit</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the unit of measure for the amount of food to be
                      donated. For example, if you have 1 kg of rice, then the
                      unit would be kg.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Packages</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the total number of food packages to be donated.
                      For example, if you have 10 packages of 1 kg of rice each,
                      then the packages would be 10.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Start Date</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the start date on which the food can be collected.
                      For example, if you are going to start donating the food
                      on August 12, 2024, then the start date would be
                      2024/08/12.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>End Date</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the end date by which the food can be collected.
                      For example, if you are going to finish donating the food
                      on August 14, 2024, then the end date would be 2024/08/14.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>Start Hour</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the start time of the day at which the food can be
                      collected. For example, if you can distribute the food
                      starting at 3:00 pm, then the start time would be 15:00.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4 py-2">
                      <b>End Hour</b>
                    </td>
                    <td className="text-left px-4 py-2">
                      This is the latest time of the day that food can be
                      collected. For example, if you stop distributing food
                      after 8:00 p.m., then the start time would be 20:00.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
