import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import classes from "./DropdownMenu.module.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const list = [
    "საშუალო სკოლის დიპლომი",
    "ზოგადსაგანმანათლებლო დიპლომი",
    "ბაკალავრი",
    "მაგისტრი",
    "დოქტორი",
    "ასოცირებული ხარისხი",
    "სტუდენტი",
    "კოლეჯი (ხარისხის გარეშე)",
    "სხვა",
  ];

  const toggleDropdown = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.dropdown}>
      <p className={classes.quality}>ხარისხი</p>
      <button className={classes["dropdown-toggle"]} onClick={toggleDropdown}>
        აირჩიეთ
        {!isOpen ? (
          <AiOutlineCaretDown className={classes["arr-down"]} />
        ) : (
          <AiOutlineCaretUp className={classes["arr-up"]} />
        )}
        {isOpen && (
          <div>
            {list.map((item, i) => (
              <div key={i}>
                <ol className={classes.items}>{item}</ol>
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}

export default DropdownMenu;
