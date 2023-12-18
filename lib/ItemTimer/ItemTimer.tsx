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
import playSvg from "./play.svg";
import pauseSvg from "./pause.svg";

const ItemTimer = (props: {
  name: string;
  time: number;
  active: boolean;
  paused: boolean;
  lastUpdated: number;
  nameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
}) => {
  const StartButton = (
    <button onClick={props.handleStart}>
      <img src={playSvg} className="h-12" />
    </button>
  );
  const PauseButton = (
    <button onClick={props.handlePause}>
      <img src={props.paused ? playSvg : pauseSvg} className="h-12" />
    </button>
  );
  return (
    <>
      <div className="w-full max-w-md p-2 space-x-2 mx-auto flex items-center">
        <>{props.active ? PauseButton : StartButton}</>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={props.name}
          onChange={props.nameChange}
          placeholder="Task Name"
        />
        <div className="font-mono">
          <span>
            {("0" + Math.floor(props.time / 1000 / 60 / 60)).slice(-2)}:
          </span>
          <span>
            {("0" + (Math.floor(props.time / 1000 / 60) % 60)).slice(-2)}:
          </span>
          <span>{("0" + (Math.floor(props.time / 1000) % 60)).slice(-2)}.</span>
          <span>{("0" + props.time).slice(-3)}</span>
        </div>
        <button
          className="bg-red-100 hover:bg-red-300 font-bold rounded p-2 text-sm"
          onClick={props.handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ItemTimer;
