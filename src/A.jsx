// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {createContext} from 'react';
import B from './B'

const GreetContext = createContext();
const Greet2Context = createContext();
export default function A () {
    const greet = 'hello';
    const greet2 = 'hello2';
    return (
        <GreetContext.Provider value = {greet}>
        <Greet2Context.Provider value = {greet2}>
        <div>
            <B/>
        </div>
        </Greet2Context.Provider>
        </GreetContext.Provider>
    )

}

export {GreetContext,Greet2Context};

