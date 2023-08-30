"use client";

import axios from "axios";
import { useState } from "react";

const options: string[] = ["subjects", "sports", "other"];

export default function Home() {
  // * set state for username
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");

  // * function to send api request
  const sendApiRequest = async () => {
    console.log("sendApiRequest");
    const res = await axios.post("http://localhost:3000/api/login", { username });
    console.log("res ---> ", res.data);
    alert(res.data.msg);
  };

  const getCategory = async () => {
    const url = "http://localhost:3000/api/search?category=" + category;
    console.log("url ---> ", url);
    const res = await axios.get(url);

    setItems(res.data.categories);
  };

  return (
    <div>
      {/* container */}
      <div className="bg-purple-200 p-2 flex items-center justify-center gap-12">
        <div>username :</div>
        <input
          placeholder="enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-yellow-200 px-10 py-2 rounded-full shadow-2xl hover:bg-yellow-500"
          onClick={sendApiRequest}
        >
          login
        </button>
      </div>

      {/* container */}
      <div className="bg-sky-200 p-2 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>
              -- please select --
            </option>
            {options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            className="bg-red-200 px-10 py-2 rounded-full shadow-2xl hover:bg-yellow-500"
            onClick={getCategory}
          >
            get data
          </button>
        </div>

        <div>
          {items?.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
