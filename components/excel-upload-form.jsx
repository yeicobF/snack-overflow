"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export const ExcelUploadForm = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(file)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 border border-gray-300 p-4 rounded-lg flex items-center justify-center flex-col"
    >
      <label className="block mb-2 text-lg font-semibold">
        Upload the food you wish to donate:
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="mt-2 p-2 border border-gray-300 rounded-md w-full"
        />
      </label>
      <Button
        type="submit"
        className="mt-4 w-full font-semibold py-2 px-4 rounded-md"
      >
        Submit
      </Button>
    </form>
  )
}
