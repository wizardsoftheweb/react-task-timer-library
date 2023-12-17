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

import { ChangeEvent } from "react";

const ItemTimer = (props: {
  name: string;
  time: string;
  nameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="item-timer">
      <label className="item-timer__name__label">
        <input
          className="item-timer__name__input"
          type="text"
          value={props.name}
          onChange={props.nameChange}
        />
      </label>
      <div className="item-timer__time">{props.time}</div>
    </div>
  );
};

export default ItemTimer;