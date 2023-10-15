'use client';
import React, { useState } from 'react';

export interface DropdownProps {
  items: string[];
  selectedItem: string;
  setSelectedItem: any;
}

const Dropdown = ({ items, selectedItem, setSelectedItem }: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-40 overflow-hidden">
      <div
        id="trigger"
        className="p-2 cursor-pointer border-2 rounded-md bg-slate-700"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="">{selectedItem || 'Open Menu'}</p>
      </div>
      <div
        id="menu"
        className="absolute bg-slate-700 rounded mt-2 w-full h-full md:w-40 md:max-h-40 overflow-auto"
        hidden={!showMenu}
      >
        <ul className="flex flex-col">
          {items?.map((item: string) => {
            return (
              <li
                className="py-1 px-2 rounded hover:cursor-pointer hover:bg-slate-500"
                onClick={() => {
                  setSelectedItem(item);
                  setShowMenu(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
