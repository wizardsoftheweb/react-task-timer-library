// Copyright 2023 CJ Harries
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import "./ItemTimer.css";
import { ChangeEvent } from "react";

const ItemTimer = (props: {
  name: string;
  time: number;
  nameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div className="item-timer w-full max-w-sm p-2 space-x-2 mx-auto flex items-center">
        <input
          className="item-timer__name shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.name}
          onChange={props.nameChange}
          placeholder="Task Name"
        />
        <div className="item-timer__time">{props.time}</div>
      </div>
    </>
  );
};

export default ItemTimer;
