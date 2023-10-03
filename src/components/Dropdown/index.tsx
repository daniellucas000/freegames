import { useState } from 'react';

import * as Dropdown from './styled';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedItem] = useState<string>('One');

  function setItem(e: Event) {
    const target = e.target as HTMLDivElement;
    setSelectedItem(target.textContent ?? 'unknown');
  }

  return (
    <Dropdown.DropdownMenu onOpenChange={setIsOpen}>
      <Dropdown.DropdownMenuTrigger>
        {selectedValue}{' '}
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </Dropdown.DropdownMenuTrigger>
      <Dropdown.DropdownMenuContent>
        <Dropdown.DropdownMenuItem onSelect={setItem}>
          One
        </Dropdown.DropdownMenuItem>
        <Dropdown.DropdownMenuItem onSelect={setItem}>
          Two
        </Dropdown.DropdownMenuItem>
        <Dropdown.DropdownMenuItem onSelect={setItem}>
          Three
        </Dropdown.DropdownMenuItem>
      </Dropdown.DropdownMenuContent>
    </Dropdown.DropdownMenu>
  );
}
